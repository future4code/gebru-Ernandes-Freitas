import axios from "axios";
import React from "react";



export default class Mylist extends React.Component {
    state ={
        playListCriada:[],
        id:''
    };

    componentDidMount() {
        this.playListAdicionada ();
    };

    playListAdicionada = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const headers = {
            headers: {
               Authorization: "ernandes-freitas-gebru" 
           
            }
        };

        axios
        .get(url,headers)
        .then((response)=> {
           this.setState({playListCriada:response.data.result.list}) 
        })
        .catch((error) =>{
            return alert(`${error.response}`)
        })

    };

        deletePlayList =(playlistId) => {

            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
            const headers = {
                headers : {
                   Authorization: "ernandes-freitas-gebru" 
               
                }
            };

            axios
            .delete(url,headers)
            .then( response => {
                return  alert("Playlist deletado com sucesso !")
                this.playListAdicionada ( ) ;
            })
            
            .catch((error)=>{
                return alert(`ERRO! ao excluir`)
            })
            
    };

    render(){

        const novaPlaylist = this.state.playListCriada.map((list) => {

            return (

                <div key={list.id}>
                    <span>{list.name}</span>
                   
                    

                    <button onClick={()=> this.deletePlayList(list.id)} >Excluir</button>
                   
                    <button onClick={this.props.pageAddMusic}>Adicionar Musica</button>

                </div>
            );
                
        });


        return(
            <div> 
                <h1>Sua Playlist</h1>

                


                {novaPlaylist}
                <button onClick={this.props.pageCreatePlayLis}> Voltar </button>
            </div>
        );
    };

};