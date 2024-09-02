import styled , { keyframes }from "styled-components";
import logoPokemon from '../../images/pokemon.png'
import pokeBall from "../../images/pokeball.png"

export const BackgroundHome = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;

 
`;

export const LogoHome = styled.div`
  display: flex;
  position: absolute;
  height: 300px;
  
  width: 100%;
  background-image: url(${logoPokemon});
  background-size: 400px;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 2; 
  
  @media only screen and (max-width: 768px) {
    background-size: 200px;
  }
`;

export const PokeBallBackground = styled.div`

  position: absolute;
  width: 400px;
  height: 400px;
  background-size: 400px;
  background-repeat: no-repeat;
  background-image: url(${pokeBall});

  filter: brightness(0) saturate(100%) invert(92%) sepia(6%) saturate(200%) hue-rotate(180deg) brightness(95%) contrast(85%);

  @media only screen and (max-width: 768px) {
    background-size: 200px;
  }
`;



export const SearchPokemon = styled.input`

border: none;
width: 87%;
z-index: 5;
margin-right: 10px;
height: 50px;
text-indent: 10px;
border-radius:15px;


box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
font-family: "Moderustic", sans-serif;
font-weight: bold;
@media only screen and (max-width: 768px) {
    margin: 0px;
   
  }
`

export const ContainerSearchPokemon = styled.div`
display: flex;
flex-direction: column;
z-index: 99;
height: 100%;
padding: 250px 250px 50px 250px;
overflow: hidden;

gap: 10px;
align-items: center;
@media only screen and (max-width: 768px) {
    padding: 250px 20px 50px 20px;
  }
`

export const CardPokemon =styled.div `
display: flex;
margin-top: 10px;
width: 290px;
height: 200px;
border-radius: 15px;
position: relative;
margin: 5px;
padding: 5px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;



@media only screen and (max-width: 1024px) {
    width: 45%;
}


@media only screen and (max-width: 768px) {
    width:40%;
    
}

@media only screen and (max-width: 425px) {
    width:100%;
   
}
`

export const ContainerCards = styled.div`
  display:flex;
  padding: 10px;
  position: relative;
  flex-wrap:wrap;
  overflow-y:auto;
  height:600px;
  width:100%;
  justify-content: center;
  
`

export const DivInformationPokemon = styled.div`
display: flex;
border-radius: 15px;
padding: 10px;
flex-direction: column;
width:100%;
background-color: white;
font-family: "Moderustic", sans-serif;
z-index: 99;

`


export const TypePokemon = styled.div`
display: flex;
height: auto;
gap: 5px;

p{
  margin: 0px;
    background-color: green;
    padding: 5px 10px 5px 10px;
    border-radius: 15px;
}
`
export const PokemonDescription = styled.div`
display: flex;
width: 60%;
flex-direction: column;



h2{
  
    margin: 0px;
    font-weight: bold;
}

p{
    overflow-wrap: break-word;
    overflow: hidden; 
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; 
    line-clamp: 4; 
    box-orient: vertical;
    margin: 0px;
    height: 80px;
    
}

`
export const ImagePokemon = styled.div`
width: 40%;
height: 100%;
background-image: url(${pokeBall});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

`

export const ReadMore = styled.div`
padding: 5px;
width: 50%;
text-align: center;
cursor: pointer;
background-color:#f0f1e5;

`


const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
 
  transform: translate(-50%,50%);

  width: 48px;
  height: 48px;
  border: 5px solid gray;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;