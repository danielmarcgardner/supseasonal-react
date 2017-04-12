import React , { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {uppercaseFirstLetter} from '../../actions/index';
import { monthlyIngredients } from '../../actions/index';
import { bindActionCreators } from 'redux';
import './availability.css';
import { Link } from 'react-router-dom';

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
  let end = ingredients.length % 5 + 1
  let newStart = ingredients.length-end
  for (var i = 0; i < ingredients.length; i++) {
    if ((i+1) % 5 === 0 && i < ingredients.length - end) {
    let foodRow =
      <Grid.Row columns={5} key={i} className="tableRow">
        <Grid.Column className="foodAvailable">
          {<Link to={`/ingredient/${ingredients[i].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[i].food_name)}</Link>}
        </Grid.Column>
        <Grid.Column className="foodAvailable">
          {<Link to={`/ingredient/${ingredients[i+1].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[i+1].food_name)}</Link>}
        </Grid.Column>
        <Grid.Column className="foodAvailable">
          {<Link to={`/ingredient/${ingredients[i+2].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[i+2].food_name)}</Link>}
        </Grid.Column>
        <Grid.Column className="foodAvailable">
          {<Link to={`/ingredient/${ingredients[i+3].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[i+3].food_name)}</Link>}
        </Grid.Column>
        <Grid.Column className="foodAvailable">
          {<Link to={`/ingredient/${ingredients[i+4].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[i+4].food_name)}</Link>}
        </Grid.Column>
      </Grid.Row>
      foodGrid.push(foodRow)
    }
  }
  for (var x = newStart; x < ingredients.length; x++) {
    if (ingredients[x+3] !== undefined ) {
      let lastRow =
        <Grid.Row columns={5} key={x}>
          <Grid.Column  className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x].food_name)}</Link>}
          </Grid.Column>
          <Grid.Column className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x+1].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x+1].food_name)}</Link>}
          </Grid.Column>
          <Grid.Column className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x+2].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x+2].food_name)}</Link>}
          </Grid.Column>
          <Grid.Column className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x+3].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x+3].food_name)}</Link>}
          </Grid.Column>
        </Grid.Row>
      foodGrid.push(lastRow)
      return foodGrid
    }
    else if (ingredients[x+2] !== undefined) {
      let lastRow =
        <Grid.Row columns={5} key={x}>
          <Grid.Column className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x].food_name)}</Link>}
          </Grid.Column>
          <Grid.Column className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x+1].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x+1].food_name)}</Link>}
          </Grid.Column>
          <Grid.Column className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x+2].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x+2].food_name)}</Link>}
          </Grid.Column>
        </Grid.Row>
      foodGrid.push(lastRow)
      return foodGrid
    }
    else if (ingredients[x+1] !== undefined) {
      let lastRow =
        <Grid.Row columns={5} key={x}>
          <Grid.Column  className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x].food_name)}</Link>}
          </Grid.Column>
          <Grid.Column className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x+1].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x+1].food_name)}</Link>}
          </Grid.Column>
        </Grid.Row>
      foodGrid.push(lastRow)
      return foodGrid
    }
    else if (ingredients[x] !== undefined) {
      let lastRow =
        <Grid.Row columns={5} key={x}>
          <Grid.Column className="foodAvailableLast">
            {<Link to={`/ingredient/${ingredients[x].id}`} className="seasonalItem">{uppercaseFirstLetter(ingredients[x].food_name)}</Link>}
          </Grid.Column>
        </Grid.Row>
      foodGrid.push(lastRow)
      return foodGrid;
    }
  }
  return foodGrid;
}


class SeasonalBox extends Component {
  componentWillMount(){
    this.props.monthlyIngredients(this.props.params.month)
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
