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
      <div className="body">
        <h2>My beer recipes</h2>
        <List />
      </div>
    );
  }
}

export default App;
