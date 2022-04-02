import React from 'react'
import  {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {backPage} from "../routes/coordinator"
import {useNavigate} from "react-router-dom"



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
                <div key={viagens.id}>
                        <p>{viagens.name}</p>
                        <p> {viagens.description} </p>
                        <p> {viagens.planet} </p>
                        <p> {viagens.durationInDays} </p>
                        <p> {viagens.date}</p>
                </div>
            )

           

        });

    
    

    return (
        
      <div>
         { allListViagens}
         Olaaaaaaaaaaaaaaaaaaaaaaaaaa!!!
         <button onClick={()=> backPage(navigate)}>Voltar</button>
      </div>
    );
  };
  
  export default ListTripsPage;
  