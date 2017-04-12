import React , { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { setInfoBox } from '../../actions/index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    date: state.date,
    recipe: state.recipe,
    recipeInfo: state.recipeInfo
  }
}

const ingredientLister = (recipe) => {
  return recipe.map(item => {
    return (
      <Grid.Row columns={2} className="smallbox">
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
    if (!this.props.recipeInfo.id) {
      return (
        <div>Select a recipe to get started!</div>
      )
    }
    return (
      <div className="infoDiv">
      <Grid divided="vertically">
        <div className="recipeInfoTop">
        <Grid.Row columns={1}>
          <Grid.Column >Title: {this.props.recipeInfo.title}</Grid.Column>
          <Grid.Column >Servings: {this.props.recipeInfo.servings}</Grid.Column>
          <Grid.Column >Prep Time: {this.props.recipeInfo.readyInMinutes} Minutes </Grid.Column>
          <Grid.Column ><img src={this.props.recipeInfo.image} className="recipeImg" alt="item pic"/></Grid.Column>
        </Grid.Row>
      </div>
          <Grid.Row columns={2} className="headerbox">
            <Grid.Column className="header">Ingredient
              <Grid.Row columns={2}>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column className="header">Amount</Grid.Column>
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
