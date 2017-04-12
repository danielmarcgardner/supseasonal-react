import React , { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return (
      <Menu size='massive' color='orange'>
        <Menu.Item  className='left' header><div className="name">Sup Seasonal</div></Menu.Item>
        <Menu.Item className='right medium'><Link to={'/'}>Home</Link></Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
