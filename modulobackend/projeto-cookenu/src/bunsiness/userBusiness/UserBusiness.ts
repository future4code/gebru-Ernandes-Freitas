import { invalidAuthenticator, invalidToken } from "../../error/AutenticatorError";
import { BaseError } from "../../error/BaseError";
import { MissingFields } from "../../error/MissingFields";
import { invalidEmail, invalidPassword, invalidPasswordCreate, invalidUser, invalidUserEmail } from "../../error/UserError";
import { HashManager } from "../../HashManager";
import { Login, Signup, SignupInput } from "../../model/User";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import { UserRepository } from "./UserRepository";


export class UserBusinnes {

    constructor(private userDataBase:UserRepository) {}

    async signupBusiness(signup:SignupInput){
        try{
            const {name , email, password} = signup;
            if ( !name || !email || !password){
                throw new MissingFields()
            };
            if(!email.includes("@")){
                throw new invalidEmail();
            };
            if (password.length < 6){
                throw new invalidPasswordCreate();
            };
            
            const findEmail = await this.userDataBase.findUserEmail(email);
            if(findEmail){
                throw new invalidUserEmail();
            };

            const hashManage = new HashManager();
            const hashPassword = await  hashManage.hash(password);
            
            const id= new IdGenerator().generateId();

            const newSignu:Signup = {
                id,
                name,
                email,
                password: hashPassword
            };

            await this.userDataBase.signup(newSignu);

            const authenticator = new Authenticator();
            const acessToken = authenticator.generateToken({id});
            
            return acessToken;

        }catch(error:any){
            throw new BaseError(error.statusCode,error.sqlMessage || error.message);
        }
    };

    async loginBusiness(login: Login) {
        try {
          const { email, password } = login;
    
          if (!email || !password) {
            throw new MissingFields();
          }
    
          const user = this.userDataBase.findUserEmail(email);
    
          if (!user) {
            throw new invalidUser();
          }
    
          if (!email.includes("@")) {
            throw new invalidEmail();
          }
    
          const hashManager = new HashManager();
          const passwordIsCorrect = await hashManager.compare(
            password,(await user).password
          );
    
          const authenticator = new Authenticator();
          const token = authenticator.generateToken({id:(await user).id});
    
          if (!passwordIsCorrect) {
            throw new invalidPassword();
          }
          return token;
        } catch (error: any) {
          throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }
      }
    
      async findUserBusiness(token: string) {
        try {
          if (!token) {
            throw new invalidToken();
          }
    
          const authenticatorData = new Authenticator().getTokenData(token);
    
          if (!authenticatorData.id) {
            throw new invalidAuthenticator();
          }
    
          const user = await this.userDataBase.selectByUser(authenticatorData.id);
    
          return user;
        } catch (error: any) {
          throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }
      }
    
      async getUserByIdBusiness(id: string, token: string) {
        try {
          if (!token) {
            throw new invalidToken();
          }
    
          const authenticatorData = new Authenticator().getTokenData(token);
    
          if (!authenticatorData.id) {
            throw new invalidAuthenticator();
          }
    
          const user = await this.userDataBase.selectUserById(id);
    
          return user;
        } catch (error: any) {
          throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }
      }


}