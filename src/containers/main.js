import React, { Component } from 'react';
import Nav from '../components/nav.js';
import ItemRow from '../components/itemRow';
import { getGames } from '../actions/index'

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {person: []}
  }
  componentDidMount(){
    getGames();
  }

  gameList(){

  }
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