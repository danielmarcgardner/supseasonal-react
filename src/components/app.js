import React, { Component } from 'react';
import IndexPage from './index'
import NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <IndexPage /> */}
      </div>
    );
  }
}
