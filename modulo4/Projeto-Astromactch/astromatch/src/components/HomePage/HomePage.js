import axios from "axios"
import { useEffect, useState } from "react"
import Match from "../Match/Match"
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
    
    const postScreenChoosePerson = () =>{

        // const header = 'Content-Type: application/json'
        const body = 
            {
                id:profiles.id,
                choice: true
            }
        
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernandes-freitas-gebru/choose-person`

        axios
        .post(url,body)
        .then((response)=>{
            getProfileScreen ()
        })
        .catch((error) =>{
            console.log (error.response.data)
        })
    };
      
    const postScreenChoosePerson1 = () =>{

        // const header = 'Content-Type: application/json'
        const body = 
            {
                id:profiles.id,
                choice: false
            }
        
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernandes-freitas-gebru/choose-person`

        axios
        .post(url,body)
        .then((response)=>{
            getProfileScreen ()
        })
        .catch((error) =>{
            console.log (error.response.data)
        })
    };
   

    return (

        <Containe key={profiles.id}>

            <button onClick={props.matchPage}>Match List</button>

            <ImgPerfil src={profiles.photo}/>
            {profiles.name ? profiles.name : 'Carregando...'},
            {profiles.age }
            <br/>
            {profiles.bio }


            <div> 
                <button onClick={()=>{postScreenChoosePerson1()}}><img  src={""} alt =" imagem do X"/></button>
                <button onClick={()=>{postScreenChoosePerson()}}> <img src={""} alt =" imagem do coração" /> </button>
            </div>

            

        </Containe>
    )

};