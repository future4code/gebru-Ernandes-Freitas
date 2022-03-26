import HomePage from "./components/HomePage/HomePage"
import Match from "./components/Match/Match";
import styled from "styled-components";
import { useState } from "react"
import CoracaoRoxo from "./components/img/CoracaoRoxo.png"
import imgX from "./components/img/imgX.png"
import iconsVerificado from "./components/img/iconsVerificado.png"
import astroMatch from "./components/img/astroMatch.PNG"
import voltar from "./components/img/voltar.png"
import lixeira from "./components/img/lixeira.png"



const ContaineGeral = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border: solid 1px black;

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
        return <HomePage matchPage= {matchPage} coracao ={CoracaoRoxo} imageX = {imgX} iconsVerificado ={iconsVerificado} />
      case "Match":
      return <Match homePage={homePage} astroMatch={astroMatch} voltar = {voltar} lixeira ={lixeira}/>
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
