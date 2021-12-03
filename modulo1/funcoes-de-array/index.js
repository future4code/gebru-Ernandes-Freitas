//               Exercícios de interpretação de código

//1.

//         const usuarios = [
//             { nome: "Amanda Rangel", apelido: "Mandi" },
//             { nome: "Laís Petra", apelido: "Laura" },
//             { nome: "Letícia Chijo", apelido: "Chijo" }
//         ]
  
//         const novoArrayA = usuarios.map((item, index, array) => {
//         console.log(item, index, array)
//          })
//   //a. R: vai ser impresso os objetos que estão no array. os nomes e apelidos

//  //2
//         const usuarios = [
//             { nome: "Amanda Rangel", apelido: "Mandi" },
//             {  nome: "Amanda Rangel", apelido: "Laura" },
//             { nome: "Letícia Chijo", apelido: "Chijo" },
//         ]
  
//         const novoArrayB = usuarios.map((item, index, array) => {
//             return item.nome
//         })
  
//         console.log(novoArrayB)
   //a.   R:  vai ser impresso o objeto.nome que está na array 
    
//3


//         const usuarios = [
//             { nome: "Amanda Rangel", apelido: "Mandi" },
//             { nome: "Laís Petra", apelido: "Laura" },
//             { nome: "Letícia Chijo", apelido: "Chijo" },
//         ]

//         const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
//         })

//         console.log(novoArrayC)
    //a.  R:     vai ser impresso somento os 2 primeiros nomes e apelidos do obejto que está na array .



//         Exercícios de escrita de código

//1 
        const pets = [
            { nome: "Lupin", raca: "Salsicha"},
            { nome: "Polly", raca: "Lhasa Apso"},
            { nome: "Madame", raca: "Poodle"},
            { nome: "Quentinho", raca: "Salsicha"},
            { nome: "Fluffy", raca: "Poodle"},
            { nome: "Caramelo", raca: "Vira-lata"},
        ]

   //a.  
        const namesPets = pets.map((names,index,arraypet)=>{
            return names.nome
        })    

        console.log(namesPets)
       
   //b. 
        const petsRaca = (racaDog)=>{
            return racaDog.raca ==="Salsicha"
        }
        
        const racaDosPets = pets.filter(petsRaca)
        console.log(racaDosPets)

    //c.
        const clientePoodle = (poodle)=>{
                
              return poodle.raca ==="Poodle"
        }
        const poodleCliente = pets.filter(clientePoodle)

        const descontoClientePoodle = poodleCliente.map((nomeDog,dogRaca) =>{
            return `Você ganhou um cupom de desconto de 10$ para tosar o/a ${nomeDog.nome}`
            
            }
        )

        console.log(descontoClientePoodle)
     
//2.

        const produtos = [
          { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
          { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
          { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
          { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
          { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
          { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
          { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
          { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
          { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
          { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
         ]

   //a. 
            const namesProdutos = (produtosNames)=>{
                return produtosNames.nome
            } 
            const nomesDosProdutos = produtos.map(namesProdutos) 
            console.log(nomesDosProdutos)
            
    //b.

              const novoValor= produtos.map(nomesDoProduto =>{
                  let valorNovo = nomesDoProduto.preco-(5/100*nomesDoProduto.preco).toFixed(2)
                  const tabelaDePreco={
                      nome: nomesDoProduto.nome,
                      preco: valorNovo
                  } 
                  return tabelaDePreco
              })   

              console.log(novoValor)
            
    //c.        
              const categoriaBebidas = produtos.filter(bebidas =>{
                  return bebidas.categoria ==="Bebidas"
              })
              
                console.log(categoriaBebidas)

    //d
              const produtosYpe = produtos.filter(ypeProdutos =>{
                  return ypeProdutos.nome.includes("Ypê")
              })  
              console.log(produtosYpe) 
              
    //e    
            const mensagemDeVenda = produtos.filter(vendasPYpe =>{
              return vendasPYpe.nome.includes("Ypê") 
            }
            )
            
            const mDVEndas = mensagemDeVenda.map(produtosype2 =>{
                return mensagem =(`Compre ${produtosype2.nome} por ${produtosype2.preco}`)
            })  
                    

                console.log(mDVEndas)
            
         
 //                       Desafios
 
    //1
            const pokemons = [
                { nome: "Bulbasaur", tipo: "grama" },
                { nome: "Bellsprout", tipo: "grama" },
                { nome: "Charmander", tipo: "fogo" },
                { nome: "Vulpix", tipo: "fogo" },
                { nome: "Squirtle", tipo: "água" },
                { nome: "Psyduck", tipo: "água" },
            ]

        //a.     
            const namesPkmns = pokemons.map(pkmnsNames =>{
                return pkmnsNames.nome
            })
               
        console.log(namesPkmns.sort())

        //b     Não deu teu de terminar -