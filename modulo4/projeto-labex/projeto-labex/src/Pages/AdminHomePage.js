import {useNavigate} from "react-router-dom"
import {backPage,createTripPageViagens,TripDetailsPageViagens} from "../routes/coordinator"
import {useProtectedPage} from "../hooks/useProtectedPage"
import  {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Container,CardsViagem,ListPViagem,Buttonheader,ButtonsVoltarECriar,TituloViagens, } from "../style/StyledAdminHomePage"


function AdminHomePage () {
  useProtectedPage ();
  const navigate = useNavigate()

      const [allViagens,setAllViagens] = useState([]);

          useEffect (()=>{
              
            allViagem ()
              
          },[]);

      const allViagem = () => {

          const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernandes-freitas-gebru/trips`
           axios
          .get (url)
          .then ((response)=>{
            setAllViagens(response.data.trips)  
          })
          .catch((error)=>{
              console.log(error.response.data)
          })
       }; 
  
  const allListViagens = allViagens.map((viagens)=>{
          return (
              <CardsViagem   key={viagens.id}>
                      <ListPViagem><strong>{viagens.name}</strong> </ListPViagem>     
              </CardsViagem>
          )
      });



    return (
      <Container>
         <Buttonheader>  
            
            <ButtonsVoltarECriar onClick={()=> backPage(navigate)}>Voltar</ButtonsVoltarECriar>
            <TituloViagens>Painel Administrativo</TituloViagens>
            <ButtonsVoltarECriar  onClick={()=> createTripPageViagens(navigate)}>Criar Viagem </ButtonsVoltarECriar>

          </Buttonheader>  
         
             {allListViagens}
            {/* onClick={()=> TripDetailsPageViagens(navigate)} */}
          
      </Container>
    );
  };
  
  export default AdminHomePage;