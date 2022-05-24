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
    gap: 8px;
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



export const CardsDiv = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 550px;
    height: 350px;
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    word-break: break-all;

    :hover {
     
     border: 1px solid rgb(208, 208, 225);
     font-size: 20px;
     } 
`
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
    width: 500px;
    height: 30px; 
`

export const ButtonsV = styled.button`

    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    background: none;
    font-size: 20px;
    color: rgb(132, 57, 163);
    width: 100px;
    height: 62px;
    font-weight: 700;

 :hover {
     color: rgb(208, 208, 225);
     border: 1px solid rgb(208, 208, 225) ;
     font-size: 27px;
 }

`

export const ListP = styled.p`
    color: rgb(208, 208, 225) ;

`