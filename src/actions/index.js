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

export const setMonth = (date) => {
  return{
    type: CONST.DATE_CHANGE,
    date: date
  }
}

const fetchIngredientAvailability = (ingredientID) => {
  const url = `http://supseasonal.herokuapp.com/api/foods/${ingredientID}`;
  return axios.get(url).then(response => response.data)
}

export const ingredientAvailability = (ingredientID) => {
  return{
    type: CONST.SINGLE_INGREDIENT,
    payload: fetchIngredientAvailability(ingredientID)
  }
}

export const uppercaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase()+string.slice(1)
}
