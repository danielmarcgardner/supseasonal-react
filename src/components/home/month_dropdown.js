import React , { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import SearchByMonthButton from './month_search_button';
import months from './data/months';

const DropdownMonthSelection = () => {(
  <Dropdown placeholder='Select A Month' fluid selection options={months} />
)}

class MonthDropdown extends Component {
  render() {
    return (
    <div>
      <div>
        <DropdownMonthSelection />
      </div>
    <div>
      <SearchByMonthButton />
    </div>
  </div>
    )
  }
}

export default MonthDropdown
