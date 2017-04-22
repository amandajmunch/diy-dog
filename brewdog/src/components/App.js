import React, { Component } from 'react';
import '../App.css';
import List from './List';


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
        <h2>My BrewDog Recipes</h2>
        <List />
      </div>
    );
  }
}

export default App;
