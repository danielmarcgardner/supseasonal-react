import React , { Component } from 'react';
import { Table } from 'react-materialize';
import { ingredientAvailability, uppercaseFirstLetter } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../navbar';


const mapStateToProps = (state) => {
  return {
    ingredient: state.ingredient,
    singleIngredient: state.singleIngredient
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ingredientAvailability }, dispatch)
}


class IngredientAvail extends Component {
  componentWillMount(){
    this.props.ingredientAvailability(this.props.ingredient)
  }
  render() {
    if (!this.props.singleIngredient[0]) {
      return (<div>LOADING</div>)
    }
      console.log('here', this.props.singleIngredient[0].jan)
    return (
      <div>
        <NavBar />
      <h3>{uppercaseFirstLetter(this.props.singleIngredient[0].food_name)} Availability</h3>
      <Table>
        <thead>
          <tr>
            <th data-field="id">Month</th>
            <th data-field="name">Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            <td>{this.props.singleIngredient[0].jan.toString()}</td>
          </tr>
          <tr>
            <td>February</td>
            <td>{this.props.singleIngredient[0].feb.toString()}</td>
          </tr>
          <tr>
            <td>March</td>
            <td>{this.props.singleIngredient[0].mar.toString()}</td>
          </tr>
          <tr>
            <td>April</td>
            <td>{this.props.singleIngredient[0].apr.toString()}</td>
          </tr>
          <tr>
            <td>May</td>
            <td>{this.props.singleIngredient[0].may.toString()}</td>
          </tr>
          <tr>
            <td>June</td>
            <td>{this.props.singleIngredient[0].jun.toString()}</td>
          </tr>
          <tr>
            <td>July</td>
            <td>{this.props.singleIngredient[0].jul.toString()}</td>
          </tr>
          <tr>
            <td>August</td>
            <td>{this.props.singleIngredient[0].aug.toString()}</td>
          </tr>
          <tr>
            <td>September</td>
            <td>{this.props.singleIngredient[0].sep.toString()}</td>
          </tr>
          <tr>
            <td>October</td>
            <td>{this.props.singleIngredient[0].oct.toString()}</td>
          </tr>
          <tr>
            <td>November</td>
            <td>{this.props.singleIngredient[0].nov.toString()}</td>
          </tr>
          <tr>
            <td>December</td>
            <td>{this.props.singleIngredient[0].dec.toString()}</td>
          </tr>
        </tbody>
      </Table>
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientAvail)
