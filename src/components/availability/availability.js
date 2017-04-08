import React , { Component } from 'react';
import SeasonalBox from './seasonal_box';
import NavBar from '../navbar';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'


const mapStateToProps = (state, ownProps) => {
  return {
    date: state.date
  }
}

class Availability extends Component {
  render(){
    return (
      <div>
        <NavBar />
        <h2>Seasonal Ingredients for {this.props.date}</h2>
        <div><Link to='/recipes'>Get the recipes for {this.props.date}</Link></div>
        <SeasonalBox />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Availability)
