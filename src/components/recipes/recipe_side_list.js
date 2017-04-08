import React , { Component } from 'react';
import { Table, Dropdown, NavItem, Button } from 'react-materialize';

class RecipeSideList extends Component {
  render() {
    return (
      <Table>
        <div>
          <Dropdown trigger={
              <Button>Easter Crudites Basket with Spinach Dip</Button>
            }>
            <NavItem>Servings: 12 </NavItem>
            <NavItem>Ready: 140 Minutes</NavItem>
            <NavItem divider />
          </Dropdown>
        </div>
        <div>
          <Dropdown trigger={
              <Button>Three-Green Salad</Button>
            }>
            <NavItem>Servings: 10 </NavItem>
            <NavItem>Ready: 20 Minutes</NavItem>
            <NavItem divider />
          </Dropdown>
        </div>
        <div>
          <Dropdown trigger={
              <Button>Spring Superfoods Salad</Button>
            }>
            <NavItem>Servings: 4 </NavItem>
            <NavItem>Ready: 15 Minutes</NavItem>
            <NavItem divider />
          </Dropdown>
        </div>
        <div>
          <Dropdown trigger={
              <Button>Killer Garden Salad</Button>
            }>
            <NavItem>Servings: 1 </NavItem>
            <NavItem>Ready: 10 Minutes</NavItem>
            <NavItem divider />
          </Dropdown>
        </div>

      </Table>
    );
  }
}

export default RecipeSideList;
