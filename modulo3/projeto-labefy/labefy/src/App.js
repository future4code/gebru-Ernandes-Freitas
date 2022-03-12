
import React from 'react';
import AddMusic from './components/AddMusic';
import Mylist from './components/Mylist';
import CreatePlayList from './components/CreatePlayList';
import MusicDetalhe from './components/MusicDetalhe'


class App extends React.Component {

  state = {
    renderPage : 'home' ,
    idMusicDetalhe: ""
  }

  pages = () =>{
    switch (this.state.renderPage) {
      case 'home': 
      return <Mylist pageCreatePlayLis={this.pageCreatePlayLis} pageAddMusic={this.pageAddMusic } idPageDetalheMusic={this.idPageDetalheMusic} />
       case 'createplaylist':
       return <CreatePlayList pageMylist ={this.pageMylist} idPageDetalheMusic ={this.idPageDetalheMusic}/> 
       case 'addMusic':
       return <AddMusic pageAddMusic ={this.pageAddMusic} idPageDetalheMusic ={this.idPageDetalheMusic} url ={this.state.idMusicDetalhe}/>
       case 'detalheMusic':
       return <MusicDetalhe  url ={this.state.idMusicDetalhe} OnidPageDetalheMusic ={this.OnidPageDetalheMusic}  pageAddMusic={this.pageAddMusic }/>
       default:
        return <h1>Erro!</h1> 
    };

  };

    OnidPageDetalheMusic = () =>{
    this.setState({renderPage : 'home' ,idMusicDetalhe: "" })

   }

   idPageDetalheMusic = (idPage) => {
     this.setState({renderPage:'detalheMusic', idMusicDetalhe: idPage})
   }

  pageCreatePlayLis = () =>{
    this.setState({renderPage: 'createplaylist' })
  };

  

  pageMylist = () => {
    this.setState({renderPage:'myList'})

  };

  pageAddMusic = () => {
    this.setState({renderPage: 'addMusic'})
  };


 

  rendePages = (pages) =>{
    this.setState ({
      renderPage: pages
    })
  };

  render(){

    return (
        <div>

         <div>
              <button onClick={() => this.rendePages('createplaylist')}>Create Playlist</button>
               <button onClick={() => this.rendePages('home')}>Sua Playlist</button>
              <button onClick={() => this.rendePages('home')}> home</button>
              <button onClick={() => this.rendePages('addMusic')}> Adicionar musica</button>
              
         </div>
        {this.pages()}

                
        </div>
    )

  }

}

export default App;
