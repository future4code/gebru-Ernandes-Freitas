import express from "express";
import cors from "cors"
import { Request, Response } from "express";


const app = express();

app.use(express.json());
app.use(cors())

app.get('/',(req: Request , res: Response)=>{
    res.status(200).send("Deu tudo certo")
})

app.listen(3003, () => {
  
    console.log(`Servidor está sendo executado `);
 
});;


//Ex: 2//


type Usuario =
{
 	id:number,
	nome:string,
 	phone:string,
 	email:string,
 	website:string
}

//ex:3//


const usuarios:Usuario[] = [{

    id:1,
    nome:"Ernandes",
    phone:"32",
    email:"seila@gmail.com",
    website:"seila.com"
},
{
    id:2,
    nome:"João",
    phone:"33",
    email:"seila2@gmail.com",
    website:"seila2.com"
},
{
    id:3,
    nome:"Kauan",
    phone:"34",
    email:"seila3@gmail.com",
    website:"seila3.com"
},
{
    id:4,
    nome:"Keven",
    phone:"35",
    email:"seila4@gmail.com",
    website:"seila4.com"
}]


//Ex:4//
app.get("/usuarios" ,(req: Request , res: Response)=>{
    res.send({resultados:usuarios})
})

//Ex:5//

type Posts = {
    id:number,
    title:string,
    body:string
    userId:number
}

//Ex :6//

const posts:Posts[]=[{
    id:1,
    title:"Sei la",
    body:"Sei la1",
    userId:1

},
{
    id:2,
    title:"Sei la1",
    body:"Sei la2",
    userId:2
},
{
    id:3,
    title:"Sei la3",
    body:"Sei la4",
    userId:3
},
{
    id:3,
    title:"Sei la4",
    body:"Sei la5",
    userId:4
}] 

//Ex:7//

app.get("/posts/id",(req: Request , res: Response)=>{
    const id =req.params.id
    res.send({resultados:id})
})

//Ex:8 // 

app.get("/usuarios/:id",(req: Request, res :Response)=>{
    const id = Number(req.params.id)
    const userFilter = posts.filter(user=> user.userId ===id)

    res.send({resultado:userFilter})
})


