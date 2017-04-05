import React , { Component } from 'react';
import { Table } from 'react-materialize';

class IngredientAvail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: ''
    }
  }

  render() {
    return (
      <Table>
        <h3>{ingredient} Availability</h3>
        <thead>
          <tr>
            <th data-field="id">Month</th>
            <th data-field="name">Available</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>January</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>February</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>March</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>April</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>May</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>June</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>July</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>August</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>September</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>October</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>November</td>
            <td>{availStatus}</td>
          </tr>
          <tr>
            <td>December</td>
            <td>{availStatus}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}


export default IngredientAvail;
