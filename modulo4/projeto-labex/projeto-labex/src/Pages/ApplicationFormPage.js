import {backPage,homePageViagens} from "../routes/coordinator"
import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import {useForm} from "../hooks/useForm"
import axios from "axios"
import {countries} from "../constants/countries"
import {Container, ContainerForm,InputsForm,SelectForm,ButtonDiv,ButtonsForm,ButtonDivHome,TituloH1} from "../style/StyledApplicationFormPage"

function ApplicationFormPage   () {
  const navigate = useNavigate ()

  const [viagem , setViagem] = useState([])
  const [tripId, setTripId] = useState("")

  const {form , onChange,cleanFields} = useForm({
    name:"",
    age: "",
    applicationText:"",
    profession:"",
    country:""

  });

  const onChangeTrip = (event) => {
    setTripId(event.target.value)
}
  const ButtonInscrevase =(event) => {
    event.preventDefault()
    cleanFields()

    const url= `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/ernandes-freitas-gebru/apply` 

    axios
    .post(url,form)
    .then((response)=>
      alert (`Inscrição feita com sucesso`)
    )
    .catch((error)=>
      console.log(error.responde.data.message)
    )
  }

  useEffect (()=>{

    ViagensList()

  },[])

  const ViagensList = () => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernandes-freitas-gebru/trips`

  
    axios
    .get (url,)
    .then ((response)=>{
      setViagem(response.data.trips)

    })
    .catch((error)=>{
        console.log(error.response.data)
    })
    
}; 

  const LisViagens = viagem.map((list)=> {
      return (
        <option key={list.id} value={list.id}>
          {list.name}
        </option>

      )
    });

    const listPaises = countries.map((pais)=> {
      return (
        <option key={pais} value={pais}>
          {pais}
        </option>

      )
    });
  
    
    return (
      <Container>
          <TituloH1>Inscreva-se</TituloH1>
          <ContainerForm> 
              <form onSubmit={ButtonInscrevase}>
                <SelectForm
                defaultValue={''} 
                onChange={onChangeTrip}
                placeholder={"Escolha uma viagem"}
                required
                >
                  <option value={""} disabled >Escolha uma viagem</option>
                  {LisViagens}
                </SelectForm> <br/>
                <InputsForm
                name={"name"}
                value={form.name}
                onChange={onChange}
                placeholder={"name"}
                pattern={'^.{2,}'}
                title={'O nome deve ter no mínimo 2 caracteres'}
                />  <br/>
                  
                <InputsForm
                type={"number"}
                name={"age"}
                value={form.age}
                onChange={onChange}
                placeholder={"age"}
                min={18}
                title={'O nome deve ter no mínimo 2 caracteres'}
                /> <br/>
                <InputsForm
                name={"applicationText"}
                value={form.applicationText}
                onChange={onChange}
                placeholder={"Texto de Candidatura"}
                pattern={'^.{20,}'}
                title={'O nome deve ter no mínimo 20 caracteres'}
                /> <br/>
                <InputsForm
                name={"profession"}
                value={form.profession}
                onChange={onChange}
                placeholder={"profession"}
                pattern={'^.{3,}'}
                title={'O nome deve ter no mínimo 3 caracteres'}
                /> <br/>
      
                <SelectForm
                  name={"country"}
                  value={form.country}
                  onChange={onChange}
                  placeholder={"País"}
                  required
                >
                  <option value={""} disabled>escolha um país</option>
                  {listPaises}
                </SelectForm> <br/>

                <ButtonDiv>
                  <ButtonsForm onClick={()=> backPage(navigate)}>Voltar</ButtonsForm>
                  <ButtonsForm onClick={()=>ButtonInscrevase()}> inscreva-se</ButtonsForm> 
                </ButtonDiv>

                <ButtonDivHome>
                  <ButtonsForm onClick={()=>homePageViagens(navigate)}>Home</ButtonsForm>
                </ButtonDivHome>
                
              </form>
         </ContainerForm>

          
      </Container>
    );
  };
  
  export default ApplicationFormPage;