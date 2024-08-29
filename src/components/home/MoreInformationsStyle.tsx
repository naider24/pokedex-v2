import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const ContainerMoreInformations = styled.div`
display: flex;
flex:1;
width: 100%;
height: 100%;
top:0%;
left: 0%;
position: absolute;
font-family: "Moderustic", sans-serif;
justify-content: center;
z-index: 1000;
align-items: center;
overflow: hidden;

@media only screen and (max-width: 425px) {
    width: 100%;
    justify-content: start;
    align-items: start;
    overflow-y: auto;
    overflow-x: hidden;
  
}
background-color: white;
`

export const DivMoreInformations = styled.div`
display: flex;
flex-direction: column;
overflow: auto;
width: 50%;
padding: 10px;
background-color: white;
height: 90%;

@media only screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
}

`

export const Card= styled.div`
display: flex;
padding: 20px;
height: 500px;
border-radius: 15px;
position: relative;
flex-direction: column;


@media only screen and (max-width: 425px) {
  
    box-shadow: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 2px 16px 0px;
}
@media only screen and (max-width: 1024px) {
  
    height: auto;
}



`

export const ImagePokemon = styled.div`

width: 60%;
height: 100%;
background-size: contain;
background-repeat: no-repeat;
background-position: center center;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 250px;
}



`

export const ImageEvolve = styled.div`
width: 60%;
height: 100%;
background-size:contain;
background-repeat: no-repeat;
background-position: center center;


  @media only screen and (max-width: 425px) {
    height: 50%;
    background-size: contain;
}

`

export const Informations = styled.div`
display: flex;

flex-direction: column;
width:45%;
height: 100%;
@media only screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  
}
font-family: "Moderustic", sans-serif;
gap: 10px;

p {
    margin: 0px;
    font-size: 12px;
}

h2{
    margin: 0px;
}

`
export const HeightAndWeight= styled.div`
gap: 5px;
display: flex;
width: 100%;
flex-wrap: wrap;


p{
    display: flex;
    margin: 0px;
    align-items: center;
    width: auto;
    padding: 3px;
    text-indent: 2px;
    border-radius: 5px;
    background-color: #e5e5e5;
    font-weight: bold;
    font-size: 16px;
}
`

export const BoxImageAndInformation = styled.div`
display: flex;
align-items: center;
@media only screen and (max-width: 425px) {
    flex-direction: column;
}
`
   

export const Stats = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width: 100%;
gap: 5px;
p{
    display: flex;
    text-indent: 5px;
    align-items: center;
    font-size:15px;
    font-weight: bold;
    margin: 0px;
    width: 45%;
    border-radius: 5px;
    height: 40px;
}

`

export const Abilities= styled.div`
display: flex;
width: 100%;
gap: 5px;
p{
display: flex;
align-items: center;
padding:3px;
text-indent: 2px;
border-radius: 5px;
font-size: 14px;
font-weight: 600;
background-color: #e5e5e5;
}
`

export const Exit = styled.div`
display: flex;
width: 100%;
justify-content: end;

font-family: "Moderustic", sans-serif;
height: auto; 
margin: 0px;
cursor: pointer;
font-weight: bold;
color :gray;

`

export const Evolutions = styled.div`
display: flex;
height: 250px;
flex-direction: column;
justify-content: space-around;
position: relative;
@media only screen and (max-width: 425px) {
    margin-left: 20px;
}
`



export const Arrow = styled(IoIosArrowForward)`
font-size: 20px;


`