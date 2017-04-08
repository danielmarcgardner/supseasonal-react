
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';


import App from './components/app';
import reducers from './reducers';
import IngredientAvail from './components/ingredient_availability_box.js';
import RecipeInfobox from './components/recipe_infobox.js';
import RecipeSideList from './components/recipe_side_list.js';
import MonthDropdown from './components/month_dropdown';
import IngredientsDropdown from './components/ingredients_dropdown'



// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
<App />
// {/* //   <div>
// //     <MonthDropdown />
// //     <IngredientsDropdown />
// //   </div> */}
//
//
//     {/* <App /> */}
//
//     {/* probably have to rename enteredIngredient to specified name on ingredients_dropdown*/}
//     // <IngredientAvail ingredient={this.state.enteredIngredient}/>
//     {/* <RecipeInfobox /> */}
//     {/* <RecipeSideList /> */}

  // </Provider>
  , document.querySelector('.app'));
