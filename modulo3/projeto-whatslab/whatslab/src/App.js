import React from "react"; 
import {DivContainer} from './Components/AppStyled'
import {DivContainerDiv} from './Components/AppStyled'
import{DivInput} from './Components/AppStyled'
import{DivChatList} from './Components/AppStyled'
import{PChatLis} from './Components/AppStyled'
import{ChatListP} from './Components/AppStyled'
import{NomeInput} from "./Components/AppStyled"
import{ChatInput} from "./Components/AppStyled"
import{EnviarButton}from "./Components/AppStyled"




class App extends React.Component{

    state={

      chat:[
      // {
      //     nome:"",
      //     chats:""
      //   }
      ],
      inputName:"",
      inputChats:"" 

    };

    onchengeInputNome =(event) =>{

      this.setState({inputName: event.target.value})

    };

    onchengeInputChats = (event) => {

      this.setState({inputChats: event.target.value})

    };



    addChatsButoon = () => {
      const novoChat ={
        nome:this.state.inputName,
        chats:this.state.inputChats

      };
    
      const novosChats =[...this.state.chat,novoChat];
      
      this.setState({chat:novosChats});
      this.setState({inputName:"",inputChats:""});

    };




  render(){

    const chatList = this.state.chat.map((textChat) =>{
      return(
        <DivChatList>
            <PChatLis>
              {textChat.nome}
            </PChatLis>

            <ChatListP>
              {textChat.chats}
            </ChatListP>
            
        </DivChatList>
      )

    }); 

    return(

      <DivContainer>

        <DivContainerDiv>

            {chatList}

          <DivInput>

            
            <NomeInput
                value={this.state.inputName}
                onChange={this.onchengeInputNome}
                placeholder={"Nome"}
              />
             

              <ChatInput
               value={this.state.inputChats}
               onChange={this.onchengeInputChats}
               placeholder={"text"}
              
              />

                
                { <EnviarButton  onClick={this.addChatsButoon} >
                Enviar
                </EnviarButton> }
                
              
          </DivInput>
          
        </DivContainerDiv>
        

      </DivContainer>



    )


  };


};




export default App;
