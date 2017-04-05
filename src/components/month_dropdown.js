import React , { Component } from 'react';
import { Dropdown, NavItem, Button } from 'react-materialize';
import MonthSearch from './month_search_button';

class MonthDropdown extends Component {
  // let navitems = month.map((months) => <NavItem month={months} />)
  render() {
    return (
    <div>
      <div>
      <Dropdown trigger={
      <Button>Click Here to Select A Month!</Button>
      }>
        <NavItem>January</NavItem>
        <NavItem>February</NavItem>
        <NavItem>March</NavItem>
        <NavItem>April</NavItem>
        <NavItem>May</NavItem>
        <NavItem>June</NavItem>
        <NavItem>July</NavItem>
        <NavItem>August</NavItem>
        <NavItem>September</NavItem>
        <NavItem>October</NavItem>
        <NavItem>November</NavItem>
        <NavItem>December</NavItem>
      </Dropdown>
    </div>
    <div>
      <MonthSearch />
    </div>
  </div>
    )
  }
}

export default MonthDropdown
