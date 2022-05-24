
import React from "react";
import {useNavigate} from "react-router-dom"
import {listTripsPageViagens,LoginPageViagens,} from "../routes/coordinator"
import {Container,Titulo,DivButton,Buttons,DivImg,Icones,HoverIcons} from "../style/StyledHome"
import iconsFacebook from "../img/iconsFacebook.png"
import iconsInstagram from "../img/iconsInstagram.png";

function HomePage () {

  const navigate = useNavigate()
  return (
    <Container>
        <Titulo>Labex</Titulo>
        <DivButton> 
          <Buttons onClick={()=>listTripsPageViagens(navigate)} >viagens </Buttons>
          <Buttons onClick={()=>LoginPageViagens(navigate)}> login </Buttons>
        </DivButton>
          <DivImg>
            <HoverIcons> <Icones src={iconsFacebook} alt="facebook" /> </HoverIcons>
            <HoverIcons> <Icones src= {iconsInstagram} alt="facebook" /> </HoverIcons>
            
            
          </DivImg>

    </Container>
  );
};

export default HomePage;
