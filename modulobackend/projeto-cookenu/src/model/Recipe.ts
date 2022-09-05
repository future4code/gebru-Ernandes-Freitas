export interface Recipe {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    authorId: string
}

export interface RecipeInput {
    title: string,
    description: string,
    token: string
}
