import express, {  request, response } from "express";
import cors from"cors"
import { Request , Response } from "express";
import { afazeres} from "./ex3"
import {listAfazers} from "./ex4"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(request:Request , response:Response)=>{
    response.status(200).send("Deu tudo certo") ;
});

app.listen(3003, () => { 
    console.log("Servidor no Ar");
});

app.get("/ping",(request,response)=>{
    response.send("Pong! 🏓")
});

//eX : 4//
app.get("/afazeres",(request:Request , response:Response) =>{
        // response.send({Resultado:listAfazers})

        let aFazer = request.query.aFazer
        let tarefaAFazer : boolean
       if (aFazer === "false") {
        tarefaAFazer = false
       }else {
        tarefaAFazer = true
       }

        const resultado = afazeres.filter(fazer => fazer.completed === tarefaAFazer )

        response.send({resultado})

})
