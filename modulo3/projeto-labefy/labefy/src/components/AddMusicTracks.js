import React from "react";
import axios from "axios";
import {Container, ContainerItems, MainContainer,} from "./styles/StyledAddMusicTracks"

const url=
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "ernandes-bitencourt-gebru",
  },
};

export default class AddMusicTracks extends React.Component{
    state = {
        name: "",
        artist: "",
        urlMusic: "",
    }

        
    onChangeName = (event) => {
        this.setState({ name: event.target.value });
    };

    onChangeArtist = (event) => {
        this.setState({ artist: event.target.value });
    };
    onChangeURL = (event) => {
        this.setState({ urlMusic: event.target.value });
    };

    addMusicPlaylist =  (id) => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.urlMusic
          };
       
          axios
          .post(`${url}/${this.props.idDaPlylist}/tracks`,body,headers)
          .then((response)=>{
            this.setState({ name: "", artist: "", urlMusic: "" });
            this.props.playListTracks(this.props.idDaPlylist);
            alert(`Musica adicionada com sucesso!`)
          })
          .catch((error)=>{
            alert(error.response.data.message)
          })
     };

     render(){

        return (
            <Container>
              <button onClick={this.props.fecharAddMusic}>X</button>
              <ContainerItems>
                <MainContainer>
                    <input
                      placeholder={"Nome da música"}
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
                    <input
                      placeholder={"Nome do artista da música"}
                      value={this.state.artist}
                      onChange={this.onChangeArtist}
                    />
                    <input
                      placeholder={"url da música"}
                      value={this.state.urlMusic}
                      onChange={this.onChangeURL}
                    />
                    <button onClick={() => this.addMusicPlaylist(this.props.idDaPlylist)}>Adicionar</button>
                </MainContainer>
             
            </ContainerItems>
          </Container>

        )
     }

}