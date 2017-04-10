import React , { Component } from 'react';
// import SeasonalBox from './seasonal_box';
import NavBar from '../navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import RecipeSideList from './recipe_side_list';
import RecipeInfobox from './recipe_infobox';

const mapStateToProps = (state, ownProps) => {
  return (
    date: state.date
  )
}

class Recipes extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* this.props.date? */}
        <h1>Seasonal Recipes for {this.props.date}</h1>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <RecipeSideList />
            </Grid.Column>
            <Grid.Column>
              <RecipeInfobox />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            {/* < /> */}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Recipes);
