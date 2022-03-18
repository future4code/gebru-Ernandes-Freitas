import React,{useState,useEffect} from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import styled from "styled-components"

const Container = styled.div`
    
    font-family: sans-serif;

    text-align: center;
`

function App () {

  const [pokeList,setPokeList] = useState([])
  const [pokeName, setPokeName] =useState('')



  const lisPokemons = ()=> {
     axios
     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
     .then(response => {
       setPokeList(response.data.results)
      
     })
     .catch(error => {
       console.log(error.response.data.message)
     })
  };

  const changePokeName = (event) =>{
    setPokeName(event.target.value)
  };
 
  useEffect(()=>{
    lisPokemons() 
  },[])

  console.log(pokeList)

  return (
    <Container >
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>

        {pokeList.map((pokens)=>{
          return (
            <option keu ={pokens.name} value={pokens.name}>
              {pokens.name}
            </option>
          )
        })};

      </select>
      {pokeName && <PokeCard pokemon={pokeName}/>} 
    </Container>
  );
}

export default App;
