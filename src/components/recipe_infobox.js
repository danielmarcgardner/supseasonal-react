import React , { Component } from 'react';
import { Table, Row } from 'react-materialize';

class RecipeInfobox extends Component {
  render() {
    return (
      <Table>
        <h5>Title: Easter Crudites Basket with Spinach Dip </h5>
        <h5>Servings: 12 </h5>
        <h5>Ready: 140 Minutes </h5>

        <img src={"http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/4/8/3/WU1002H_Easter-Crudite-Basket-with-Spinach-Dip_s4x3.jpg.rend.hgtvcom.616.462.jpeg"} />

        <thead>
          <tr>
            <th data-field="id">Ingredient</th>
            <th data-field="name">Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Marty Juice</td>
            <td>Undisclosed</td>
          </tr>
        </tbody>

      </Table>

      /* <Row>
        Instructions
      </Row> */

    );
  }
}

export default RecipeInfobox;
