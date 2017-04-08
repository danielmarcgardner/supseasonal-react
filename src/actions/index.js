import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchMonth = (date) => {
  const url = `http://supseasonal.herokuapp.com/api/months/${date}`
  return axios.get(url).then(response => response.data);
}

export const monthlyIngredients = (date) => {
  return {
    type:CONST.MONTH_INGREDIENTS,
    payload: fetchMonth(date)
  }
}

const fetchAllIngredeints = ()=> {
  const url = `http://supseasonal.herokuapp.com/api/foods`;
  return axios.get(url).then(response => response.data)
}

export const allIngredients = () => {
  return {
    type: CONST.ALL_INGREDIENTS,
    payload: fetchAllIngredeints()
  }
}

export const setIngredient = (ing) => {
  return {
    type: CONST.SET_INGREDIENT,
    ingredient: ing
  }
}
