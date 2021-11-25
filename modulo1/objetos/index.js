//----------------Exercícios de interpretação de código

// 1.

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])//a. vai ser impresso: Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])//a. vai ser impresso: Virginia Cavendish
console.log(filme.transmissoesHoje[2])//a . Vai ser impresso: canal:"Globo", horario:"14h"


// //2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)//a. vai ser impresso : nome: juca, idade:3 , raca:SRD
console.log(gato) //a.  vai ser impresso o spread de carrocho com o adicionamento de nome: juba e vai ficar: nome:juba , idade:3 , raca:SRD
console.log(tartaruga) //a. vai ser impresso o spread de gato com a modificação da letra "a" pra letra "o" .  nome:jabo, idade:3 , raca:SRD.

//a) O que vai ser impresso no console?
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// R: faz um spread do obejto cachoro, como se fosse um copia dos dados que tem no objeto cachorro. e colocando em um novo objeto.


//3.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))//a . vai ser impresso o valor de backende qui é false
console.log(minhaFuncao(pessoa, "altura"))//a . vai ser impresso o undefined, porque não tem nenhuma propriedade como o nome "altura"

 //b.  R: foi feita uma funciton  com o objeto e suas propriedades onde a funcion pode acessar  o obejto criado e suas propriedades .


// -----------------Exercícios de escrita de código

//1 
    //a
        
        function nomeDaPessoa (objeto,propriedade) {
            return objeto[propriedade]
        }

        const people ={
            name: "Ernandes",
            surname:["junior","k2","k2jr"]
        }
        
        console.log(`Eu sou ${nomeDaPessoa(people,"name")}, mas pode me chamar de: ${people.surname[0]},${people.surname[1]} ou ${people.surname[2]}.`)

    //b
        
        const newSurname = {
          ...people,
          surname:["k2jr", "junior","k2"]
         }  
            console.log(nomeDaPessoa(newSurname,"surname"))

// 2 
//      a. Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
              
         const registration = {
             name: "Keven",
             age : 18,
            profession: "Desenhista"
         }

         const registration3 = {
            name: "Kevens",
            age : 17,
           profession: "Desenhistass"
        }
        
        

    //b. Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

         function arryRegistration(registration2) {
            const newregistration = []
             newregistration.push(registration2.name)
             newregistration.push(registration2.name.length-1)
             newregistration.push(registration2.age)
             newregistration.push(registration2.profession)
             newregistration.push(registration2.profession.length-1)
             return newregistration

         }

         console.log(arryRegistration(registration))
         console.log(arryRegistration(registration3))
         

//3.
    //a. 

        let carrinho= []

    //b. 

         const banana = {
           name: "Banana",
           disponibilidade: true  
         }
         
         const litter = {
             name: "Maçã",
             disponibilidade:true
         }

         const orange ={
             name: "Laranja",
             disponibilidade: true
         }

    //c
        
         function compraFrutas(frutas) {
            carrinho.push(frutas)
            
            return carrinho 
         }
           compraFrutas(banana)
           compraFrutas(litter) 
           compraFrutas(orange)
         console.log(compraFrutas(carrinho))


// ---------------------Desafios---------------

// -----------------NÃO CONSEGUI RESOLVER NENHUM :( -------------

       
        