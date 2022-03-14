import React from "react";
import DetalisPlaylist from "./DetalisPlaylist"
import {
    Playlists,
    PlaylistCard,
    ImagePlaylist,
    HeadingPlaylist,
    PlaylistsContainer,
    DeleteButton,
  } from "./styles/StyledPlaylisUser";



export default class PlayListusers extends React.Component {
    state = {
        page: false
    };

    componentDidMount(){
        this.props.allPlaylists();
        this.props.playListTracks()
    }

    randomNumber = () =>{
        return Math.floor(Math.random() * 100);
    };

    pagePlaylist =() => {
        this.setState ({page:!this.state});
    };
    
    render() {

        const nPlaylist = this.props.playLists.map((list) =>{
            return (
                <div>
                    <Playlists onClick={()=>this.props.playListTracks(list.id,list.name)} >

                        <PlaylistCard onClick={() => this.props.detailsPage()}>

                                <ImagePlaylist src={`https://picsum.photos/200/200/?a=${this.randomNumber()}`}
                                    alt="imagem" 
                                    />  
                                <HeadingPlaylist >{list.name}</HeadingPlaylist>
                                
                        </PlaylistCard>

                     
                    </Playlists>

                    <DeleteButton onClick={() => this.props.deletePlaylist(list.id)} >Excluir Playlist</DeleteButton>
                    
                </div>
            )
        })

        return (

            <div>
             {this.state.page ?(
                
                <div>
                   <DetalisPlaylist
                     playlistPage = {this.PlaylistPage}
                     detailsPage ={this.detailsPage}
                     addTrackspages={this.addTrackspages}
                     createPlaylistspage={this.createPlaylistspage}
                     namePlylist = {this.state.namePlylist}
                     idDaPlylist={this.state.idDaPlylist}
                     platTracks={this.state.platTracks}
                     allPlaylists={this.allPlaylists}
                     deletePlaylist={this.deletePlaylist}
                     playListTracks={this.playListTracks}

                   />

                </div>


                  ):(
                    <PlaylistsContainer>{nPlaylist}</PlaylistsContainer>
                  )};

            </div>
            

        );
    };
};