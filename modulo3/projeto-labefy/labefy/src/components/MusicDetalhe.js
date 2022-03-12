import React from "react";
import axios from "axios"; 



export default class MusicDetalhe extends React.Component {

    state = {
        detalheMusic : ''
    }

    componentDidMount(){
        this.musicDeta ()
    }

    musicDeta = () =>{

        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks'
        const headers = {
            headers: {
               Authorization: "ernandes-freitas-gebru" 
           
            }
        };

        axios
        .get(url,headers)
        .then ()
        .catch()


    }


    render() {

        return(
            <div>
                {this.props.url}

                <button onClick={this.props.pageAddMusic}>Adicionar Musica</button>

            </div>
        )
    }



}