import React from 'react';
import styled from 'styled-components'
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'

const DivForm = styled.div`
  display: grid;
  gap: 30px;
  background: wigth;
 
  height: 60vh;
  justify-content: center;
  text-align: center;

`


const ButtonForm =styled.button`

height: 20%;


`



export default class APP extends React.Component {

  

  state = {
    etapa: 1
  };

  etapas =() => {
    
    switch (this.state.etapa){
      case 1:
        return <Etapa1/>;
        break;
      case 2:
        return <Etapa2/>;
        break;
      case 3:
        return <Etapa3/>;
        break;
      case 4:
        return <Final/>;
        break;
      default:
        return <Final/>;

    }
  };

  prxEtapa = () => {
    this.setState({etapa:this.state.etapa +1});
  };

  render(){

    return(
      
      <DivForm>

        
          <this.etapas/>
            
            {this.state.etapa !== 4 && (<ButtonForm onClick={this.prxEtapa}>Próxima etapa </ButtonForm>)}

          

      </DivForm>


      // <div>
      //      <this.etapas/>
           
      //      {this.state.etapa !== 4 && (<button onClick={this.prxEtapa}>Próxima etapa </button>)}
           
      // </div>
      
      
    );
  };

};
