import express from "express"
import { Request ,Response} from "express";
import cors from "cors"
import {users} from "./users/users"

const app=express();

app.use(express.json());
app.use(cors());

//eX01//

app.get("/allusers",(req:Request, res:Response)=>{

    res.status(200).send(users)
})


// Ex02 // 

app.get("/users" , (req:Request , res:Response) => {

    try {
        const usuario = req.query.type
        
    } catch (error) {
        
    }
   


})

app.listen(3003,()=>{
    console.log("Servidor on")
})