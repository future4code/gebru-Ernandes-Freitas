import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
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
    bottom: 50px;

`

export const DivButton = styled.div`
        display: flex;
        justify-content:space-around;
        width: 80%;
        height: 45px;

`
export const Buttons = styled.button`
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
export const DivImg = styled.div`
        display: flex;
        justify-content:space-around;
        width: 30%;
        height: 45px;
        position: relative;
        top : 90px ;
        
`

export const Icones = styled.img`

    width: 35px;
    height: 35px;
   
`
export const HoverIcons = styled.div`
    width: 35px;
    height: 35px;
    :hover{
        border: 1px solid rgb(208, 208, 225) ;
        border-radius: 10px;
    }
`



