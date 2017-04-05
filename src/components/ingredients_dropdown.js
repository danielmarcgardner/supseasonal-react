import React , { Component } from 'react';
import { Dropdown, NavItem, Button } from 'react-materialize'

const Navitem = ({food_name}) => {
  return (
    <NavItem>
      {food_name}
    </NavItem>
    )
}

const IngredientSearch = () => {
  return (
    <Button>Click To Search By Food</Button>
  )
}

class IngredientsDropdown extends Component {
  // let navitems = food_name.map((foodnames) => <NavItem food_name={foodnames} />)
  componentWillMount() {
          $(document).ready(() => {
              $('.collapsible').collapsible();
          });
      }

  render() {
    return (
      <div>
        <div>
        <Dropdown  className="collapsible" trigger={
        <Button>Select A Food!</Button>
        }>
          <NavItem>Food 1</NavItem>
          <NavItem>Food 2</NavItem>
          <NavItem>Food 3</NavItem>
        </Dropdown>
        </div>
        <div>
          <IngredientSearch />
        </div>
      </div>
    )
  }
}

export default IngredientsDropdown
