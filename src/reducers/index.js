import { combineReducers } from 'redux'
import {ingredients, ingredient, singleIngredient}  from './ingredientsReducer'
import {date, recipe} from './dateReducer'

const ssApp = combineReducers({
  //import reducers and put them here
  ingredients,
  ingredient,
  date,
  singleIngredient,
  recipe
})

export default ssApp
