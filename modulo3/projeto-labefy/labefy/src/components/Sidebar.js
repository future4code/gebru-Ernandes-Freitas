import React from "react";
import home from "./image/home.png";
import search from "./image/search.png";
import biblioteca from "./image/biblioteca.png";
import {
  SideBarContainer,
  FirstContainer,
  FirstContainerItem,
  SecondContainer,
  SecondContainerItem,
  AddStyle,
  HeartStyle,
  PlaylistsTitle,
  PlaylistsContainer,
  ContainerItems,
} from "./styles/Styledsidebar";

export default class Sidebar extends React.Component {
  componentDidMount() {
    this.props. allPlaylists();
  }

  render() {
    const playlists = this.props.playLists.map((list) => {
      return (
        <div>
          <div onClick={() => this.props.playListTracks(list.id, list.name)}>
            <div onClick={() => this.props.detailsPage()}>
              <PlaylistsTitle>{list.name}</PlaylistsTitle>
            </div>
          </div>
        </div>
      );
    });

    return (
      <SideBarContainer>
        <ContainerItems>
          <div>
            <h1 onClick={() => this.props.pageHome()}>Labefy</h1>
          </div>
          <FirstContainer>
            <FirstContainerItem onClick={() => this.props.homePage()}>
              <img src={home} alt="Ícone home" />
              <h4>Início</h4>
            </FirstContainerItem>
            <FirstContainerItem>
              <img src={search} alt="Ícone home" />
              <h4>Buscar</h4>
            </FirstContainerItem>
            <FirstContainerItem onClick={() => this.props.playlistPage()}>
              <img src={biblioteca} alt="Ícone home" />
              <h4>Sua Biblioteca</h4>
            </FirstContainerItem>
          </FirstContainer>
          <SecondContainer>
            <SecondContainerItem onClick={() => this.props.createPlaylistspage ()}>
              <AddStyle>+</AddStyle>
              <h4>Criar playlist</h4>
            </SecondContainerItem>
            <SecondContainerItem>
              <HeartStyle>❤</HeartStyle>
              <h4>Músicas Curtidas</h4>
            </SecondContainerItem>
          </SecondContainer>
          <hr />
          <PlaylistsContainer>{playlists}</PlaylistsContainer>
        </ContainerItems>
      </SideBarContainer>
    );
  }
}
