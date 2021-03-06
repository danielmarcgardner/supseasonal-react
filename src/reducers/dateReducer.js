import * as CONST from '../constants/constants';

export const date = (state = 'jan', action) => {
  switch (action.type) {
    case CONST.DATE_CHANGE:
      return action.date
    case CONST.MONTH_INGREDIENTS:
      return action.payload
  default:
    return state
  }
}
