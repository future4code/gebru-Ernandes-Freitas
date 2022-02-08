import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';





const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Inputscontainer = styled.div`
   height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pad: 5px;


`

class App extends React.Component {

  state= {
    user:[

    {
      id:1,
      nomeUsuario:"Cristiane",
      fotoUsuario:"https://picsum.photos/50/50",
      fotoPost:"https://picsum.photos/200/153"},

    {
      id:2,
      nomeUsuario:"keven",
      fotoUsuario:"https://picsum.photos/50/51",
      fotoPost:"https://picsum.photos/200/152"},

    {
      id:3,
      nomeUsuario:"Junior",
      fotoUsuario:"https://picsum.photos/50/52",
      fotoPost:"https://picsum.photos/200/151"
  }
  ],

    InputUser:"",
    InputFotoUser:"",
    InputFotoPost:""
  };
   
    addNovoPost = () =>{

      const novoPost = {
        nomeUsuario: this.state.InputUser,
        fotoUsuario:this.state.InputFotoUser,
        fotoPost:this.state.InputFotoPost
      }

      const novosPosts = [...this.state.user,novoPost];
      this.setState({user:novosPosts })

      this.setState({InputUser:"",InputFotoUser:"", InputFotoPost:""})

    };

    onChangeInputUser =(event) => {
      
      this.setState({InputUser: event.target.value})

    };

    onChangeInputFotoUser =(event) => {
      
      this.setState({InputFotoUser:event.target.value})

    };

    onChangeInputFotoPostUser =(event) => {
      
      this.setState({InputFotoPost:event.target.value})

    };



  render() {

    const ListPostsUser = this.state.user.map((PostUser) =>{
      return(
        <Post
        nomeUsuario={PostUser.nomeUsuario} fotoUsuario={PostUser.fotoUsuario} fotoPost={PostUser.fotoPost}
        />

      );


    });


    return (



      
      <MainContainer>



          <Inputscontainer>
          <input
              value={this.state.InputUser}
              onChange={this.onChangeInputUser}
              placeholder={"Nome"}
            />
            <input
               value={this.state.InputFotoUser}
               onChange={this.onChangeInputFotoUser}
               placeholder='Foto'
            />
            <input
                value={this.state.InputFotoPost}
                onChange={this.onChangeInputFotoPostUser}
                placeholder='Fotos post'
            />
            <button onClick={this.addNovoPost}>Adicionar</button>
          </Inputscontainer>

            {ListPostsUser}

        {/* <Post
          nomeUsuario={'Cristiane'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/153'}
        />

        <Post
          nomeUsuario={'keven'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/152'}
        />

        <Post
          nomeUsuario={'Junior'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/151'}
        /> */}

      </MainContainer>


    );
  }
}

export default App;
