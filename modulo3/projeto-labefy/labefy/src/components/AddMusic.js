import React from "react";
import axios from "axios";




export default class AddMusic extends React.Component {

    state = {
        nameMusicInput: "",
        artistaBandaInput: "",
        urlMusicInput: ""
    }

    
    onNameMusicInput = (evente) => {
        this.setState({nameMusicInput: evente.target.value})
    }
    onartistaBandaInput = (evente) =>{
        this.setState ({artistaBandaInput: evente.target.value})
    }
    onUrlMusicaInput = (evente) => {
        this.setState ({urlMusicInput: evente.target.value})
    }

    addMusicPlaylist = () =>{

        

        const urls= `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.url}/tracks`
       
        const headers = {
            headers : {
               Authorization: "ernandes-freitas-gebru" 
           
            }
        }
        const body = {
            name: this.state.nameMusicInput,
            artist: this.state.artistaBandaInput,
            url: this.state.urlMusicInput
        }

            axios
            .post(urls,headers,body)
            .then ((response) => { 
                return alert (`Adcionado com sucesso!`)
                response.data
            })
            
            .catch ((error) => {
                return alert (`Algo deu errado!`)
            });
            this.setState({nameMusicInput: "", artistaBandaInput: "", urlMusicInput: ""})
          
           
    }

    render(){

        return(
            <div> 
                <input
                placeholder="Nome da musica"
                value={this.state.nameMusicInput}
                onChange={this.onNameMusicInput}
                />
                <input
                placeholder="Banda ou artista"
                value={this.state.artistaBandaInput}
                onChange={this.onartistaBandaInput}
                />
                <input
                placeholder="Link da musica"
                value={this.state.urlMusicInput}
                onChange={this.onUrlMusicaInput}
                />
                <button onClick={this.addMusicPlaylist}>Adicionar</button>

            </div>
        )
    }

}