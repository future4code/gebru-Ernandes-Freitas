import React from "react";

import {
  Container,
  Title,
  CardMusic,
  Container2,
  SecondTitle,
  SecondContainerItems,
} from "./styles/StyledListMusic"


export default class ListMusic extends React.Component {
   
    
  render() {
    

    return (

      <div>
      <Container>
        <Title>Bem vindos(a)</Title>
        <br></br><h2>Musicas Mais tocadas</h2>
        <CardMusic
        src="http://spoti4.future4.com.br/1.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
       
       <CardMusic
        src="http://spoti4.future4.com.br/2.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />

        <CardMusic
        src="http://spoti4.future4.com.br/3.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/4.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/5.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/6.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/7.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/8.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/9.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/10.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/11.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/12.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/13.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <CardMusic
        src="http://spoti4.future4.com.br/14.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
         <CardMusic
        src="http://spoti4.future4.com.br/15.mp3"
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        
      </Container>

      <Container2>
          <SecondTitle> Programas</SecondTitle>
          <SecondContainerItems
            src="https://open.spotify.com/embed/show/2w3vpindCOfxVx2oHlbjHm?utm_source=generator" 
             allowfullscreen="" 
             allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
             />
                <SecondContainerItems
               src="https://open.spotify.com/embed/show/7vvhCa1egAohzQ5VmbPBVF?utm_source=generator"
                allowfullscreen=""
                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />

            <SecondContainerItems
            src="https://open.spotify.com/embed/show/2w3IfCyn2cAVrSrzVkwTcj?utm_source=generator"
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />

          
        </Container2>

    </div>
    )
  }
}

