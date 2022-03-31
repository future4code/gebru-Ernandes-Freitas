import axios from "axios";
import { useEffect, useState } from "react";
import {ImgPerson ,Container,ContainePerson,Header,Iconsimgs,HeaderButoon } from "./StyledMAtch"

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

    const putClearMatchScreen = () => {

        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernandes-freitas-gebru/clear`

        const body = {
            id :listMatch.id
        }

        axios
        .put(url,body)
        .then((response)=>{
            console.log("Lista limpada com sucesso!")
            getMatcheScreen()
        })
        .catch((error)=>{
            console.log(error.response.data.message)
        })
    }
    
    
 
    return (
        <ContainePerson>
                <Header>
                    <HeaderButoon onClick={props.homePage}><Iconsimgs src={props.voltar}/></HeaderButoon>
                    <img src={props.astroMatch} alt=" figura da logo"/>
                    <HeaderButoon onClick={()=>{putClearMatchScreen()}}><Iconsimgs src={props.lixeira}/></HeaderButoon>
                </Header>

                { 
                    listMatch.map((matches)=>{

                    return(
                        
                            <Container key={matches.id}>
                                <ImgPerson src={matches.photo}/>
                                {matches.name}
                                
                            </Container> 
                            
                         
                        
                        )
                    })
                }
        
        </ContainePerson>
        )

    

};