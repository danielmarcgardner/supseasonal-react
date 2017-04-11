import { combineReducers } from 'redux'
import {ingredients, ingredient, singleIngredient, monthlyIngredientsArr}  from './ingredientsReducer'
import {date} from './dateReducer'
import {recipe, recipeInfo} from './monthRecipeReducer'

const ssApp = combineReducers({
  //import reducers and put them here
  ingredients,
  ingredient,
  date,
  singleIngredient,
  recipe,
  monthlyIngredientsArr,
  recipeInfo

})

export default ssApp
