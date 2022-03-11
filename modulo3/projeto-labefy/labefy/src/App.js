
import React from 'react';
import AddMusic from './components/AddMusic';
import Mylist from './components/Mylist';
import CreatePlayList from './components/CreatePlayList';


class App extends React.Component {

  state = {
    renderPage : 'home'
  }

  pages = () =>{
    switch (this.state.renderPage) {
      case 'home': 
      return <Mylist pageCreatePlayLis={this.pageCreatePlayLis} pageAddMusic={this.pageAddMusic }/>
      case 'myList' :
       return  <Mylist pageCreatePlayLis={this.pageCreatePlayLis} pageAddMusic={this.pageAddMusic}/>
       case 'createplaylist':
       return <CreatePlayList pageMylist ={this.pageMylist} /> 
       case 'addMusic':
       return <AddMusic pageAddMusic ={this.pageAddMusic }/>
       default:
        return <h1>Erro!</h1> 
    };

  };


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
               <button onClick={() => this.rendePages('myList')}>Sua Playlist</button>
              <button onClick={() => this.rendePages('myList')}> home</button>
              <button onClick={() => this.rendePages('addMusic')}> Adicionar musica</button>
              
         </div>
        {this.pages()}

                
        </div>
    )

  }

}

export default App;
