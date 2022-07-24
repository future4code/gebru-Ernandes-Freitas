
import React from "react";
import {Router} from "./Routes/Router"
import styled from "styled-components";
import fotoDeFundo from "./img/fotoDeFundo.jpg"

const ContainerGetal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* background-image:url("https://www.granjaviana.com.br/upload/coluna/5af494a162b46-_marcia-caracciolo-transitos-planetarios-jupiter-1200x575.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
`

function App () {
  return (
    <ContainerGetal>
        <Router/>
    </ContainerGetal>
  );
}

export default App;
