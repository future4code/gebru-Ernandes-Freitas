import HomePage from "./components/HomePage/HomePage"
import styled from "styled-components";

const ContaineGeral = styled.div`
margin-top: 50px; 
display: flex;
justify-content: center;
align-items: center;


`
function App() {
  return (
    <ContaineGeral >
      <HomePage/>
    </ContaineGeral>
  );
}

export default App;
