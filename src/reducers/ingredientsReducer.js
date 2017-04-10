import * as CONST from '../constants/constants';

export const ingredients = (state = [], action) => {
  switch(action.type){
    case CONST.ALL_INGREDIENTS_FULFILLED:
      return action.payload
    default:
      return state
  }
}

export const ingredient = (state = 1, action) => {
  switch(action.type){
    case CONST.SET_INGREDIENT:
      return action.ingredient
    default:
      return state
  }
}

export const singleIngredient = (state = [], action) => {
  switch(action.type){
    case CONST.SINGLE_INGREDIENT_FULFILLED:
      return action.payload
    default:
      return state
  }
}
