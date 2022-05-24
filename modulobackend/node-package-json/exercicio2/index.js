// exercio 2//

const op = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

if (op == "add"){
   console.log(`Resposta: ${number1 + number2}`)
}
if (op == "sub"){
    console.log(`Resposta: ${number1-number2}`)
}if(op == "mult"){
    console.log(`Resposta: ${number1*number2}`)
}if(op == "div"){
    console.log(`Resposta: ${number1/number2}`)
}