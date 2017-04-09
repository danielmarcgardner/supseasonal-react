import React , { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import months from '../data/months';
import { Link } from 'react-router-dom';
import { setMonth } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
    <form onSubmit={(event) => {
      event.preventDefault()
      this.props.setMonth(event.target.value)
    }}>
      <div>
        <Dropdown placeholder='Select A Month' fluid selection options={months} />
      </div>
    <div>
      {/* <Link to={`/${this.props.date}`}> Search By Month </Link> */}
      <Button color='orange'> Select A Month</Button>
    </div>
  </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthDropdown)
