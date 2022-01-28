import React from "react";
import styled from "styled-components";

const CpContainer=styled.div`
    display: flex;
    align-items:flex-start;
    gap: 5px;
    border: 1px solid black;
    padding: 20px;
    margin-bottom: 20px;
    width: 40vw;

 `
const ImgCp = styled.img`
 width: 25px;
    margin-right: 10px;
    border-radius: 50%;

`
const CpP1 = styled.p`
    color: black;
    font-weight: 700;

`
const CpP2 = styled.p`
font-size: 15px;

`


function CardPequeno(props){

    return(

        <CpContainer>
            
           <ImgCp src={props.imagemcp}/>

           <CpP1 >{props.descricaoimg}</CpP1>

            <CpP2>{props.descricaocp}</CpP2>
          
    
       
        </CpContainer>
        
    )

}
export default CardPequeno;