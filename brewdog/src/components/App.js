import React, { Component } from 'react';
import '../App.css';
import BeerDeets from './BeerDeets';
import Axios from 'axios';

class App extends Component {
   constructor(){
    super();
    this.state = {
      beers: null,
      result: null
    };
  }

  componentDidMount(){
    this.getBeers();
  }

  getBeers(){
    Axios.get('http://www.localhost:8080/')
      .then((response) => {
        this.setState(() => {
          return { beers: response }
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  renderBeers(){
  console.log('beers to be below');
  console.log(this.state.beers);
    if (this.state.beers){
      return this.state.beers.data.map((beer, index) => {
        return <BeerDeets key={index} beer={beer}/>
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h2>My beer recipes</h2>
        {this.renderBeers()}
      </div>
    );
  }
}

export default App;
