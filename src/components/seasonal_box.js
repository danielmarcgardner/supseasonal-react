import React , { Component } from 'react';
import { Row, Col } from 'react-materialize';

class SeasonalBox extends Component {
  render(){
    return (
      <Row>
        <Col s={8}>
          <div>
            Seasonal Ingredients Go Here!
          </div>
        </Col>
      </Row>
    )

  }
}

export default SeasonalBox
