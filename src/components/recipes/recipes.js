import React , { Component } from 'react';
import NavBar from '../navbar';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import RecipeSideList from './recipe_side_list';
import RecipeInfobox from './recipe_infobox';
import {monthNamer} from '../../actions/index';

const mapStateToProps = (state, ownProps) => {
  return {
    date: state.date
  }
}

class Recipes extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Seasonal Recipes for {monthNamer(this.props.match.params.month)}</h1>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column className='sideList'>
              <RecipeSideList params={this.props.match.params}/>
            </Grid.Column>
            <Grid.Column className="infoBox">
              <RecipeInfobox params={this.props.match.params}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Recipes);
