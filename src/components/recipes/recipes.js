import React , { Component } from 'react';
import SeasonalBox from './seasonal_box';
import NavBar from '../navbar';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return (
    //state
  )
}

class Recipes extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* this.props.date? */}
        <h2>Seasonal Recipes for {this.props.date}</h2>
        <span><RecipeSideList /></span>
        <span><RecipeInfobox /></span>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Recipes);
