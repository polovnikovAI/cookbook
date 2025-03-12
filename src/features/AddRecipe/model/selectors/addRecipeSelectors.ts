import { StateSchema } from 'app/providers/StoreProvider'

export const getAddRecipeNameFood = (state: StateSchema) => state.addRecipe.recipe.nameFood || ''
