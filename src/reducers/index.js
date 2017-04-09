import { combineReducers } from 'redux'
import {ingredients, ingredient, singleIngredient}  from './ingredientsReducer'
import date from './dateReducer'

const ssApp = combineReducers({
  //import reducers and put them here
  ingredients,
  ingredient,
  date,
  singleIngredient
})

export default ssApp
