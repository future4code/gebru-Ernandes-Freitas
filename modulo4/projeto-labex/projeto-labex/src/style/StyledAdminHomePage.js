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
    width: 600px;
    height: 700px;
    gap: 10px;


    overflow: auto;
    width: 600px;
    
   
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background:none;

    }

    ::-webkit-scrollbar-thumb { 
        
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 7.5px );
        -webkit-backdrop-filter: blur( 10.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
   
`

export const CardsViagem = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 550px;
    height: 90px;
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    word-break: break-all;
    font-size: 18px;
    
    :hover {
     color: rgb(208, 208, 225);
     border: 1px solid rgb(208, 208, 225) ;
     font-size: 24px;
 }
   
`

export const ListPViagem = styled.p`
    color: rgb(208, 208, 225) ;
     margin-left: 10px;
     padding: 20px;
    
`

export const Buttonheader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 20px;
    width: 500px;
    height: 30px; 
`

export const ButtonsVoltarECriar = styled.button`

    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    background: none;
    font-size: 18px;
    color: rgb(132, 57, 163);
    width: 100px;
    height: 54px;
    font-weight: 700;

 :hover {
     color: rgb(208, 208, 225);
     border: 1px solid rgb(208, 208, 225) ;
     font-size: 22px;
 }

`

export const TituloViagens = styled.h1`
    color: rgb(132, 57, 163);
    font-size: 25px;
    font-weight: 700; 
    

`
