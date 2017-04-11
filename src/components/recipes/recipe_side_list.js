import React , { Component } from 'react';
import { monthRecipes, setInfoBox } from '../../actions/index.js';
import {bindActionCreators} from 'redux';
import {Table, Grid, Row} from 'semantic-ui-react';
import { connect } from 'react-redux';
import './recipe_side_list.css';

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipe,
    date: state.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({monthRecipes, setInfoBox}, dispatch);
};

const recipeTable = (recipe, props) => {
  return recipe.map(item => {
    return (
        <Grid.Row columns={1}
          onClick={(event) => {
            event.preventDefault();
            props.setInfoBox(item);
          }}
          >
            <Grid.Column>
            <div>{item.title}</div>
          </Grid.Column>
        </Grid.Row>
      );
  })
}

export class RecipeSideList extends Component {
  componentWillMount() {
    this.props.monthRecipes(this.props.date)
  }

  render() {
    if (this.props.recipe.length === 0) {
      return <div>LOADING</div>
    }
    return (
      <div className="sidelist">
      <Grid divided='vertically'>
        {recipeTable(this.props.recipe, this.props)}
      </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSideList);
