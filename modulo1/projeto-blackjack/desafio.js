/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

     const boasVindas = "Seja bem vindos ao jogo Blackjack!"

           alert(boasVindas)
      
         
      
     if(confirm ("Gostaria de Inicia uma partida ?")){
      
         
      
      let cartasUsuario = comprarCarta()
      let cartasUsuario2 = comprarCarta()
      let cartasComputador = comprarCarta()
      let cartasComputador2 = comprarCarta()
      let pontosDoUsuario = cartasUsuario.valor + cartasUsuario2.valor
      let pontosDoComputador = cartasComputador.valor + cartasComputador2.valor   
      alert(`Usuário - cartas:${cartasUsuario.texto} e ${cartasUsuario2.texto} - pontuação: ${pontosDoUsuario} `)
      alert(`computador - cartas:${cartasComputador.texto} e ${cartasComputador2.texto} - pontuação: ${pontosDoComputador}`)
      // if(confirm(`Suas cartas são: ${cartasUsuario.texto} e ${cartasUsuario2.texto}. A carta revelada do computador é ${cartasComputador.texto}."\n" Deseja comprar mais cartas? `))

      if (pontosDoUsuario>pontosDoComputador ) {
        alert("O usuário ganhou!")
     }else if (pontosDoComputador>pontosDoUsuario) {
        alert(" O computador ganhou!")
     }else if (pontosDoUsuario === pontosDoComputador){
        alert("Deu empate!") 
     }
     }
     else{
        alert("O jogo acabou! ")
     }
      
   
 
    
    