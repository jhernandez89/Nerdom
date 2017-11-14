import React, { Component } from 'react';
import Nav from '../components/nav.js';
import ItemRow from '../components/itemRow';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          hello!
        </div>
        <ItemRow />
      </div>
    )
  }
}

export default Main;