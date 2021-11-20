// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Altura"))
  let largura = Number(prompt("Largura"))
  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("O ano atual?"))
  const anoNascimento = Number(prompt("Ano de nascimento?"))
  console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  
  return (peso/(altura*altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Seu nome ?")
  let idade = prompt("Sua idade ?")
  let eMail = prompt("Seu e-mail ?")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${eMail}.`)
  
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores =[]
  let cor1 = prompt("Digite uma cor :")
  let cor2 = prompt("Digite a segunda cor :")
  let cor3 = prompt("Digite a terceira cor :")
  cores.push(cor1,cor2,cor3)
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let vendasFaltante = custo/valorIngresso
  return vendasFaltante
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1 > string2
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  
   array.push(array.splice(0,1)[0])
   array.unshift(array.splice(0,1)[0])
   return array
   // Não consegui
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1 === string2
//  não consegui
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Ano atual ?"))
let anoNascimento = Number(prompt("Ano do nascimento ?"))
let anoDeEmissao = Number(prompt("Ano de emissão de carteira ?"))
let idadeatual = anoAtual - anoNascimento
let anoRenovacao = anoAtual - anoDeEmissao
 let pessoas20Anos = idadeatual <= 20 
 let renovacao5Anos = anoRenovacao <= 5
 let pessoas20A50Anos = idadeatual > 20 <=50
 let renovacao10Anos = anoRenovacao <= 10
 let pessoasACima50Anos = idadeatual >= 50 
 let renovacao15Anos = anoRenovacao <= 15 
console.log (pessoas20Anos,renovacao5Anos,pessoas20A50Anos,renovacao10Anos,pessoasACima50Anos,renovacao15Anos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}