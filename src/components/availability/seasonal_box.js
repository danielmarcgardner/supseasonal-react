import React , { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {monthRecipes, uppercaseFirstLetter} from '../../actions/index';
import { monthlyIngredients } from '../../actions/index';
import { bindActionCreators } from 'redux';
import './availability.css'

const mapStateToProps = (state) => {
  return {
    monthlyIngredientsArr: state.monthlyIngredientsArr,
    date: state.date
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators( {monthlyIngredients}, dispatch)
}

const ingredientBoxMaker = (ingredients) => {
  ingredients.sort((a,b) => {
    if (a.food_name < b.food_name) return -1
    if (a.food_name > b.food_name) return 1
    return 0
  })
  let foodGrid = []
  let end = ingredients.length % 3 + 1
  let newStart = ingredients.length-end
  for (var i = 0; i < ingredients.length; i++) {
    if ((i+1) % 3 === 0 && i < ingredients.length - end) {
    let foodRow =
      <Grid.Row columns={3}>
        <Grid.Column className="foodAvailable">
          {uppercaseFirstLetter(ingredients[i].food_name)}
        </Grid.Column>
        <Grid.Column className="foodAvailable">
          {uppercaseFirstLetter(ingredients[i+1].food_name)}
        </Grid.Column>
        <Grid.Column className="foodAvailable">
          {uppercaseFirstLetter(ingredients[i+2].food_name)}
        </Grid.Column>
      </Grid.Row>
      foodGrid.push(foodRow)
    }
  }
  for (var x = newStart; x < ingredients.length -1; x++) {
    if ((x+1) === undefined) {
      let additional =
      <Grid.Row columns={3}>
        <Grid.Column className="foodAvailable">
          {uppercaseFirstLetter(ingredients[x].food_name)}
        </Grid.Column>
      </Grid.Row>
      foodGrid.push(additional)
    }
    else {
      let additional =
      <Grid.Row columns={3}>
        <Grid.Column className="foodAvailable">
          {uppercaseFirstLetter(ingredients[x].food_name)}
        </Grid.Column>
        <Grid.Column className="foodAvailable">
          {uppercaseFirstLetter(ingredients[x+1].food_name)}
        </Grid.Column>
      </Grid.Row>
      foodGrid.push(additional)
    }
  }
  return foodGrid
}

class SeasonalBox extends Component {
  componentWillMount(){
    this.props.monthlyIngredients(this.props.date)
  }
  render(){
    if (this.props.monthlyIngredientsArr.length === 0) {
      return (<div>LOADING</div>)
    }
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column>
          <div className="seasonal_box">
            <Grid divided='vertically'>
              {ingredientBoxMaker(this.props.monthlyIngredientsArr)}
            </Grid>
          </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeasonalBox)
