import React , { Component } from 'react';
import { Grid, Row, Column, Header, Body } from 'semantic-ui-react';
import { monthRecipes, recipeInfobox, setInfoBox } from '../../actions/index';
import { connect } from 'react-redux';
// import { R}

const mapStateToProps = (state, ownProps) => {
  // console.log('mapStateToProps', state);
  return {
    date: state.date,
    recipe: state.recipe,
    recipeInfo: state.recipeInfo
  }
}

const ingredientLister = (recipe) => {
  //map thru extended ingredients
  return recipe.map(item => {
    return (
      <Grid.Row columns={2}>
        <Grid.Column>
          {item.name}
        </Grid.Column>
        <Grid.Column>
          {item.amount}
        </Grid.Column>
      </Grid.Row>
    )
  });
};

class RecipeInfobox extends Component {
  componentWillMount() {
    setInfoBox(this.props.recipeInfo);
  }

  render() {
    // console.log('render', this.props);
    if (!this.props.recipeInfo.id) {
      return (
        <div>Select a recipe to get started!</div>
      )
    }
    return (
      <div className="infoDiv">
      <Grid divided="vertically">
        <Grid.Row columns={1}>
          <Grid.Column >Title: {this.props.recipeInfo.title}</Grid.Column>
          <Grid.Column >Servings: {this.props.recipeInfo.servings}</Grid.Column>
          <Grid.Column >Prep Time: {this.props.recipeInfo.readyInMinutes} Minutes </Grid.Column>
          <Grid.Column ><img src={this.props.recipeInfo.image} /></Grid.Column>
        </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>Ingredient
              <Grid.Row columns={2}>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column >Amount</Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid divided="vertically">
              {ingredientLister(this.props.recipeInfo.extendedIngredients)}
            </Grid>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column> {this.props.recipeInfo.instructions}</Grid.Column>
          </Grid.Row>
      </Grid>
      </div>

    );
  }
}

export default connect(mapStateToProps)(RecipeInfobox);
