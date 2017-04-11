import React, { Component } from 'react';

import IndexPage from './home/home';
import IngredientAvail from './ingredients/ingredient_availability_table';
import Availability from './availability/availability';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Recipes from './recipes/recipes';

// delete below once finished testing
import RecipeSideList from './recipes/recipe_side_list';
import RecipeInfobox from './recipes/recipe_infobox';

export default class App extends Component {
  render() {
    return (

        <Router>
          <div>
            <Route exact path="/" component={IndexPage} />
            <Route path="/month/:month" component={Availability} />
            {/* <Route path="/recipes/:recipes" component={IndexPage} /> */}
            <Route path="/ingredient/:ingredient" component={IngredientAvail} />
            <Route path="/recipes/:month" component={Recipes} />
          </div>
        </Router>
      //
      // <div>
      //     <RecipeSideList />
      //     <RecipeInfobox />
      // </div>

      );
  }
}
