import React , { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import months from '../data/months';
// import { Link } from 'react-router-dom';
import { setMonth } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './home.css'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( {setMonth}, dispatch)
}

const mapStateToProps = (state) =>{
  return {
    date: state.date
  }
}

class MonthDropdown extends Component {
  render() {
    return (
    <form>
      <div className="dropdownMonth">
        <Dropdown placeholder='Select A Month' fluid selection options={months} onChange={(event, result) => {
          const { value } = result
          this.props.setMonth(value)
        }
        } />
      </div>
    <div className="SearchButton">
      {/* <Link to={`/${this.props.date}`}> Search By Month </Link> */}
      <Button color='orange'> Search By Month</Button>
    </div>
  </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthDropdown)
