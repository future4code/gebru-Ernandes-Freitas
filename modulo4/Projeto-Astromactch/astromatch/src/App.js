import HomePage from "./components/HomePage/HomePage"
import Match from "./components/Match/Match";
import styled from "styled-components";
import { useState } from "react";




const ContaineGeral = styled.div`
margin-top: 50px; 
display: flex;
justify-content: center;
align-items: center;


`
function App() {

  const [rendePage ,setRendePage] =useState("Home")

  const matchPage = () => {
    setRendePage("Match")
  }
  const homePage = () =>{
    setRendePage("Home")
  }

  const rendePages = () => {

    switch (rendePage) {
      case "Home":
        return <HomePage matchPage= {matchPage}/>
      case "Match":
      return <Match homePage={homePage}/>
      default:
        alert("Erro na pagina!")
    }

  }
  

  return (
    <ContaineGeral >
     {rendePages()}
    </ContaineGeral>
  );
}

export default App;
