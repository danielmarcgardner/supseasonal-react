import * as CONST from '../constants/constants';

const recipe = (state = {}, action) => {
  switch(action.type) {
    case CONST.MONTH_RECIPES:
    // {...state, }
      return action.payload;
    default:
      return state;
  }
}

export default recipe;
