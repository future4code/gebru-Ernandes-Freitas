import axios from "axios"
import { useEffect, useState } from "react"

import {Containe,ImgPerfil} from "./StyledHomePage"



export default function HomePage (props) {

    const [profiles ,setProfiles] = useState({})

    const getProfileScreen = () =>{
            
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernandes-freitas-gebru/person`

        axios
        .get (url)
        .then((response)=>{
            setProfiles(response.data.profile);
        })
        .catch((error)=>{
            console.log(error.response.data.message);
        })

    };

    useEffect(()=>{

        getProfileScreen ()

    } ,[])
    
    return (

        <Containe key={profiles.id}>
            <ImgPerfil src={profiles.photo}/>
            {profiles.name ? profiles.name : 'Carregando...'},
            {profiles.age }
            <br/>
            {profiles.bio } 


            <div> 
                <button><img src={""} alt =" imagem do X"/></button>
                <button> <img src={""} alt =" imagem do coração" /> </button>
            </div>

        </Containe>
    )

}