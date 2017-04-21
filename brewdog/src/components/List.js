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

  componentDidMount(){
    this.getBeers();
  }

  getBeers(){
    Axios.get('http://www.localhost:8080/api')
      .then((response) => {
        this.setState(() => {
          return { beers: response }
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  deleteBeer(beerID, e){
    e.preventDefault();
    Axios.delete(`http://localhost:8080/api/${beerID}`)
      .then(response => {
        if(response.data.status === "success"){
          const beerToRemove = this.state.beers.find(beer => beer.id === beerID);
          this.setState((prevState) => {
            const beers = prevState.beers;
            beers.splice(beers.indexOf(beerID), 1);
            return {beers: beers}
          })
        }
      })
      .catch(response => alert('Local Error Deleting'));
  }

  viewBeer(beerID, e){
    const beerToRemove = this.state.beers.find(beer => beer.id === beerID);
    Axios.get(`http://www.localhost:8080/api/${beerToRemove}`)
      .then((response) => {
        // this.setState(() => {
          return { beers: response }
        // })
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  renderBeers(){
  // console.log('beers to be below');
  // console.log(this.state.beers);
    if (this.state.beers){
      return this.state.beers.data.map((beer, index) => {
        return <ListItem key={index} beer={beer} viewBeer={this.viewBeer.bind(this)} deleteBeer={this.deleteBeer.bind(this)}/>
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
