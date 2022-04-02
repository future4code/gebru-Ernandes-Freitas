import React ,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {backPage} from "../routes/coordinator"



function CreateTripPage () {
  const navigate = useNavigate()
  
  const {inputName, setInputName} = useState (' ')
  const {inputOptionPlanet, setInputOptionPlanet} = useState ('Escolha o planeta')
  const {inputDate, setInputDate} =useState (' ')
  const {inputDescricao , setInputDescricao} = useState (' ')
  const {inputDuracao, setInputDuracao} = useState(' ')

  const  nameSave = (event) => {
    setInputName({inputName: event.target.value })
  };

  const planetGuard = (event) => {
    setInputOptionPlanet ({inputOptionPlanet: event.target.value})
  };

  const dateGuard = (event) => {
    setInputDate({inputDate: event.target.value })
  };

  const descriptionGuard = (event) => {
    setInputDescricao ({inputDescricao: event.target.value})
  };
  const durationDays = (event) => {
    setInputDuracao({inputDuracao: event.target.value})
  };

  const createTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernandes-freitas-gebru/trips`

    const body = {
      name : inputName , 
      planet : inputOptionPlanet,
      date : Number(inputDate),
      description: inputDescricao ,
      durationInDays: Number(inputDuracao)
    }

    axios(url,body)
    .then((response)=> {
      alert ("Viagem criada com sucesso ")
      
    })

    .catch ((error)=>{
      alert ("error !")
    })

  };


    return (
      <div>
          <input
          placeholder={"Nome"}
          value= {inputName}
          onChange={nameSave}
          />
         
         <select 
         
         value ={inputOptionPlanet}
         onChange={planetGuard}>
           <option value={" "} disabled >Escolha um planeta </option>
           <option>Mercúrio</option>
           <option>Vênus</option>
           <option>Terra</option>
           <option>Marte</option>
           <option>Jupiter</option>
           <option>Saturno</option>
           <option>Urano</option>
           <option>Neturno</option>
           <option>Plutão</option>
         </select>
          <input
          type="date"
          value={inputDate}
          onChange={dateGuard}
          />
          <input 
          placeholder="Descrição"
          value={inputDescricao}
          onChange={descriptionGuard}
          />
          <input
          placeholder="Duração em dias"
          type={"number"}
          value={inputDuracao}
          onChange={durationDays}
          min = {50}
          />


          <button onClick={()=> backPage(navigate)}>Voltar</button>
          <button onClick={()=>{createTrip ()}}>Criar</button>
      </div>


    );
  }
  
  export default CreateTripPage;