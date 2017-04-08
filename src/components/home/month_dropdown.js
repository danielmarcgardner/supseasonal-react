import React , { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import months from './data/months';

const DropdownMonthSelection = () => {(
  <Dropdown placeholder='Select A Month' fluid selection options={months} />
)}

const SearchByMonthButton = () => (
  <Button color='orange' content='Search By Month' />
)

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
