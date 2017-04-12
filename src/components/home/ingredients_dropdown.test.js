import {IngredientsDropdown} from './ingredients_dropdown';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('IngredientsDropdown', () => {
  const props = {
    allIngredients: function() {
      console.log('This function was called');
    },
    ingredient: 1,
    ingredients: [
      {id: 1, food_name: "artichokes"},
      {id: 2, food_name: "arugula"},
      {id: 3, food_name: "asparagus"},
    ]
  };

  // it('renders', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<IngredientsDropdown {...props}/>, div);
  // });

  test('snapshots', () => {
    const component = shallow(
      <IngredientsDropdown {...props} />
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
