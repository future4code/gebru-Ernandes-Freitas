//Exercicio 1  A) //

const minhaString : string =  "Ernandes Bitencourt"

//  B)  //

const meuNumero: number | string = 30

// C) // 

type Objeto = {
   nome: string,
   idade: number,
   corfavorita: ArcoIris 
}
enum ArcoIris {
    VERMELHO = "Vermelho",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO ="Amarelo",
    LARANJA = "Laranja"
}

const pessoa :Objeto ={
    nome: "Ernandes",
    idade: 30,
    corfavorita: ArcoIris.VERMELHO
}

const pessoa2 :Objeto ={
    nome: "keven",
    idade: 20,
    corfavorita: ArcoIris.AMARELO
}