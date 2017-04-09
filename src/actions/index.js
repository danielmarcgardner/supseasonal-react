import axios from 'axios';
import * as CONST from '../constants/constants';

function fetchMonth(date){
  const url = `http://supseasonal.herokuapp.com/api/months${date}`;
  return axios.get(url).then(response => response.data);
}

const monthlyIngredients = (date) => {
  return {
    type: CONST.MONTH_INGREDIENTS,
    payload: fetchMonth(date)
  }
}

const fetchMonthRecipes(date) {
  const url = `http://supseasonal.herokuapp.com/api/months/${date}/recipes`;
  return axios.get(url).then(response => response.data);
}

export const monthRecipes = date => {
  return {
    type: CONST.MONTH_RECIPES,
    payload: fetchMonthRecipes(date)
  }
}
