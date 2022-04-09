import axios from "axios";
import {useState} from "react";
import {adminHomePageViagens} from "../routes/coordinator";
import {useNavigate} from "react-router-dom";
import {Container,Titulo,Inputs,DivInputs,ButtonEntrar} from "../style/StyledLogin"



function LoginPage () {

  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const navigate = useNavigate();
  
  const onEmail = (event) => {
    setEmail(event.target.value)
  }
  const onPassword = (event) => {
    setPassword(event.target.value)
  }
  
  const loginSubmit = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ernandes-freitas-gebru/login`
    
    const body = {
      email: email,
      password: password
    }

    axios
    .post(url,body)
    .then ((response) => {
      window.localStorage.setItem("token", response.data.token);
      adminHomePageViagens(navigate)
      
    })
    .catch ((error)=>{
      console.log("Algo deu errado",error.response.data.message)
    });
  };

    return (
      <Container>

          <Titulo>Login</Titulo>
          <DivInputs>
            <Inputs
              placeholder="e-mail"
              type="email"
              value={email}
              onChange={onEmail}
              />
              
              <Inputs
              placeholder="password"
              type={"password"}
              value={password}
              onChange={onPassword}
            />

          </DivInputs>
            

          <ButtonEntrar onClick={loginSubmit}>entrar</ButtonEntrar>

      </Container>
    );
  }
  
  export default LoginPage;