import { BaseError } from "./BaseError";

export class invalidAuthenticator extends BaseError {
    constructor() {
        super(400," Usuário não autorizado")
    }
};

export class invalidToken extends BaseError {
    constructor(){
        super(400, " O token precisa ser passado nos cabeçalhos")
    }
}