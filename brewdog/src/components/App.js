import React, { Component } from 'react';
import '../App.css';
import List from './List';
import Logo from '../logo2.png';

class App extends Component {
    constructor(){
    super();
    this.state = {
      beers: null,
      result: null
    };
  }

  render() {
    return (
      <div className="app">

        <List />
      </div>
    );
  }
}

export default App;
