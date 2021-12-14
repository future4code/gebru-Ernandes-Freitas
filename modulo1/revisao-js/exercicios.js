// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   function ordenar(a,b){
     if(a<b){
     return -1
   }if(a>b){
     return 1
   }else {
     return 0
   }
  }
  return array.sort(ordenar)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let novoArray =[]
  for (let i = 0; i < array.length; i++){
  if(array[i] % 2 ===0){
    novoArray.push(array[i])
  }
}
return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let arrayElevadoA2=[]
 
 
 for (let e2 = 0; e2 < array.length; e2++){
   if(array[e2]%2===0){
     arrayElevadoA2.push(array[e2]*array[e2])
    
   }  
}
  return arrayElevadoA2
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero=0
  for (let index= 0; index < array.length; index++) {
    if(array[index] > maiorNumero){
      maiorNumero = array[index]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior 
  let vF 
  let diferenca
  if (num1>num2) {
    maior= num1
  }else{
    maior = num2
  }
  if(num1 / num2 === 0){
    vF=false
  }else{
    vF =true
  }
  diferenca = num2 - num1
let maiorNumeros={
  maiorNumero:maior,
  maiorDivisivelPorMenor:vF,
  difereca:diferenca
}
return maiorNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

if(ladoA===ladoB && ladoA===ladoC && ladoB===ladoA && ladoB===ladoC && ladoC===ladoA && ladoC===ladoB){
  return "Equilátero"
}else if (ladoA===ladoB || ladoA===ladoC || ladoB===ladoC || ladoB === ladoA || ladoC === ladoA || ladoC==ladoB){
  return "Isósceles"
}else{
    return "Escaleno"
}

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {


  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let filme1 = {
    nome: "O Diabo Veste Prada",
    ano: 2006 ,
    diretor: "David Frankel",
    atores:["Meryl Streep ", "Anne Hathaway","Emily Blunt", " Stanley Tucci"]
  } 
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  
   return {...pessoa, nome:"ANÔNIMO",}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let aprovadas=[]
   for (let index = 0; index < pessoas.length; index++) {
     if(pessoas.altura[index] > 1.5 && pessoas.idade[index] > 14 && pessoas.idade[index] < 60){
        aprovadas.push(pessoas.idade[index])
     }
   }
   return aprovadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  let consultaOrdenadas =[]
  consultaOrdenadas.push (consultas.sort(function(a,b){
   return a- b   
  })
  )
  
  return consultaOrdenadas

}