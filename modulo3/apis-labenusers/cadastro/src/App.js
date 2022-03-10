import React from "react";
import SignUpPage from "./components/SignUpPage";
import Users from "./components/Users";
import styled from "styled-components";

const Container = styled.div`
  width: 100% ;
  height: 100vh ;
  display: flex ;
  justify-content: center;
  align-items:center;
`




export default class App extends React.Component {
  state = {
    renderePage: "signUp"
  };

  changePage = () => {
    switch (this.state.renderePage) {
      case "signUp":
        return <SignUpPage rendereUsers={this.rendereUsers} />
       case  "usersList":
         return <Users rendereSingUpPage={this.rendereSingUpPage}/>
      default:
          return alert("Erro! Página não encontrada!")
    }
  };

    rendereSingUpPage =() => {
        this.setState({renderePage:'signUp'})
    }

    rendereUsers = () => {
      this.setState({ renderePage:'usersList'})
    }


    render() {
      return (
        
        <Container >
          <div>
            <h1>Usuários - Gebru </h1>
              {this.changePage()}
           </div>
        </Container>
        
        );
   }
}