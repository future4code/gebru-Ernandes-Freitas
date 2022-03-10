import React from "react";
import axios from "axios";


class SignUpPage extends React.Component {
  state = {
    nameInput:"",
    emailInput:""
  };

   nameInputO = (event) => {
    
    this.setState({nameInput:event.target.value})
    
  };


  emailInputO = (event) => {
    
    this.setState({emailInput:event.target.value});
  };

  createUser = () => {
    const headers = {
      headers: {
        Authorization: "ernandes-freitas-gebru"
      }
    };

    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    };

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    axios
      .post(
        url,
        body,
        headers
      )
      .then(response => 
        alert (`Usuário ${this.state.nameInput} criado com sucesso!`))
        this.setState({ nameInput: "", emailInput: "" })
      
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error.response.data.message);
      })
  };

  render() {
    return (
      <div>

        <h3>Cadastre-se</h3>

          <div>
          <input
            placeholder="Nome"
            type="text"
            value={this.state.nameInput}
            onChange={this.nameInputO}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={this.state.emailInput}
            onChange={this.emailInputO}
          />
          <button onClick={this.createUser}>Cadastar</button>
          </div>
            <br/>
            <button onClick={this.props.rendereUsers}>
              Lista de Usuários
            </button>
      </div>
    );
  }
}

export default SignUpPage;
