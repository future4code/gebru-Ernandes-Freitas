import React from "react";
import axios from "axios";
import AddMusicTracks from "./AddMusicTracks"
import leftButton from "./image/left-chevron.png";
import {
    PlaylistContainer,
    ContainerListTrack ,
    Card,
    ButtonContainer,
    ButtonMainContainer1,
    MainContainer2,
    TracksListContainer,
  } from "./styles/StyledDetalis"

export default class DetalisPlaylist extends React.Component{

    state = {
        addMusic : false,
    };
    
    abriAddMusic = () =>{
        this.setState ({addMusic:true})
    };

    fecharAddMusic = () =>{
        this.setState ({addMusic:false})
    };

    componentDidMount() {
        this.props.allPlaylists();
        this.props.playListTracks();
    };

    randomNumber() {
        return Math.floor(Math.random() * 100);
    };

    removePlaylistTraks = (id) =>{
        const confirm = window.confirm(
            "Tem certeza que deseja excluir ?"
        )
          const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
          const headers = {
            headers:{
                Authorization: "ernandes-freitas-gebru",
            }  
        } 
        if(confirm) {
            axios
            .delete(`${url}/${this.props.idDaPlylist}/tracks/${id}` ,headers)
            .then((response)=>{
                alert(`Musica excluida com sucesso!`)
                this.props.allPlaylists(this.props.idDaPlylist)
            })
            .catch((error)=>{
                alert(error.response.data.message);
            })
        };
    };

     render(){

        const lisTracks = this.props.platTracks.map((tracksList)=>{
            return (
                <ContainerListTrack  key={tracksList.id}>
                    <Card 
                    src={tracksList.url}
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    title="Song"
                    />
                    <button onClick={() => this.removePlaylistTraks(tracksList.id)}>
                            Deletar faixa
                    </button>
                </ContainerListTrack>
            )

        });

        return(
            <div>
                {this.state.abriAddMusic && (

                    <div>
                        < AddMusicTracks
                            playListTracks={this.props.playListTracks}
                            idDaPlylist={this.props.idDaPlylist}
                            fecharAddMusic={this.fecharAddMusic}
                        />

                    </div>
                )}

                <ButtonContainer>
                    <img
                src={leftButton}
                alt="Ícone de flecha"
                onClick={this.props.playlistPage}
            />
                </ButtonContainer>

                    <PlaylistContainer>
                        <img
                        src={`https://picsum.photos/200/200/?a=${this.randomNumber()}`}
                        alt="Imagem"
                        />

                        <li>{this.props.namePlylist}</li>
                        <details>
                        <summary>...</summary>
                        <button
                            onClick={() => this.props.deletePlaylist(this.props.idDaPlylist)}
                        >
                            Deletar
                        </button>
                        </details>  
                    </PlaylistContainer>

                    {this.props.platTracks.length === 0 && (
                        <MainContainer2>
                            <h4> Sua playlist está vazia 😕</h4>
                            <div>
                            <ButtonMainContainer1  onClick={this.abriAddMusic}>
                                Adicionar Musica
                            </ButtonMainContainer1>
                            </div>
                        </MainContainer2>
                        )}
                        {this.props.platTracks.length > 0 && (
                        <div>
                            <div>
                            <ButtonMainContainer1 onClick={this.abriAddMusic}>
                                Adicionar Musica
                            </ButtonMainContainer1>
                            </div>
                            <TracksListContainer>{lisTracks}</TracksListContainer>
                        </div>
                        )}

            </div>



            
        )
     };

};