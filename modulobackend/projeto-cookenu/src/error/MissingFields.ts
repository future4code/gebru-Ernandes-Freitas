import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super(401, "Faltando campos para completar" )
    }
} 