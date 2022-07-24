import React ,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {backPage} from "../Routes/coordinator"

import {ContainerGeral,ContainerInputs,Inputs1,Selects,TituloCriarViagem,ButtonsCriarVoltar,ButtonsDiv  } from "../style/StyledCreateTripPage"




function CreateTripPage () {

  const navigate = useNavigate()
  
  const [inputName, setInputName] = useState('')
  const [inputOptionPlanet, setInputOptionPlanet] = useState('')
  const [inputDate, setInputDate] =useState('')
  const [inputDescricao , setInputDescricao] = useState('')
  const [inputDuracao, setInputDuracao] = useState('')

  
  const nameSave = (event) => {
    setInputName(event.target.value)
  };
  console.log(inputName)

  const planetGuard = (event) => {
    setInputOptionPlanet (event.target.value)
  };

  const dateGuard = (event) => {
    setInputDate(event.target.value)
  };

  const descriptionGuard = (event) => {
    setInputDescricao (event.target.value)
  };
  const durationDays = (event) => {
    setInputDuracao(event.target.value)
  };

  

  const createTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernandes-freitas-gebru/trips`

    const body = {
      name:inputName , 
      planet:inputOptionPlanet,
      date:inputDate,
      description:inputDescricao ,
      durationInDays:inputDuracao
    }
    console.log(body)
    const headers = {

      headers: {
        auth:localStorage.getItem("token")
    }}
    
    axios
    .post(url,body,headers)
    .then((response)=> {

      alert ("Viagem criada com sucesso ")

    })

    .catch ((error)=>{
      console.log(error.response.data.message)
    })

  };

    
      return (
      <ContainerGeral>
          <TituloCriarViagem>Criar Viagem</TituloCriarViagem>
        <ContainerInputs> 
              <Inputs1
              placeholder={"Nome"}
              value= {inputName}
              onChange={nameSave}
              />
            
            <Selects
            
            value = {inputOptionPlanet}
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
            </Selects>
              <Inputs1
              type="date"
              value={inputDate}
              onChange={dateGuard}
              />
              <Inputs1
              placeholder="Descrição"
              value={inputDescricao}
              onChange={descriptionGuard}
              />
              <Inputs1
              placeholder="Duração em dias"
              type={"number"}
              value={inputDuracao}
              onChange={durationDays}
              min = {50}
              />
              <ButtonsDiv > 
                <ButtonsCriarVoltar  onClick={()=> backPage(navigate)}>Voltar</ButtonsCriarVoltar>
                <ButtonsCriarVoltar onClick={()=>createTrip ()}>Criar</ButtonsCriarVoltar>
              </ButtonsDiv>
          </ContainerInputs>
      </ContainerGeral>


    );
  }
  
  export default CreateTripPage;