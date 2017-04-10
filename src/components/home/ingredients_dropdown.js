import React , { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { setIngredient, allIngredients, uppercaseFirstLetter } from '../../actions/index';
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
      obj.text = uppercaseFirstLetter(ing.food_name);
      return obj
  })
}


class IngredientsDropdown extends Component {
  componentWillMount(){
    this.props.allIngredients()
  }
  render() {
    if (this.props.ingredients.length === 0) {
      return <div>LOADING</div>
    }
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        // this.props.setIngredient(this.prop.value)
      }}>
            <div className="dropdownIng">
              <Dropdown placeholder='Select An Ingredient' fluid selection options={dropDownMaker(this.props.ingredients)}
                value={this.props.value}
                onChange={(event, result) => {
                  const {value} = result
                  this.props.setIngredient(value)
                }
                } />
            </div>
          <div className="SearchButton">
            <Button color='orange'><Link to={`/ingredient/${this.props.ingredient}`}>Search By Ingredients</Link></Button>

          </div>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsDropdown)
