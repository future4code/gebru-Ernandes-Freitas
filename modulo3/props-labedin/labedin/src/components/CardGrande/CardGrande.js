import React from 'react';

import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 20px;
    height: 200px;

`
const BigCardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`
const BigCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`

const BigCardH4 = styled.h4`
    margin-bottom: 15px;

`


function CardGrande(props) {
    return (

        <BigCardContainer>
            <BigCardImg src={ props.imagem } /> 
            <BigCardDiv>
            <BigCardH4>{ props.nome }</BigCardH4>
                <p>{ props.descricao }</p>
            </BigCardDiv>
                
        </BigCardContainer>

      
    )
}

export default CardGrande;