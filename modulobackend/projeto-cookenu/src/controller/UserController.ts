import { Request, Response } from "express";
import { UserBusinnes } from "../bunsiness/userBusiness/UserBusiness";
import { Login, SignupInput } from "../model/User";



export class UserController {
  constructor(private userBusiness: UserBusinnes) {}

  async signupController(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const signup: SignupInput = {
        name,
        email,
        password,
      };

      const token = await this.userBusiness.signupBusiness(signup);

      res.status(201).send({
        message: "Conta criada!",
        token,
      });
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  }

  async loginController(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const login: Login = {
        email,
        password,
      };

      const token = await this.userBusiness.loginBusiness(login);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  }

  async findUserController(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const user = await this.userBusiness.findUserBusiness(token);

      res.status(200).send(user);
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  }

  async getUserByIdController(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const { id } = req.params;

      const user = await this.userBusiness.getUserByIdBusiness(id, token);

      res.status(200).send(user);
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  }
}
