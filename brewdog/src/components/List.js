import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem';
import Axios from 'axios';

class List extends Component {
   constructor(){
    super();
    this.state = {
      beers: null,
      result: null
    };
  }
// rendering all the beers on page load
  componentDidMount(){
    this.getBeers();
  }

  getBeers(){
    Axios.get('http://www.localhost:8080/api/beers')
      .then((response) => {
        this.setState(() => {
          return { beers: response }
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
// deleting an individual beer
 deleteBeer(beer) {
    if(beer){
      Axios.delete(`http://www.localhost:8080/api/beers/${beer.id}`)
        .then((response) => {
          this.setState((prevState) => {
            return {beers: beer}
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }


// rendering them in key value form
  renderBeers(){
  // console.log('beers to be below');
  // console.log(this.state.beers);
    if (this.state.beers){
      return this.state.beers.data.map((beer, index) => {
        return <ListItem key={index} beer={beer} deleteBeer={this.deleteBeer.bind(this)}/>
      })
    }
  }

  render() {
    return (
      <div className="list">
        {this.renderBeers()}
      {/*BeerList Component*/}
    {/* pass iside of beerlist renderBeers viewBeers*/}
      </div>
    );
  }
}

export default List;
