// Exercícios de interpretação de código
// 1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)  
//resposta : a. undefiend

array = null
console.log('b. ', array)
// resposta: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) 
// resposta : c. 11

let i = 0
console.log('d. ', array[i])
// resposta : vai mostra o indice 0 = d. 3


array[i+1] = 19
console.log('e. ', array)
// resposta : vai colocar um novo valor no indice 1, que o valor é  4, vai passar a ser  19|  e. [3,19,5,6,7,8,9,10,11,12,13]

const valor = array[i+6]
console.log('f. ', valor)
// resposta : f. 9

// 2,Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 
// Resposta: vai imprimir a frase toda maiúscula e trocar a letra A pela letra I(MIRROCOS), e com o total de quantas leral foi digitadas  contando com os espaços , 27.
//------------------------------------------------

//      Exercícios de escrita de código
    //1.

    let nomeDoUsuario = prompt("Digite seu nome.")
    let emailDoUsuario = prompt("Digite seu e-mail.")
    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

    //2.

    let comidaFavorita = ["Feijão","Bife", "Lasanha" , "Frango","Ovo frito"  ]
    console.log(comidaFavorita )//a.
    console.log("Essas são as minhas comidas preferidas:")
    console.log(comidaFavorita[0])
    console.log(comidaFavorita[1])
    console.log(comidaFavorita[2])
    console.log(comidaFavorita[3])
    console.log(comidaFavorita[4])//b

//    let comidaDoUsuario  = prompt("Digite uma comida favorita ") Questão c estava dando erro e não conseguir resolver. 

   //3.

   let listaDeTarefas = []//a.
   let tarefa1 = prompt("Digite a primeira tarefa que você precisa realizar ao dia ")//b
   let tarefa2 = prompt("Digite a segunda tarefa.")//b
   let tarefa3 = prompt("Digite a terceira tarefa.")//b
   listaDeTarefas.push(tarefa1,tarefa2,tarefa3)//b
   console.log(listaDeTarefas)//c
   let tarefaRealizada = prompt("Digite a terefa que já realizou 0 , 1 ou 2")//d
    listaDeTarefas.splice(tarefaRealizada,tarefaRealizada)//e
    console.log(listaDeTarefas)//f

    //-------------------------------------------------
            //Desafio
            //1.
        let fraseUsuario = prompt("Digite uma frase :")
        let fraseArray = fraseUsuario.split(" ")   
        
        console.log(fraseArray)

            //2.
           let arrayDesafio = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
            let palavraSolicitada = arrayDesafio.indexOf("Abacaxi") 
            console.log(`O índice da pra Abacaxi é : ${palavraSolicitada} e o tamanho da array é : ${arrayDesafio.length -1}.`)




       
        
     