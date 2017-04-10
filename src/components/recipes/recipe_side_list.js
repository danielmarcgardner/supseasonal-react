import React , { Component } from 'react';
import { monthRecipes, setInfoBox } from '../../actions/index.js';
import {bindActionCreators} from 'redux';
import {Grid, Row} from 'semantic-ui-react';

const recipeTable = recipe => {
  recipe.map(item => {
    <Grid>
      <Grid.Row
        onClick={(event) => {
          event.preventDefault();
          // new function that passes recipe index array
          // this.props.newFunction(item)
          this.props.setInfoBox(item);
        }}
        >
          {item.title}
        {/* onclick render recipe info */}
      </Grid.Row>
    </Grid>
  })
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipe,
    date: state.date
  };

};

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({monthRecipes}, dispatch);
};

export class RecipeSideList extends Component {
  componentWillMount() {
    this.props.monthRecipes(this.props.date)
  }

  render() {
    return (
      <Table>
        <Table.Body>
          {recipeTable(this.props.recipe)}
        </Table.Body>

      </Table>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSideList);
