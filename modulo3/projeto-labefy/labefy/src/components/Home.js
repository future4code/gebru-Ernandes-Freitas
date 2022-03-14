import React from "react";
import axios from "axios";
import ListMusic from "./ListMusic"
import PlayListusers from "./PlayListusers"
import DetalisPlaylist from "./DetalisPlaylist"
import CreatePlaylists from "./CreatePlaylists"
import Sidebar from "./Sidebar"
import { HomeContainer, MainContainer } from "./styles/StyledHome";



export default class Home extends React.Component {
    state ={
        pages: 'home',
        playLists: [],
        idDaPlylist: '',
        namePlylist: '',
        platTracks: []

    }

    componentDidMount(){
        this.allPlaylists();
    }

    allPlaylists = () =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`
        const headers = {
            headers:{
                Authorization: "ernandes-freitas-gebru",
            }  
        } 
        axios
        .get(url,headers)
        .theb((response)=>{
            this.setState({playLists:response.data.result.list})
        })
        .catch((error)=>{
            alert(`${error.data.message}`)
        })

    };

    deletePlaylist =(id)=>{
       const confirme = window.confirm(
           'Você tem certeza que deseja excluir ?'
       ) 

       if(confirme){
           const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

           const headers = {
            headers:{
                Authorization: "ernandes-freitas-gebru",
            }  
        } 
            axios
            .delete(url,headers)    
            .then((response)=>{
                alert ("Playlist deletada")
                this.allPlaylists();
                this.playlistPage();
            })
            .catch ((error)=>{
                alert(`Error ao deletar !`)
            })
       }
    };

    playListTracks = (id,nome) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        const  headers= {
            headers:{
                Authorization: "ernandes-freitas-gebru",
            }  
        } 

        axios
        .get(url,headers)
        .then((response)=>{
           this.setState ({
            platTracks: response.data.result.list ,
            namePlylist : nome,
            idDaPlylist: id,
            pages:this.state.pages
           })
           console.log(this.state.tracks);
        })
        .catch ((error)=>{
            console.log(error.response.data.message)
        })
  
    }

    homePage = () => {
        this.setState({ page: "home" });
    };

    playlistPage = () =>{
        this.setState({ page: "playlist" });
    };

    detailsPage = () =>{
        this.setState({ page: "details" });
    };

    createPlaylistspage = () =>{
        this.setState({ page: "create" });
    };

    addTrackspages = () => {
        this.setState({ page: "add" });
      };

    renderPages = () => {

        switch (this.state.pages){
            
            case 'home':
                return <ListMusic/>;

            case 'playlist':
                return <PlayListusers
                playlistPage = {this.PlaylistPage}
                detailsPage ={this.detailsPage}
                addTrackspages={this.addTrackspages}
                namePlylist = {this.state.namePlylist}
                idDaPlylist={this.state.idDaPlylist}
                platTracks={this.state.platTracks}
                playLists ={this.state.playLists}
                allPlaylists={this.allPlaylists}
                deletePlaylist={this.deletePlaylist}
                playListTracks={this.playListTracks}
                />;

            case 'details':
                return <DetalisPlaylist
                playlistPage = {this.PlaylistPage}
                detailsPage ={this.detailsPage}
                addTrackspages={this.addTrackspages}
                namePlylist = {this.state.namePlylist}
                idDaPlylist={this.state.idDaPlylist}
                platTracks={this.state.platTracks}
                allPlaylists={this.allPlaylists}
                deletePlaylist={this.deletePlaylist}
                playListTracks={this.playListTracks}
                />;

            case 'create' :
                return <CreatePlaylists 
                playlistPage = {this.PlaylistPage}
                detailsPage ={this.detailsPage}
                allPlaylists={this.allPlaylists}
                />;
            default :
            return alert(`Erro !`)
        }

    };

    render(){

        return (
            <HomeContainer>
                <Sidebar
                playlistPage = {this.PlaylistPage}
                detailsPage ={this.detailsPage}
                createPlaylistspage={this.createPlaylistspage}
                playListTracks={this.playListTracks}
                playLists ={this.state.playLists}
                homePage={this.homePage}
                allPlaylists={this.allPlaylists}
                />

                <MainContainer> {this.renderPages()}</MainContainer>
                
            
            
            </HomeContainer>
        )
    }

}