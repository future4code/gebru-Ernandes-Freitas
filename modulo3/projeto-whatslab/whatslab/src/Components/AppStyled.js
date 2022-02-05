import styled from 'styled-components'

export const DivContainer = styled.div`
    flex: 1;
    height: 100vh;   
    max-width:600px
    background-color:  rgb(209, 198, 198);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   


`
export const DivContainerDiv =styled.div`

    
    background-color:  rgb(179, 159, 164);
    border: 1px solid black;
    height: 95%;
    width: 35%;
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    overflow-y: hidden;
   
    
    
    
`
export const DivInput = styled.div`
   
    margin-bottom: 5px;
    display: grid;
    padding:20px;
    grid-template-columns: 100px 1fr 75px;
    gap: 20px;
    
`
export const NomeInput = styled.input`
    width: 100px;
    padding: 5px;
    font-size: 16px;
    border: none;
    border-radius: 5px;

`

export const ChatInput = styled.input`
    flex: 1;
    padding: 8px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    
`
export const EnviarButton = styled.button`

    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
   
`


export const DivChatList = styled.div`
    
    background-color: white;
    width: 50%;
    height: 10%;
    margin: 5px 5%;
    border-radius:5px
    
    
`

export const PChatLis = styled.p`

    font-size: 120%;
    font-weight: 700;
    margin-left:9px;
    margin-top:1px;

   
`

export const ChatListP = styled.p`

    font-size: 100%;
    margin-left:11px;      
       
`
