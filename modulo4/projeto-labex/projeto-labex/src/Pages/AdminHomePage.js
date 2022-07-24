import {useNavigate} from "react-router-dom"
import {backPage,createTripPageViagens,TripDetailsPageViagens,LoginPageViagens,homePageViagens} from "../Routes/coordinator"
import {useProtectedPage} from "../hooks/useProtectedPage"
import  {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Container,CardsViagem,ListPViagem,Buttonheader,ButtonsVoltarECriar,TituloViagens,Buttonheader2, ButonX } from "../style/StyledAdminHomePage"


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
                      <ListPViagem><strong>{viagens.name}</strong> 
                       <ButonX>X</ButonX>   
                      </ListPViagem>  
                      
              </CardsViagem>
          )
      });

      const logout = ()=> {

        if ( localStorage.removeItem("token") === "") {
          return  LoginPageViagens(navigate)
        }
      }
         

    return (
      <Container>
         <Buttonheader>  
            
            <ButtonsVoltarECriar onClick={()=> backPage(navigate)}>Voltar</ButtonsVoltarECriar>
            <ButtonsVoltarECriar onClick={()=> homePageViagens(navigate)}>Logout</ButtonsVoltarECriar>
            
          </Buttonheader>  
          <TituloViagens>Painel Administrativo</TituloViagens>
          
           <Buttonheader2 >
               <ButtonsVoltarECriar  onClick={()=> createTripPageViagens(navigate)}>Criar Viagem </ButtonsVoltarECriar>
            </Buttonheader2> 
            
          
         
             {allListViagens}
            {/* onClick={()=> TripDetailsPageViagens(navigate)} */}
          
      </Container>
    );
  };
  
  export default AdminHomePage;