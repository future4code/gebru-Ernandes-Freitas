import moment from "moment";
import { invalidAuthenticator, invalidToken } from "../../error/AutenticatorError";
import { BaseError } from "../../error/BaseError";
import { MissingFields } from "../../error/MissingFields";
import { invalidRecipe } from "../../error/RecipeError";
import { Recipe, RecipeInput } from "../../model/Recipe";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import { RecipeRepository } from "./RecipeRepository";

export class RecipeBusiness {
    constructor(private recipeDataBase: RecipeRepository) { }

    async createRecipeBusiness(input: RecipeInput) {
        try {

            const { title, description, token } = input

            if (!token) {
                throw new invalidToken()
            }

            if (!title || !description) {
                throw new MissingFields()
            }

            const authenticatorData = new Authenticator().getTokenData(token)

            if (!authenticatorData.id) {
                throw new invalidAuthenticator()
            }

            const id = new IdGenerator().generateId()
            const createdAt = new Date() as any

            const recipe: Recipe = {
                id,
                title,
                description,
                createdAt,
                authorId: authenticatorData.id
            }

            await this.recipeDataBase.createRecipe(recipe)


        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }
    }

    async recipeByIdBusiness(id: string, token: string) {
        try {

            if (!token) {
                throw new invalidToken()
            }

            const authenticatorData = new Authenticator().getTokenData(token)

            if (!authenticatorData.id) {
                throw new invalidAuthenticator()
            }

            const recipe = await this.recipeDataBase.selectRecipeById(id)

            if (!recipe) {
                throw new invalidRecipe()
            }

            recipe.createdAt = moment(recipe.createdAt).format("DD/MM/YYYY")

            return recipe
        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }
    }
}