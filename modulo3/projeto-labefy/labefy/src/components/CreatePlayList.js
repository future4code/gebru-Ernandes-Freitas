import React from "react";
import axios from "axios";




export default class CreatePlayList extends React.Component {
    state = {
        nameBandaInput: " " 
    }

    onNameBandaInput = (evente) =>{
        this.setState({nameBandaInput: evente.target.value})
    }

    createPlayList= () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
         const headers = {
             headers : {
                Authorization: "ernandes-freitas-gebru" 
            
             }
         }
         const body = {
            name: this.state.nameBandaInput
         }

         axios
         .post(url,body,headers)

         .then ((response) =>  { return (alert (`Playlist criado com sucesso!`))})

         this.setState({nameBandaInput:""})

         .catch ((error) =>  {return (alert (`Erro ao criar Playlist`)
            
         )}       
        );
    };

    render(){

        return(
            <div> 
                <h1>Criar Platylist</h1>

                <input placeholder="Nome da Banda"
                value={this.state.nameBandaInput}
                onChange={this.onNameBandaInput}
                />

                <button onClick={this.createPlayList} > criar </button>
                <br/>
                <button onClick={this.props.pageMylist}>Sua Lista</button>

                
             </div>
        )
    }

}