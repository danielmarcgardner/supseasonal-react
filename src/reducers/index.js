import { combineReducers } from 'redux'
import {ingredients, ingredient, singleIngredient}  from './ingredientsReducer'
import {date} from './dateReducer'
import {recipe, fillInfoBox} from './monthRecipeReducer'

const ssApp = combineReducers({
  //import reducers and put them here
  ingredients,
  ingredient,
  date,
  singleIngredient,
  recipe,
  fillInfoBox
})

export default ssApp
