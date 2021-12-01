// Exercícios de interpretação de código

// 1.

        let valor = 0
        for(let i = 0; i < 5; i++) {
            valor += i
        }
        console.log(valor)
        //R.  O codigo está  somando o valor o valor de "i" e guardando na variavel "valor" e no final vai ser impresso o resutaldo que é 10

//2.
    
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
            for (let numero of lista) {
             if (numero > 18) {
		        console.log(numero)
	            }
            } 
    //a. O que vai ser impresso no console?

            //R. vai ser  impresso  os valores do array que é maior de 18
    
    //b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é  

            //R. Sim , veja o código abaixo , ele vai acessa todos os índices do array.

            const lista2 = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
            for (let numeros of lista2) { 
                
                    console.log(numeros)
                    
                } 
// //3.
 
        const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        let quantidadeAtual = 0
        while(quantidadeAtual < quantidadeTotal){
            let linha = ""
        for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "*"
        }
         console.log(linha)
        quantidadeAtual++
        } //R. a cada vez que laço for feito vai ser acrescentado mais um "*" na variavel "linha".  Se o usurario digitar o número 4, vai ser impresso "*","**","***","****"


// -                            Exercícios de escrita de código                          


//1.   
        let petNumber = Number(prompt("Quantos bichos de estimação devo guarda ?"))
        let petNames = []    
        for (let index = 0; index <= petNumber-1; index ++) {
            if (petNumber === 0) {
                console.log("Que pena! Você pode adotar um pet!")
            }else{
                let adoptedPets = prompt("Digite o(s) nome()s do(s) pet(s) que deseja adotar.").toLowerCase()
                petNames.push(adoptedPets)
            }
            
        }
            console.log(petNames)

//2            
        let arrayOriginal =[3,10,9,2,1,6,19,26,14]

      //a. 
          function valorOriginalDoArray(valoresDoArry) {
            for (let valores1 of valoresDoArry) {
                console.log(valores1)
            }  

          }      

       //b.
          function valorDividoPorDez(divididoPorDez) {
            let resultadoDaDivisão=[]
            for (let i = 0; i < divididoPorDez.length; i++) {
                  let resultado1=divididoPorDez[i]/10
                  resultadoDaDivisão.push(resultado1) 
              }
              return resultadoDaDivisão
            }

       //c 
            function valorPar(valorParDaArry) {
                let arryPar = []
                for (let par = 0 ; par < valorParDaArry.length; par++) {
                    
                    if (valorParDaArry[par] % 2 ===0) {
                        arryPar.push(valorParDaArry[par])
                    }
                    
                }
                    return arryPar
            }     


       //d. 
            function arrayString(stringArry) {
                let novaString= [ ]
                for (let ns = 0; ns < stringArry.length; ns++) {
                    novaString.push(`O elemento do index é ${ns} é ${stringArry[ns]}`)
                    
                }
                return novaString
            }
       

       //e.
            function maiorEMenor(arryaMaiorEMenor) {
                let maior =0
                let menor = Infinity
                for (let mN = 0; mN < arryaMaiorEMenor.length; mN++) {
                    if (arryaMaiorEMenor[mN] > maior ) {
                        maior = arryaMaiorEMenor[mN]
                    }else if(arryaMaiorEMenor[mN] < menor){
                        menor = arryaMaiorEMenor[mN]
                    }
                       
                    
                    
                }
                console.log(`O maior número é ${maior} e o menor é ${menor}`)
            }     


            valorOriginalDoArray(arrayOriginal)
            console.log(valorDividoPorDez(arrayOriginal))
            console.log(valorPar(arrayOriginal))
            console.log(arrayString(arrayOriginal))
            console.log(maiorEMenor(arrayOriginal))
            



//-----------                        DESAFIO                    ---------------

//1.                       NÃO CONSEGUIR FAZER NENHUM  :x
            
            