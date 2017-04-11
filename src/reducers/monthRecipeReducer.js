import * as CONST from '../constants/constants';

export const recipe = (state = [], action) => {
  switch(action.type) {
    case CONST.MONTH_RECIPES_FULFILLED:
      return action.payload;
    default:
      return state;
  }
}

export const fillInfoBox = (state = {}, action) => {
  switch (action.type) {
    case CONST.SET_INFOBOX:
      return action.recipeInfo;
    default:
      return state;
  }
}
