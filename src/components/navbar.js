import React , { Component } from 'react';
import { Menu } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return (
      <Menu size='massive' color='orange'>
        <Menu.Item  className='left' header>Sup Seasonal</Menu.Item>
        <Menu.Item className='right medium'>Home</Menu.Item>
        {/* ADD THIS ABOVE ONCE ROUTER IS WORKING<Link to={'/'}>Home</Link> */}
      </Menu>
    )
  }
}

export default NavBar
