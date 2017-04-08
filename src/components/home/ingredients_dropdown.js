import React , { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { setIngredient } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients
    ingredient: state.ingredient
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setIngredient }, dispatch)
}

const dropDownMaker = ingredients => {
  ingredients.map((ing) => {
    {value: ing.id, text: ing.food_name}
  })
}

const DropdownIngredientsSelection = () => {(
  <Dropdown placeholder='Select A Month' fluid selection options={dropDownMaker(this.props.ingredients)} />
)}

const IngredientSearch = () => (
  <Button color='orange'/>
)

class IngredientsDropdown extends Component {
  render() {
    return (
      <form onSubmit= {(event) => {
        event.preventDefault()
        this.props.setIngredient(event.target.value)
      }}>
        <div>
          <DropdownIngredientsSelection />
        </div>
        <div>
          <IngredientSearch type="submit"><Link to={`/${this.props.ingredient}`}>Search By Ingredients</Link></IngredientSearch>
        </div>
      </form>
    )
  }
}

export default connect(mapStateToProps)(IngredientsDropdown)
