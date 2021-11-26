
//1.Leia o código abaixo:
        const respostaDoUsuario = prompt("Digite o número que você quer testar")
        const numero = Number(respostaDoUsuario)

        if (numero % 2 === 0) {
            console.log("Passou no teste.")
        } else {
            console.log("Não passou no teste.")
        }

    //a. Explique o que o código faz. Qual o teste que ele realiza? 
        //R:  O codigo vai pedi um numero do usuario em string, e logo depois vai ser tranformado em Number, e na condição vai verificar se o resto da divisão %, vai ser  igual a 0. Se "sim " vai ser impresso no console. "Passou no teste" e se "Não" , vai ser impresso "Não passou no teste."

    //b. Para que tipos de números ele imprime no console "Passou no teste"? 
        //R:  para numeros PAR

    //c. Para que tipos de números a mensagem é "Não passou no teste"? 
        //R: Para numeros IMPAR 

      
//2

        let fruta = prompt("Escolha uma fruta")
        let preco
            switch (fruta) {
                case "Laranja":
                preco = 3.5
                 break;
                case "Maçã":
                preco = 2.25
                break;
                case "Uva":
                preco = 0.30
                break;
                case "Pêra":
                preco = 5.5
                //break; // BREAK PARA O ITEM c.
                default:
                preco = 5
                break;
            }
        console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)    

    // a. Para que serve o código acima?
        //R: O codigo vai pedi para o usuario escolher um fruta, e a fruta que ele escolher vai ser impressas no console junto o preço dela.
    
    //b.  Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
        //R: "O preço da fruta ",Maçã, " é ", "R$ ", 2.25

    //c.  Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
        //R: Não sei explicar o que aconteceu .
//3.

        // const numero = Number(prompt("Digite o primeiro número."))

        // if(numero > 0) {
        //     console.log("Esse número passou no teste")
	    //     let mensagem = "Essa mensagem é secreta!!!"
        // }

        // 1-console.log(mensagem)     

    //a. O que a primeira linha está fazendo?  

        //R: Primeira linha Está pedindo um numero do usuario

    //b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
        //R: Aparentimente vai da erro, por causa da  do outro console.log .

    //c.  Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

        //R: sim haverá erro, porque a condição vai fazer uma comparação ,se Number é maior que 0 , e se a resposta for "sim" vai ser impresso no console. "Esse número passou no teste", e no outro console.log vai da erro , porque a variavel está dentro de uma condição.

//------------------------------------------------------


//------------Exercícios de escrita de código-------------

//1. 

        let userAge = Number(prompt("Qual a sua idade ?"))

        function toDrive(ableToDrive) {
            
            if (ableToDrive >= 18) {
                console.log("você pode dirigir")
            } else {
                console.log("Você não pode dirigir")
            }
        }
        console.log(toDrive(userAge))

//2     ------------------------------------------------

        let schoolShift = prompt("Informe em que turno você estuda: Matutino - (M) | Vespertino - (V) | Noturno - (N).").toUpperCase()

        function shift1 (shifts) {
            if (shifts === "M" ) {
                console.log("Bom dia !")
            }else if (shifts === "V") {
                console.log("Boa tarde")
            }else {
                console.log("Boa noite")
            }
        }
        
        shift1(schoolShift)

//3      ------------------------------------------------

        let schoolShift2 = prompt("Informe em que turno você estuda: Matutino - (M) | Vespertino - (V) | Noturno - (N).").toUpperCase()

        switch (schoolShift2) {
            case "M": 
                console.log("Bom dia!") 
                break;
            case "V":
                console.log("Boa tarde!")
                break;
            case "N":
                console.log("Boa noite!")
                break;    
        
            default:
                console.log("Esse Turno não existe.")
                break;
        }    

//4       ------------------------------------------------

        let film = prompt("Qual o genero do filme ?").toLocaleLowerCase()
        let ticket = Number (prompt("Qual o valor do ingresso R$ ?"))

        function movieTheater(films,ticketPrice) {
            if (films === "fantasia" && ticketPrice <15) {
                console.log("Bom filme!")
            }  else{
                console.log("Escolha outro filme")
            }
        }

        console.log(movieTheater(film,ticket))


