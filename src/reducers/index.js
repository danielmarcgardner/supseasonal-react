import { combineReducers } from 'redux'
import {ingredients, ingredient, singleIngredient, monthlyIngredientsArr}  from './ingredientsReducer'
import {date} from './dateReducer'
import {recipe} from './monthRecipeReducer'

const ssApp = combineReducers({
  //import reducers and put them here
  ingredients,
  ingredient,
  date,
  singleIngredient,
  recipe,
  monthlyIngredientsArr
})

export default ssApp
