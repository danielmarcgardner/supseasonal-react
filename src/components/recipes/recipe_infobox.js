import React , { Component } from 'react';
import { Grid, Row, Column, Header, Body } from 'semantic-ui-react';
import { monthRecipes, recipeInfobox } from '../../actions/index';
import { connect } from 'react-redux';

const ingredientLister = (recipe) => {
  //map thru extended ingredients
  return recipe.extendedIngredients.map(item => {
    <div>
        <Grid.Row columns={2}>
            <Grid.Column>
              {item.name}
            </Grid.Column>
            <Grid.Column>
              {item.amount}
            </Grid.Column>
        </Grid.Row>
    </div>
  });
};

const mapStateToProps = (state, ownProps) => {
  return {
    date: state.date,
    recipe: state.recipe,
    recipeInfo: state.recipeInfo
  }
}

class RecipeInfobox extends Component {
  // componentWillMount() {
  //   this.props.monthRecipes(this.props.date);
  // }

  render() {
    return (
      <Grid>
        <h5>{this.props.recipeInfo.title}</h5>
        <h5>Servings: {this.props.recipeInfo.servings}</h5>
        <h5>Ready: {this.props.recipeInfo.readyInMinutes} Minutes </h5>
        {/* might have to delete img */}
        <img src={this.props.recipeInfo.image} />
        {/* might add instructions */}
        {/* <Grid.Header> */}
          <Grid.Row columns={2}>
            <Grid.Column >Ingredient</Grid.Column>
            <Grid.Column >Amount</Grid.Column>
          </Grid.Row>
        {/* </Grid.Header> */}

        {/* <Grid.Body> */}
          {/* <Grid.Row> */}
            <Grid>
              {ingredientLister(this.props.recipeInfo.extendedIngredients)}
            </Grid>
          {/* </Grid.Row> */}
        {/* </Grid.Body> */}

      </Grid>

      /* <Row>
        Instructions
      </Row> */

    );
  }
}

export default connect(mapStateToProps)(RecipeInfobox);
