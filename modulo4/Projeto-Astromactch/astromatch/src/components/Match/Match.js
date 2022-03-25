import axios from "axios";
import { useEffect, useState } from "react";
import {ImgPerson ,Container} from "./StyledMAtch"

export default function Match (props) {

    
    const [listMatch , setListMatch] = useState([])
     
    useEffect (()=>{

        getMatcheScreen()
        
        
    }
    ,[])

    const getMatcheScreen = () =>{
        
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernandes-freitas-gebru/matches`
        axios 
        .get(url)
        .then((response)=>{
            setListMatch(response.data.matches)
        })
        .catch((error) =>{
            console.log(error.response.data.message)
        })
    
    };


    
 
    return (
        <div>
            { 
        listMatch.map((matches)=>{

        return(
            <Container key={matches.id}>
                <ImgPerson src={matches.photo}/>
                {matches.name}

                
            </Container>
            )
        })
        };
        <button onClick={props.homePage}>Volar</button>
        </div>
        )

    

};