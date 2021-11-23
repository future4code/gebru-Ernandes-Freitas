//             Exercícios de interpretação de código

// 1-Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ",resultado) // R: a. false

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado) //R: b. false

// resultado = !resultado && (bool1 || bool2)
// console.log ("c. ", resultado) // R: c. true

// console.log("d. ", typeof resultado) //R: d. boolean

// //2-Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

// let primeiroNumero = prompt("Digite um número!") 
// let segundoNumero = prompt("Digite outro número!")
// const soma = primeiroNumero + segundoNumero 

// console.log(soma)// vai ser impresso somente os numero digitados ex: "5""2".


// 3 -Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

//  let primeiroNumero = prompt("Digite um número!") // Number(prompt("Digite um número!"))
//  let segundoNumero = prompt("Digite outro número!")// Number(prompt("Digite outro número!"))
// //  const soma = primeiroNumero + segundoNumero // Number(primeiroNumero) + Number(segundoNumero)

//  console.log(soma)
// vai ser impresso somente os numero digitados ex: "5""2", porque os números viriam como uma string, no caso teriamos que transformar a string em number. usando Number () no prompt ou nas variaveis, como no exemplo a cima.

//            Exercícios de interpretação de código
//   1.
    // let suaIdade = Number(prompt ("Qual sua idade ?"))
    // let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a) ?"))
    // let diferencaIdade = suaIdade - idadeAmigo
    // console.log("Sua idade é maior do que a do seu amigo ?",suaIdade > idadeAmigo )
    // console.log("A diferença de idade é de "+diferencaIdade+" ano(s)!" )
// 2.
    
// let par = Number(prompt("Insira um número PAR : "))
// let resultado = par % 2
// console.log(resultado) // todo número PAR, volta o resultado 0. caso for colocado número IMPAR o resultado volta 1

// 3.

    // let suaIdade = Number(prompt("Qual sua idade ?"))
    // let idadeMeses = suaIdade * 12
    // let idadeDias = suaIdade * 365
    // let idadeHoras =  suaIdade * (24*30*365)
    // console.log("sua idade em mês : "+idadeMeses+" Meses")
    // console.log("Sua idade em dias : "+idadeDias+" Dias")
    // console.log("Sua idade em horas :" +idadeHoras+" Horas")

//4.

    let numeor1 = Number(prompt("Insira o primeiro número !"))
    let numero2 = Number(prompt("Insira o segundo número"))
    let divisao1 = numeor1 % numero2
    let divisao2 = numero2 % numeor1 
    console.log("O primeito número é maior que o segundo ?"+(numeor1>numero2)) 
    console.log("O primeiro número é igual ao segundo ?"+ (numeor1 === numero2))
    console.log("O primeiro número é divisel pelo segundo ?"+ (divisao1=== 0  ))
    console.log("O segundo número é divisível pelo primeiro ?"+ (divisao2 === 0))
