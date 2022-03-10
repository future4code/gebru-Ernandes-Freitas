import React from "react";
import styled from "styled-components";
import axios from "axios";

const DivStilo = styled.div`
 display: flex ;
 justify-content:space-around;
  width: 500px ;
  padding: 20px;
  border:solid 1px ;
  margin-top: 10px ;

`



class Users extends React.Component {
  state = {
    usersList:[]
  };

  componentDidMount() {
    this.fetchUsersList();
  }

  fetchUsersList = () => {

    const headers1 = {
      headers: {
        Authorization: "ernandes-freitas-gebru"
      }
    };

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        headers1 
      )
      .then((response) => 
        this.setState({usersList:response.data}))
      
      .catch((error) => console.log(error.response.data))

  }
  
  
  userDeletion = userId => {
    
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          {
            headers: {
              Authorization: "ernandes-freitas-gebru"
            }
          }
          
        )
        .then(response => {
          alert("Você tem certeza que deseja apagar o usuário ?");
          this.fetchUsersList();
        })
        .catch(error => {
          alert("ERRO AO APAGAR USUARIO")
          console.log(error.response.data)
        });
        
    }
  

  render() {
    const listUsers = this.state.usersList.map((users)=>{

      return(

        <DivStilo key={users.id}>
          <span>{users.name}</span>
         
          <button onClick={()=>this.userDeletion(users.id)}>delete</button>
        </DivStilo>
      )
    });

    return (
      <div>
          <h3>Lista de usuários</h3>
          {listUsers}
          <button onClick={this.props.rendereSingUpPage}>Voltar</button>

      </div>
    );
  }
}

export default Users;
