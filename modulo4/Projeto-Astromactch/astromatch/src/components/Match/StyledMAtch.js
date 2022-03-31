import styled from "styled-components";


const ContainePerson = styled.div`
 display: flex;
 flex-direction: column;
 border: solid 1px black;
 background-color: rgb(216,216,216);
 align-items: center;
 gap: 10px;
 width: 500px ;
 height: 650px;
 scroll-behavior: smooth;
 overflow-y: scroll;
`

const ImgPerson= styled.img`
    width: 85px;
    height: 85px;
    
`
const Container = styled.div`
    width: 220px ;
    height: 180px;
    display: flex;
    display: flex;
    gap: 10px;
    align-items: center;
   
`
const Header = styled.div`
    
    width: 100%;
    height: 40px; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: solid 3px black; 
    background-color: white;

`
const Iconsimgs =styled.img`
    width: 28px;
    height: 28px;

`
const HeaderButoon = styled.button`
        border: none;
    &:hover{
        border:none;
        background-color: #A0A0A0;
    
}
    
`
export {ImgPerson ,Container,ContainePerson,Header,Iconsimgs,HeaderButoon }; 