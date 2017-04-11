import React , { Component } from 'react';
import SeasonalBox from './seasonal_box';
import NavBar from '../navbar';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {monthNamer} from '../../actions/index';
import './availability.css'


const mapStateToProps = (state, ownProps) => {
  return {
    date: state.date
  }
}

class Availability extends Component {
  render(){
    if (!this.props.date) {
      return (<div>LOADING</div>)
    }
    return (
      <div>
        <NavBar />
        <h2 className="header">Seasonal Ingredients for {monthNamer(this.props.match.params.month)}</h2>
        <h4 className="linkTag"><Link className="navLink" to={`/recipes/${this.props.match.params.month}`}>Get the recipes for {monthNamer(this.props.match.params.month)}</Link></h4>
        <SeasonalBox params={this.props.match.params}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Availability)
