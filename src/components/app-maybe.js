import React, { Component } from 'react';
import IndexPage from './home/home';
import IngredientAvail from './ingredients/ingredient_availability_table';
import Availability from './availability/availability';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={IndexPage} />
            <Route path="/month/:month" component={Availability} />
            {/* <Route path="/recipes/:recipes" component={IndexPage} /> */}
            <Route path="/ingredient/:ingredient" component={IngredientAvail} />
          </div>
        </Router>
      );
  }
}
