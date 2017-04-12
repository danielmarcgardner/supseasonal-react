import React , { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'
import './navfoot.css'

class Footer extends Component  {
  render() {
    return (
      <div className="footer">
        <Header as='h2' attached='top' color='orange' >
          <div className="footerText">Sup Seasonal</div>
        </Header>
        <Segment attached color='orange'>
          <div className="footerAddText">Developed by Sasha Berkowitz and Daniel Gardner for our Galvanize Q3 Front End React Project. Based on the supseasonal API</div>
        </Segment>
      </div>
    )
  }
}

export default Footer