// ----------------     DESAFIO      -----------------------

//          1.

        let film1 = prompt("Qual o genero do filme ?").toLocaleLowerCase()
        let ticket1 = Number (prompt("Qual o valor do ingresso R$ ?"))
        let luche = prompt("Qual lanchinho vai comprar ?")

        function movieTheater(films1,ticketPrice1,snacks1) {
            if (films1 === "fantasia" && ticketPrice1 <15) {
                console.log(`Bom filme!. E aproveite seu/sua(s) ${snacks1}(s).`)
            }  else{
                console.log("Escolha outro filme!")
            }
        }

        console.log(movieTheater(film1,ticket1,luche))


 //        2.
 
        const nomeCompleto = prompt("Seu nome completo :")
        const tipoDoJogo = prompt(" Escolha o tipo do jogo : (IN) - internacional ou (DO) - Doméstico.").toUpperCase()
        const etapaDeJogo = prompt("Escolha o tipo de jogo | ((SF) - semi-final  |  (DT) - Decisão do terceiro lugar ) | (FI) Final :  - ").toUpperCase()
        const categorias = Number(prompt("Qual a categoria você escolhe : 1 , 2 , 3 ou 4 ?")) 
        const qIngressos = Number(prompt("Quantos ingressos você deseja ?"))

        let valorIngresso
        switch (etapaDeJogo) {
            case "SF":
                switch (categorias) {
                    case 1:
                        valorIngresso = 1320
                        break;
                    case 2:
                        valorIngresso = 880
                        break
                    case 3:
                        valorIngresso = 550
                        break
                    case 4:
                        valorIngresso = 220
                        break

                    default:
                    
                        break;
                }
                break;
        
            default:
                break;
        }
        switch (etapaDeJogo) {
            case "DT":
                switch (categorias) {
                    case 1:
                        valorIngresso = 660
                        break;
                    case 2:
                        valorIngresso = 440
                        break
                    case 3:
                        valorIngresso = 330
                        break
                    case 4:
                        valorIngresso = 170   
                        break 
                    default:
                        break;
                }
                break;
        
            default:
                break;
        }
        switch (etapaDeJogo) {
            case "FI":
                switch (categorias) {
                    case 1:
                        valorIngresso = 1980                        
                        break;
                    case 2:
                        valorIngresso= 1320
                        break
                    case 3:
                        valorIngresso = 880
                        break
                    case 4:
                        valorIngresso = 330
                    default:
                        break;
                }
                break;
        
            default:
                break;
        }
//--------------------------------------------------------------------
        let doIn

        if (tipoDoJogo === "DO") {
            doIn = "Doméstico"
        }else{
            doIn = "Internacional"
        }
//---------------------------------------------------------------------
        let valorTotalDeIngresso
        
        if (tipoDoJogo === "IN") {
            valorTotalDeIngresso = (valorIngresso*4)*qIngressos
        } else if (tipoDoJogo ==="DO" ) {
            valorTotalDeIngresso = valorIngresso*qIngressos
        }
//----------------------------------------------------------------------
        let etapaJogo1

        if (etapaDeJogo === "SF") {
            etapaJogo1 = "Semifinais"
        }else if (etapaDeJogo === "DT") {
            etapaJogo1 ="Decisão de 3° lugar"
        }else{
            etapaJogo1 = "Final"
        }



        console.log("---------   Dados da compra   -----------")
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo do jogo: ${doIn}`)
        console.log(`Etapa do jogo: ${etapaJogo1} `)
        console.log(`Categoria: ${categorias}`)
        console.log(`Quantidade de ingresso: ${qIngressos}`)
        console.log("-----------    Valores     --------------")
        console.log(`Valor do ingresso: R$ ${valorIngresso}`)
        console.log(`Valor total: R$ ${valorTotalDeIngresso}`)
        console.log("------------------------------------------")




