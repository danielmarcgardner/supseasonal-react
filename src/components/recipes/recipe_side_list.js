import React , { Component } from 'react';
import { monthRecipes, setInfoBox } from '../../actions/index.js';
import {bindActionCreators} from 'redux';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './recipe.css';

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
            {item.title}
          </Grid.Column>
        </Grid.Row>
      );
  })
}

export class RecipeSideList extends Component {
  componentWillMount() {
    this.props.monthRecipes(this.props.params.month)
  }

  render() {
    if (this.props.recipe.length === 0) {
      return <div>LOADING</div>
    }
    return (
      <div className="sideDiv">
        <Grid divided='vertically'>
          {recipeTable(this.props.recipe
            , this.props)}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSideList);
