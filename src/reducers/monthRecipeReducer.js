import * as CONST from '../constants/constants';

export const recipe = (state = {}, action) => {
  switch(action.type) {
    case CONST.MONTH_RECIPES:
    // {...state, }
      return action.payload;
    default:
      return state;
  }
}
