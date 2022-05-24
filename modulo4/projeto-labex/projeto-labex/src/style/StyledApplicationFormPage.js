import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    
    align-items: center;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 24vw;
    height: 65vh;
    position: absolute;
`

export const ContainerForm = styled.main`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 50vh;
`

export const InputsForm = styled.input`
    background: none;
    height: 30px;
    width: 300px;
    margin: 10px;
    color:  rgb(208, 208, 225);;
    :hover {
     color: rgb(208, 208, 225);
     border: 1px solid rgb(208, 208, 225) ;
    }
`
export const SelectForm = styled.select`
    background: rgb(132, 57, 163);;
    height: 30px;
    width: 307px;
    margin: 10px;
    color:  rgb(208, 208, 225);;

    :hover {
     color: rgb(208, 208, 225);
     border: 1px solid rgb(208, 208, 225) ;
    }
`
export const ButtonDiv = styled.div`
    
    height: 60px;
    width: 320px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`


export const ButtonsForm = styled.button`
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    background: none;
    font-size: 20px;
    font-weight: 700;
    color: rgb(132, 57, 163);

 :hover {
     color: rgb(208, 208, 225);
     border: 1px solid rgb(208, 208, 225) ;
     font-size: 27px;
 }
`

export const ButtonDivHome = styled.div`
    display: flex;
    height: 50px;
    width: 320px;
    justify-content: center;
    
`
export const TituloH1 = styled.h1`
    color: rgb(132, 57, 163);
    font-size: 45px;
    font-weight: 700;
     
`