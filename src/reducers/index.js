import { combineReducers } from 'redux';
import recipe from './monthRecipeReducer';

const combineApp = combineReducers({
  date,
  recipe
})

export default combineApp;
