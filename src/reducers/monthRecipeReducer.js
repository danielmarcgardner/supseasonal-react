import * as CONST from '../constants/constants';

const recipe = (state = {}, action) => {
  switch(action.type) {
    case: MONTH_RECIPES:
      return action.payload;
    default:
      return state;
  }
}

export default recipe;
