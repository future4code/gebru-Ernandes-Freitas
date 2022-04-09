import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 24vw;
    height: 50vh;
    position: absolute;
`
export const Titulo = styled.h1`
    color: rgb(132, 57, 163);
    font-size: 45px;
    font-weight: 700;
    position: relative;
    margin-bottom: 0px;

`
export const DivInputs = styled.div`
    width: 350px;
    height: 150px;
   
`
export const Inputs = styled.input`
    background: none;
    height: 30px;
    width: 300px;
    margin: 15px;
    color:  rgb(208, 208, 225);;
    :hover {
     color: rgb(208, 208, 225);
     border: 1px solid rgb(208, 208, 225) ;
     
 }

`

export const ButtonEntrar = styled.button`
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    background: none;
    font-size: 20px;
    font-weight: 700;
    color: rgb(132, 57, 163);
    height: 50px;
    width: 100px;
    margin-bottom: 40px;
 :hover {
     color: rgb(208, 208, 225);
     border: 1px solid rgb(208, 208, 225) ;
     font-size: 27px;
 }

`