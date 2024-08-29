import { Pokemon } from "./Home";
import { PokeBallBackground, PokemonDescription, TypePokemon } from "./HomeStyle";
import { Abilities, Card, ContainerMoreInformations, DivMoreInformations, HeightAndWeight, Informations, Stats, ImagePokemon, Exit, BoxImageAndInformation, Evolutions, Arrow, ImageEvolve } from "./MoreInformationsStyle";
import { getColorByType } from "./Home";


interface MoreInformationsProps {
    pokemon: Pokemon | null;
    onClose: () => void;
    onSelectEvolution: (pokemonName: string) => void;
}

const statsMapping = [
    { name: 'HP', color: '#df2140' },
    { name: 'ATK', color: '#ff994d' },
    { name: 'DEF', color: '#eecd3d' },
    { name: 'SpA', color: '#85ddff' },
    { name: 'SpD', color: '#96da83' },
    { name: 'SPD', color: '#fb94a8' },
];

const MoreInformations: React.FC<MoreInformationsProps> = ({ pokemon, onClose, onSelectEvolution }) => {
    if (!pokemon) return null;

    const statNamesMapping: { [key: string]: string } = {
        hp: 'HP',
        attack: 'ATK',
        defense: 'DEF',
        'special-attack': 'SpA',
        'special-defense': 'SpD',
        speed: 'SPD',
    };

    const getPokemonIdFromUrl = (url: string) => {
        const parts = url.split('/');
        return parts[parts.length - 2]; 
    };

    const renderEvolutionChain = (chain: any) => {
        if (!chain) return null;

        const evolutions = [];
        let currentChain = chain;

        while (currentChain) {
            const evolutionId = getPokemonIdFromUrl(currentChain.species.url);
            const evolutionImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolutionId}.png`;

            evolutions.push({
                name: currentChain.species.name,
                image: evolutionImageUrl
            });

            currentChain = currentChain.evolves_to[0]; 
        }

        return evolutions.map((evolution, index) => (
            <>
        
            <ImageEvolve
                    style={{ backgroundImage: `url(${evolution.image})`, width: `${100 + index * 50}px`, cursor:'pointer'}}
                    onClick={() => onSelectEvolution(evolution.name)}
                />
                {index < evolutions.length - 1 && <Arrow />}
            </>               
        ));
    };

    return (
        <>
            <ContainerMoreInformations>
            <PokeBallBackground style={{ left: '80%', top: "80%" }} />
          <PokeBallBackground style={{ left: '80%', top: "-10%" }} />
          <PokeBallBackground style={{ left: '0%', top: "20%" }} />
                <DivMoreInformations>
                    <Card>
                        <Exit onClick={onClose}>X</Exit>
                        <BoxImageAndInformation>
                            <ImagePokemon style={{ backgroundImage: `url(${pokemon.image})` }}></ImagePokemon>
                            <Informations>
                                <p style={{ fontWeight: '500' }}># {pokemon.id}</p>
                                <h2>{pokemon.name[0].toUpperCase() +pokemon.name.substring(1)}</h2>
                                <TypePokemon style={{ marginTop: '5px' }}>
                                    {pokemon.types.map((type) => (
                                        <p style={{ backgroundColor: getColorByType(type.type.name) }} key={type.type.name}>{type.type.name}</p>
                                    ))}
                                </TypePokemon>
                                <PokemonDescription style={{ width: '100%' }}>
                                    <p style={{ margin: '0px', height: 'auto' }}>{pokemon.description}</p>
                                </PokemonDescription>
                                <HeightAndWeight>
                                    <p>Height <p style={{ textAlign: 'end', margin: '0px', fontWeight: 'normal' }}>{pokemon.height} m</p></p>
                                    <p>Weight <p style={{ textAlign: 'end', margin: '0px', fontWeight: 'normal' }}>{pokemon.weight} kg</p></p>
                                </HeightAndWeight>
                                <h2>Stats</h2>
                                <Stats>
                                    {pokemon.stats.map((stat, index) => {
                                        const mappedName = statNamesMapping[stat.stat.name];
                                        const color = statsMapping[index]?.color || '#ccc';
                                        return (
                                            <p key={stat.stat.name} style={{ backgroundColor: color }}>
                                                {mappedName} <p style={{ justifyContent: 'end', padding: '0px', width: '100%', paddingRight: '5px' }}>{stat.base_stat}</p>
                                            </p>
                                        );
                                    })}
                                </Stats>
                                <h2>Abilities</h2>
                                <Abilities>
                                    {pokemon.abilities.map(ability => (
                                        <p key={ability.ability.name}>{ability.ability.name}</p>
                                    ))}
                                </Abilities>
                            </Informations>
                        </BoxImageAndInformation>
                    </Card>
                    <h2 style={{display:'flex', textIndent:'20px', margin:'0px', marginBlockEnd:'5px',}}>Evolutions</h2>
                    <Evolutions>
                    
                    <div style={{display:'flex', width:'100%', alignItems:'center', height:'100%', justifyContent:'space-around'}}>
                    {renderEvolutionChain(pokemon.evolutionChain)}
                    </div>
                       
                    </Evolutions>
                </DivMoreInformations>
            </ContainerMoreInformations>
        </>
    );
};

export default MoreInformations;
