import React , { Component } from 'react';
import { monthRecipes, setInfoBox } from '../../actions/index.js';
import {bindActionCreators} from 'redux';
import {Table, Grid, Row} from 'semantic-ui-react';
import { connect } from 'react-redux';
import './recipe_side_list.css';

const recipeTable = recipe => {
  return recipe.map(item => {
    return (
        <Grid.Row columns={1}
          // onClick={(event) => {
          //   event.preventDefault();
          //   this.props.setInfoBox(item);
          // }}
          >
            <Grid.Column>
            <div>{item.title}</div>
            {/* onclick render recipe info */}
          </Grid.Column>
        </Grid.Row>
      );
  })
      // <Grid>
      //   <Grid.Row
      //     onClick={(event) => {
      //       event.preventDefault();
      //       this.props.setInfoBox(recipe);
      //     }}>
      //       {/* {console.log('talbe rec', recipe.title)} */}
      //       {recipe.title}
      //     </Grid.Row>
      // </Grid>
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipe,
    date: state.date
  };

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({monthRecipes, setInfoBox}, dispatch);
};

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

          {/* {this.props.recipe.map(item => {
            console.log(item.title);
            console.log('recipe talbe item', recipeTable(item));
            return recipeTable(item);
        })} */}
        {/* {console.log('above', this.props.recipe)}
        {console.log('func', recipeTable)}
        {console.log('here', recipeTable(this.props.recipe))} */}

        {recipeTable(this.props.recipe)}
      </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSideList);
