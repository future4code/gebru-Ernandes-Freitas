import axios from "axios"
import { useEffect, useState } from "react"
import {Containe,ImgPerfil,IconsImg,ButoonLike,ButoonX,DivButton,Bio,HeaderDiv,ButoonHeader, Pheader,Pheader2, DivP ,DivPerfil,ButoonNovosPerfis} from "./StyledHomePage"








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
   
    const putClearMatchScreen1 = () => {

        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernandes-freitas-gebru/clear`

        const body = {
            id : profiles.id
        }

        axios
        .put(url,body)
        .then((response)=>{
            console.log("Lista limpada com sucesso!")
            getProfileScreen ()
        })
        .catch((error)=>{
            console.log(error.response.data.message)
        })
    };


    return (

        <Containe key={profiles.id}>

            <HeaderDiv>
               <DivP><Pheader>astro</Pheader><Pheader2>match</Pheader2></DivP> 
            <ButoonHeader  onClick={props.matchPage}><img src={props.iconsVerificado}/></ButoonHeader>
            </HeaderDiv>

            <ImgPerfil src={profiles.photo}/>
              <DivPerfil>
                        
                <p>{profiles.name ? profiles.name : <IconsImg src={props.coracao} alt =" imagem do coração" />},{profiles.age }</p> 
                <br/>
                <Bio>{profiles.bio}</Bio>     
             </DivPerfil>  
              
                
            <DivButton> 
                <ButoonX onClick={()=>{postScreenChoosePerson1()}}><IconsImg  src={props.imageX} alt =" imagem do X"/></ButoonX>
                <ButoonLike onClick={()=>{postScreenChoosePerson()}}> <IconsImg src={props.coracao} alt =" imagem do coração" /> </ButoonLike>
            </DivButton>

            
            <ButoonNovosPerfis onClick={()=>{putClearMatchScreen1()}}>Novos Perfis</ButoonNovosPerfis>
        </Containe>
    )

};