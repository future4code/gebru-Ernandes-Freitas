
import axios from "axios";
import { useEffect , useState } from "react";


export default function ChoosePerson (props) {

    const [personId , setPersonId] = useState("")   

    useEffect (()=>{

        postScreenChoosePerson()
    }
    ,[])

    const postScreenChoosePerson = (idPerson) =>{

        // const header = 'Content-Type: application/json'
        const body = 
            {
                id: personId,
                choice: true
            }
        
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ernandes-freitas-gebru/choose-person`

        axios
        .post(url,body)
        .then((response)=>{
            setPersonId(response.data.idPerson)
        })
        .catch((error) =>{
            console.log (error.response.data)
        })
    };

    return postScreenChoosePerson()
}