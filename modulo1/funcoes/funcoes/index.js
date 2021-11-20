 // Exercícios de interpretação de código 
    //1 . 

        function minhaFuncao(variavel) {
	        return variavel * 5
        }

        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))

        //a) O que vai ser impresso no console?

            //R: vai ser impresseo o resultado  da multiplicação de 2*5 e 10*5 , no caso 10 e 50
 
        // b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que  apareceria no console?

            // R: não vai aparecer nada , porque vai está apenas chamando a função .

    //2
        let textoDoUsuario = prompt("Insira um texto");

        const outraFuncao = function(texto) {
	        return texto.toLowerCase().includes("cenoura")
        }

        const resposta = outraFuncao(textoDoUsuario)
         console.log(resposta)

            // a. Explique o que essa função faz e qual é sua utilidade

                //R: A função vai retornar o texto em minusculo e verificar se tem a palavra "cenoura" do texto. com true ou false

            // b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
                //  i.   `Eu gosto de cenoura`
                //  ii.  `CENOURA é bom pra vista`
                //  iii. `Cenouras crescem na terra`

                //R :  Todas as respostas vão ser treu, porque todas elas tem "cenoura"
                

                        // Exercícios de escrita de código

      //1
            //a

                function sobremim(){
                    console.log("Eu sou Ernandes, tenho 29 anos, moro em Manaus e sou estudante")
                }
                    sobremim()

            //b 
                 const nome = prompt("Seu nome: ")
                 const idade = Number(prompt("Sua idade: "))
                 const cidade = prompt("Sua cidade: ")
                const profissao = prompt("sua profissao")

                function tudoSobreMim(nome,idade,cidade,profissao){
                      console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)  
                 }
                    console.log(tudoSobreMim(nome,idade,cidade,profissao))

        //2
            //a 
                    
                    function soma (num1,num2){
                     let resultado = num1 + num2
                    return resultado
                }
                console.log(soma(10,30))

            //b 
                let numero1 = Number(prompt("Digite um número : "))
                let numero2 = Number(prompt("Digite o segundo número :"))  
                function maiorOuIgual (numero1,numero2){
                    let trueOuFalse = numero1 >= numero2
                    return trueOuFalse
                }  
                console.log(maiorOuIgual(numero1,numero2))

            //c
                    let prinumero = Number(prompt("Digite o primeiro número: "))
                    
                    function parOuImpar(prinumero){
                        let res = prinumero % 2
                        let res2 = res === 0
                        return res2
                    }
                    console.log(parOuImpar(prinumero))
            //d
                let mensagem = prompt("Digite um texto")
                
                function mensagemUsuario(mensagem){
                    let resMensagem = mensagem.toUpperCase().length
                     
                    return resMensagem 
                }
                  console.log(mensagemUsuario(mensagem))

        //3
            
            let primeiroNumero = Number(prompt("Digite o primeiro número: "))
            let segundoNumero = Number(prompt("Digite o segundo número: "))
            function somar (){
                return primeiroNumero + segundoNumero
            }
            function subtracao() {
                return primeiroNumero - segundoNumero
            }
            function multiplicacao() {
                return primeiroNumero * segundoNumero
            }
            function divisao (){
                return primeiroNumero / segundoNumero
            }

                console.log("A soma dos numeros é : ", somar(primeiroNumero,segundoNumero))
                console.log("A subtração dos numeros é : ", subtracao(primeiroNumero,segundoNumero))
                console.log("A multiplicação dos numeros é : ", multiplicacao(primeiroNumero,segundoNumero))
                console.log("A divisão dos numeros é : ",divisao(primeiroNumero,segundoNumero))

            //---------------------------------------
            //      Desafios

            //1.
                //a     
                    
                 let arrow1 = () =>{
                    let paran1 = console.log ("Olá, mundo!")  
                    return paran1
                 }
                 arrow1()
                //b 
                  let arrow2 = (numeroDigitado1,numeroDigitado2)=> {
                      let somaDosNumeros = numeroDigitado1 + numeroDigitado2
                      return somaDosNumeros
                  }
                  console.log (arrow2(5,10))

            //2.
                let hipotenusa = (cateto1,cateto2)=>{
                    let resHipotenusa = (cateto1**2 + cateto2**2) ** (1/2)
                    return resHipotenusa
                }
                    console.log(hipotenusa(4,3))
