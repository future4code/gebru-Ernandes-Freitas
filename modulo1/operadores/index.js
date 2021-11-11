//             Exercícios de interpretação de código

// 1-Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ",resultado) // R: a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) //R: b. false

resultado = !resultado && (bool1 || bool2)
console.log ("c. ", resultado) // R: c. true

console.log("d. ", typeof resultado) //R: d. boolean

//2-Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um número!") 
let segundoNumero = prompt("Digite outro número!")
const soma = primeiroNumero + segundoNumero 

console.log(soma)// vai ser impresso somente os numero digitados ex: "5""2".


// 3 -Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

 let primeiroNumero = prompt("Digite um número!") // Number(prompt("Digite um número!"))
 let segundoNumero = prompt("Digite outro número!")// Number(prompt("Digite outro número!"))
//  const soma = primeiroNumero + segundoNumero // Number(primeiroNumero) + Number(segundoNumero)

 console.log(soma)
// vai ser impresso somente os numero digitados ex: "5""2", porque os números viriam como uma string, no caso teriamos que transformar a string em number. usando Number () no prompt ou nas variaveis, como no exemplo a cima.

//            Exercícios de interpretação de código
//   1.
    let suaIdade = Number(prompt ("Qual sua idade ?"))
    let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a) ?"))
    let diferencaIdade = suaIdade - idadeAmigo
    console.log("Sua idade é maior do que a do seu amigo ?",suaIdade > idadeAmigo )
    console.log("A diferença de idade é de "+diferencaIdade+" ano(s)!" )
// 2.
    