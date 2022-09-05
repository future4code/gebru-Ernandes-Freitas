import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../model/User"
import dotenv from "dotenv"

dotenv.config();
 export class Authenticator {
    public generateToken = (payLoad:AuthenticationData): string =>{
        const token = jwt.sign(
            payLoad,process.env.JWT_KEY as string,
            {expiresIn:"2h"})
         return token;
    };

    
    public getTokenData = (token:string):AuthenticationData=>{
        const payLoad = jwt.verify(token, process.env.JWT_KEY as string) as jwt.JwtPayload
        const result: AuthenticationData = { id: payLoad.id }
        return result
    };

 }