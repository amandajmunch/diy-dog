import React, { Component } from 'react';
import Axios from 'axios';

class BeerDeets extends Component {
   constructor(props){
    super(props);
    this.state = {
      beers: {}
    };
  }
  // having beer with that ID render on page load
componentDidMount(){
    this.viewBeer();
  }

// show individual beer from server
  viewBeer(beerID, e){
    Axios.get(`http://www.localhost:8080/api${this.props.location.pathname}`)
      .then((response) => {
        this.setState(() => {
          return { beers: response.data };
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  render(){
    console.log("below are propsss");
    console.log(this.props);
    console.log(this.state.beers);
    // console.log(this.state.beers.entries(this.state.beers));
    // console.log(props);
    return(
    <div className="BeerDeets">
           <img src={this.state.beers.image_url} alt="a movie poster" />

          <div className="details">
            <p>Title: {this.state.beers.name}</p>
            <p>Year: {this.state.beers.abv}</p>
            <p>Rated: {this.state.beers.ibu}</p>
            <p>Runtime: {this.state.beers.tagline}</p>
            <p>Description:{this.state.beers.description}</p>
            <div>Primary Malt: {this.state.beers.malt}</div>
            <div>Primary Hop: {this.state.beers.hops}</div>
            <div>Food Pairing: {this.state.beers.food_pairing}</div>
          </div>
          <br/>
          <button className="button delete"onClick={(e) => this.deleteBeer()}>
            Delete
          </button>
    </div>
    );
  }
}


export default BeerDeets;


