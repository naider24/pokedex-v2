import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BackgroundHome,
  CardPokemon,
  ContainerCards,
  ContainerSearchPokemon,
  DivInformationPokemon,
  ImagePokemon,
  Loading,
  LogoHome,
  PokeBallBackground,
  PokemonDescription,
  ReadMore,
  SearchPokemon,
  TypePokemon
} from "./HomeStyle";
import MoreInformations from './MoreInformations';

// Definindo tipos para os dados dos Pokémon
 export interface Pokemon {
  name: string;
  id: number;
  types: { type: { name: string } }[];
  image: string;
  description: string;
  height: number;
  weight: number;
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: { ability: { name: string } }[];
  evolutionChain: {evolution:{name:string}}[];
}


// Função para mapear o tipo do Pokémon a uma cor
export const getColorByType = (type: string): string => {
  switch (type) {
    case 'grass':
      return '#78C850';
    case 'fire':
      return '#F08030';
    case 'water':
      return '#6890F0';
    case 'bug':
      return '#A8B820';
    case 'normal':
      return '#A8A878';
    case 'poison':
      return '#A040A0';
    case 'electric':
      return '#F8D030';
    case 'ground':
      return '#E0C068';
    case 'fairy':
      return '#EE99AC';
    case 'fighting':
      return '#C03028';
    case 'psychic':
      return '#F85888';
    case 'rock':
      return '#B8A038';
    case 'ghost':
      return '#705898';
    case 'ice':
      return '#98D8D8';
    case 'dragon':
      return '#7038F8';
    case 'dark':
      return '#705848';
    case 'steel':
      return '#B8B8D0';
    case 'flying':
      return '#A890F0';
    default:
      return '#A8A878'; // Normal color as default
  }
};

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>("");
  const [viewCard, setViewCard] = useState<boolean>(false);
  const [pokemonCard, setPokemonCard] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<Boolean>(true)

  const MoreDetails = (pokemon: Pokemon) => {
    setViewCard(true);
    setPokemonCard(pokemon);
  };

  const ExitCard = () => {
    setViewCard(false);
    setPokemonCard(null);
  };
  const fetchEvolutionChain = async (speciesUrl: string) => {
    const speciesDetail = await axios.get(speciesUrl);
    const evolutionChainUrl = speciesDetail.data.evolution_chain.url;
    const evolutionChainResponse = await axios.get(evolutionChainUrl);
    return evolutionChainResponse.data.chain;
};

const fetchPokemons = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000'); 

        const sanitizeDescription = (description: string): string => {
            return description.replace(/[\n\f\r\u21B5\u2191\u21A8\u21AA]/g, ' ').replace(/↵/g, '');
        };

        const pokemonData = await Promise.all(
            response.data.results.map(async (pokemon: { name: string, url: string }) => {
                const pokeDetail = await axios.get(pokemon.url);
                const speciesDetail = await axios.get(pokeDetail.data.species.url);
                const flavorTextEntry = speciesDetail.data.flavor_text_entries.find(
                    (entry: { language: { name: string } }) => entry.language.name === 'en'
                );

                const imageUrl = pokeDetail.data.sprites.other['official-artwork'].front_default;
                const evolutionChain = await fetchEvolutionChain(pokeDetail.data.species.url);
               
                return {
                    name: pokeDetail.data.name[0].toUpperCase() + pokeDetail.data.name.substring(1),
                    id: pokeDetail.data.id,
                    types: pokeDetail.data.types,
                    image: imageUrl,
                    description: flavorTextEntry ? sanitizeDescription(flavorTextEntry.flavor_text) : "Descrição não disponível",
                    height: pokeDetail.data.height / 10,  
                    weight: pokeDetail.data.weight / 10,  
                    stats: pokeDetail.data.stats,
                    abilities: pokeDetail.data.abilities,
                    evolutionChain: evolutionChain 
                };
            })
        );

        setPokemons(pokemonData);
        setLoading(false)
    } catch (error) {
        console.error("Erro ao buscar pokémons: ", error);
    }
};


  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleSelectEvolution = async (pokemonName: string) => {
    const selectedPokemon = pokemons.find(pokemon => pokemon.name === pokemonName);
    if (selectedPokemon) {
       
        
        setPokemonCard(selectedPokemon);  
    }
};

  return (
    <>


    <>
    {viewCard ? (
        <MoreInformations pokemon={pokemonCard} onClose={ExitCard} onSelectEvolution={handleSelectEvolution} />
      ) : (
        <BackgroundHome>
          <PokeBallBackground />
          <PokeBallBackground style={{ left: '80%', top: "-10%" }} />
          <PokeBallBackground style={{ left: '50%', top: "20%" }} />
          <LogoHome />
          <ContainerSearchPokemon>
            <SearchPokemon
              placeholder="Pesquise o pokemon"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <ContainerCards>
              
              
              {loading? <>
                <div style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Loading></Loading>
               </div>
              </> : 
              <>
                {pokemons
                .filter(pokemon => pokemon.name.includes(search))
                .map(pokemon => (
                  <CardPokemon key={pokemon.id} style={{ backgroundColor: getColorByType(pokemon.types[0].type.name) }}>
                    <DivInformationPokemon>
                      <TypePokemon>
                        {pokemon.types.map((type, index) => (
                          <p style={{ backgroundColor: getColorByType(pokemon.types[index].type.name) }} key={type.type.name}>{type.type.name}</p>
                        ))}
                      </TypePokemon>
                      <div style={{ display: 'flex', width: '100%', height: '120px' }}>
                        <PokemonDescription>
                          <h2>{pokemon.name}</h2>
                          <p>{pokemon.description}</p>
                        </PokemonDescription>
                        <ImagePokemon style={{ backgroundImage: `url(${pokemon.image})` }} />
                      </div>
                      <ReadMore onClick={() => MoreDetails(pokemon)}>Read More</ReadMore>
                    </DivInformationPokemon>
                  </CardPokemon>
                ))}</>}
              
            </ContainerCards>
          </ContainerSearchPokemon>
        </BackgroundHome>
      )}
    </>
      
    </>
  );
}

export default Home;