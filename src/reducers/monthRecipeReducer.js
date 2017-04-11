import * as CONST from '../constants/constants';

export const recipe = (state = [], action) => {

  switch(action.type) {
    case CONST.MONTH_RECIPES_FULFILLED:
      return action.payload;
    default:
      return state;
  }
}

export const recipeInfo = (state = {}, action) => {
  switch (action.type) {
    case CONST.SET_INFOBOX_FULFILLED:
      return action.recipeInfo;
    default:
      return state;
  }
}
