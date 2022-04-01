import React from 'react'
import  {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'



function ListTripsPage () {

        const [getTripsListAllViagens,setGetTripsListAllViagens] = useState([])
    

    useEffect (()=>{
        
        getTripsAllViagens ()
        allListViagens ()

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
    
    const allListViagens = ()=>{
        
         getTripsListAllViagens.map((viagens)=>{

            return (
                <div key={viagens.id}>
                        <p>{viagens.name}</p>
                        <p> {viagens.description} </p>
                        <p> {viagens.planet} </p>
                        <p> {viagens.durationInDays} </p>
                        <p> {viagens.date}</p>
                </div>
            )

           

        })

    }
    

    return (

      <div>
            Olá
      </div>
    );
  };
  
  export default ListTripsPage;
  