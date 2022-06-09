import  express  from "express";
import cors from "cors"
import { Request, Response } from 'express'
import {produtos,Produtos} from "./data"

const app =express();
app.use(express.json());
app.use(cors())


app.listen(3003, () => {
    console.log("Servidor Online")

});

app.get('/test', (req: Request, res: Response) => {

    try {

        console.log("Test")  

    }
    catch (error) {
        res.status(400).end("Algo de deu arrado")
    }
})

//-------ex3-----//

app.post("/produtos", (req:Request, res: Response)=> {

    let codigoErro :number

    try{

        const  {id ,name, price} = req.body
        produtos.push({id ,name, price})
        res.send(produtos)
        
    }
    catch (error) {
        res.status(400).end("Algo de deu arrado")
    }
    
})

// ----ex4----//

app.get("/allprodutos" , (req:Request,res:Response)=>{

    let codigoErro :number
    try{
        res.send(produtos)
    }
    catch (error){

    }
})

// ----ex5----//

app.put("/editproduto", (req:Request,res:Response)=>{


        const {name , price}:Produtos = req.body
    
        produtos.filter((p)=>{
           if(name === p.name ){
             return p
           }
        })
       .map((p)=>{
           
            p.price = price
        })
    

        res.send(produtos)

})

//--ex6---//


app.delete("/deleteproduto", (req:Request,res:Response)=>{


    const {name} = req.body

   const seiLa =  produtos.findIndex((p)=>{
       if(name === p.name ){
          
        return p
       }
    })

   produtos.splice(seiLa,1)
  
    res.send(produtos)

})
