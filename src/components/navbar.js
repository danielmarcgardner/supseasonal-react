import React , { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class NavBar extends Component {
  render(){
    return (
      <Navbar brand='Sup Seasonal' left className="navbar deep-orange darken-1">
        <NavItem>Home</NavItem>
      </Navbar>
    )
  }
}

export default NavBar
