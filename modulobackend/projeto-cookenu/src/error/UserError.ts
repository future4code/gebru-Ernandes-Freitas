import { BaseError } from "./BaseError";

export class invalidEmail extends BaseError {
    constructor() {
        super(415, "e-mail inválido é necessário ter '@'")
    }
}

export class invalidPassword extends BaseError {
    constructor() {
        super(400, "Senha inválida!")
    }
}

export class invalidUserEmail extends BaseError {
    constructor() {
        super(404, "Este e-mail já está cadastradord!")
    }
}

export class invalidUser extends BaseError {
    constructor() {
        super(404, "O usuário não está registrado")
    }
}

export class invalidPasswordCreate extends BaseError {
    constructor() {
        super(415, "A senha inválida deve ter mais de 6 caracteres")
    }
}
