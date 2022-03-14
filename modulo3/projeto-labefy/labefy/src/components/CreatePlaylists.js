import React from "react";
import axios from "axios";
import { ContainerMain} from "./styles/StyledCreatePlaylis"

const url=
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "ernandes-bitencourt-gebru",
  },
};


export default class CreatePlaylists extends React.Component {

    state = {
        playlist: "",
      };
    
      onChangePlaylistName = (event) => {
        this.setState({ playlist: event.target.value });
      };
    
      createPlaylist = () => {
        const body = { name: this.state.playlist };
        
        axios.
        post(url,body, headers)
        .then((Response) => {
            alert("Playlist criada");
          this.setState({ playlist: "" });
          this.props.allPlaylists();
        })
          
        
         .catch ((error) =>{
            alert(error.response.data.message)
         })
          
        };
    
    
      render() {
        return (
            
          <div>
            <ContainerMain>
              <h2>Crie sua nova playlist</h2>
              <input
                placeholder={"Minha playlist"}
                value={this.state.playlist}
                onChange={this.onChangePlaylistName}
              />
              <button onClick={this.createPlaylist}>Criar Playlist</button>
              <button onClick={() => this.props.playlistPage()}>
                Acessar Playlists
              </button>
            </ContainerMain>
         </div>
           
        );
      }
}