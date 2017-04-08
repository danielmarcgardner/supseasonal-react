import * as CONST from '../constants/constants';

const ingredients = (state = [], action) => {
  switch(action.type){
    case CONST.ALL_INGREDIENTS:
      return action.payload
    default:
      return state
  }
}

const ingredient = (state = '', action) => {
  switch(action.type){
    case CONST.SET_INGREDIENT:
      return action.ingredient
    default:
      return state
  }
}

export default ingredients
export default ingredient
