import styled from  "styled-components"

const Containe = styled.div`
 display: flex;
 flex-direction: column;
 border: solid 1px black;
 align-items: center;
 max-width:  800px;
 max-height: 650px;
 position: absolute;

`
const ImgPerfil = styled.img`
    width: 390px;
    height: 450px;
    position: relative;
    top: 40px;

`
const IconsImg = styled.img`
    width: 30px;
    height: 30px;
    
    
`

const ButoonLike = styled.button`
    background-color:   #e6e6e6;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: solid 1px #990099;

`
const ButoonX = styled.button`
    background-color:  #f2f2f2;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: solid 1px #e62e00;

`
const DivButton = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;

    position: relative;
    bottom: 55px;

`
const Bio = styled.div`
    display: flex;
    word-break: break-all;
    width: 300px;

`
const HeaderDiv =styled.div`
        display: flex;
        align-items: center;
        width: 400px;
        height: 50px;
        border-bottom: solid 3px black;    

`
const ButoonHeader = styled.button`
    border: none;
    margin-left: 70px;

    border: none;
    &:hover{
        border:none;
        background-color: #A0A0A0;}

    img {
        
        width: 20px;
        height: 20px;
    }  
`
const DivP = styled.div `
    display: flex;
    margin-left: 130px;
    height: 40px;
    width: 150px;
    align-items: center;

`
const Pheader = styled.p `
    font-size: 22px;
    color:  #cc0000;
    font-weight: 700;
    

`

const Pheader2 = styled.p `
    font-size: 22px;
    color:  #990099;
    font-weight: 700;
    
`

const DivPerfil = styled.div`
    position: relative ;
    bottom: 140px;
    
    font-weight: 700;
    p{
        font-size: 20px;
    }

    color: rgb(255, 254, 254);
   
`

const ButoonNovosPerfis = styled.button`
    position: relative;
    top: 50px;

`

export {Containe,ImgPerfil,IconsImg,ButoonLike,ButoonX, DivButton,Bio ,HeaderDiv,ButoonHeader,Pheader,Pheader2 ,DivP ,DivPerfil,ButoonNovosPerfis};