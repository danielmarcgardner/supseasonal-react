import React , { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { setIngredient, allIngredients } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    ingredients: state.ingredients,
    ingredient: state.ingredient
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setIngredient, allIngredients }, dispatch)
}

const dropDownMaker = (ingredients) => {
  return ingredients.map((ing) => {
    let obj = {}
      obj.value = ing.id;
      obj.text = ing.food_name;
  })
}



const IngredientSearch = () => (
  <Button color='orange' content="Search By Ingredient"/>
)

class IngredientsDropdown extends Component {
  componentWillMount(){
    this.props.allIngredients()
  }
  render() {
    if (!this.props.ingredients) {
      return <div>LOADING</div>
    }
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.setIngredient(event.target.value)
      }}>
        <div>
          <Dropdown placeholder='Select An Ingredient' fluid selection options={dropDownMaker(this.props.ingredients)} />
        </div>
        <div>
          <IngredientSearch type="submit"><Link to={`/${this.props.ingredient}`}>Search By Ingredients</Link></IngredientSearch>
        </div>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsDropdown)
