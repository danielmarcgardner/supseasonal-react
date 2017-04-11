import React, { Component } from 'react';
import IndexPage from './home/home'
import IngredientAvail from './ingredients/ingredient_availability_table'
import RecipeInfobox from './recipes/recipe_infobox';
import RecipeSideList from './recipes/recipe_side_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <span>
          <RecipeSideList />
        </span>
        <span>
          {/* <RecipeInfobox /> */}
        </span>
      </div>
      );
  }
}
