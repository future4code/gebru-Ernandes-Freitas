import React from 'react'
import  {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {backPage,applicationFormPage } from "../Routes/coordinator"
import {useNavigate} from "react-router-dom"
import { Container,CardsDiv,ButtonDiv,ButtonsV, ListP } from "../style/StyledListTripsPage"


function ListTripsPage () {
    
        const navigate = useNavigate()

        const [getTripsListAllViagens,setGetTripsListAllViagens] = useState([])
    

    useEffect (()=>{
        
        getTripsAllViagens ()
        
    },[])

    const getTripsAllViagens = () => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernandes-freitas-gebru/trips`

      
        axios
        .get (url)
        .then ((response)=>{
            setGetTripsListAllViagens(response.data.trips)
            

        })
        .catch((error)=>{
            console.log(error.response.data)
        })
        
    }; 
    
    const allListViagens = getTripsListAllViagens.map((viagens)=>{

            return (
                <CardsDiv key={viagens.id}>
                        <ListP><strong>Nome:</strong> {viagens.name}</ListP>
                        <ListP> <strong>Descrição:</strong> {viagens.description} </ListP>
                        <ListP> <strong>Planeta:</strong> {viagens.planet} </ListP>
                        <ListP> <strong>Duração:</strong> {viagens.durationInDays} </ListP>
                        <ListP> <strong>Data:</strong> {viagens.date}</ListP>
                </CardsDiv>
            )

        });

    

    return (
        
      <Container>
          <ButtonDiv>
            <ButtonsV onClick={()=> backPage(navigate)}>Voltar</ButtonsV>
            <ButtonsV onClick={()=> applicationFormPage (navigate)}>inscreva-se</ButtonsV>
          </ButtonDiv>
            {allListViagens}
                 
                
           
      </Container>
    );
  };
  
  export default ListTripsPage;
  