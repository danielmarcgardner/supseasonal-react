import React, { Component } from 'react';
import IndexPage from './home/home'
import IngredientAvail from './ingredients/ingredient_availability_table'

export default class App extends Component {
  render() {
    return (
        <IngredientAvail />
    );
  }
}
