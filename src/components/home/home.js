import React, { Component } from 'react';
import MonthDropdown from './month_dropdown';
import IngredientsDropdown from './ingredients_dropdown';
import NavBar from '../navbar';

class IndexPage extends Component {
  render(){
    <div>
      <NavBar />
      <div><h1>Sup Seasonal</h1></div>
      <MonthDropdown />
      <IngredientsDropdown />
    </div>
  }

}

export default IndexPage
