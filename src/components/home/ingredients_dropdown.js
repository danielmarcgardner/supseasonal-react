import React , { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

const mapStateToProps

const DropdownIngredientsSelection = () => {(
  <Dropdown placeholder='Select A Month' fluid selection options={friendOptions} />
)}


class IngredientsDropdown extends Component {
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
