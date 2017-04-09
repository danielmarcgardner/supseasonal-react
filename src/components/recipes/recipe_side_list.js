import React , { Component } from 'react';
// import { Table, Dropdown, NavItem, Button } from 'react-materialize';
import { monthRecipes } from '../../actions/index.js';

const _renderDropdown = recipe => {
  recipe.map(item => {
    <tr>
      <td
        onClick={(event) => {
          event.preventDefault();
          // function()
        }}
        >
          {item.title}
        {/* onclick render recipe info */}
      </td>
    </tr>
  })
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipe,
    date: state.date
  }
}

// dispatch?

export class RecipeSideList extends Component {
  componentWillMount() {
    this.props.monthRecipes(this.props.date)
  }

  render() {
    return (
      <Table>
        <tbody>
          {_renderDropdown(this.props.recipe)}
        </tbody>

      </Table>
    );
  }
}

export default connect(mapStateToProps)(RecipeSideList)();
