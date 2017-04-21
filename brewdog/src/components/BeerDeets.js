import React, { Component } from 'react';
import Axios from 'axios';
import Result from './Result';

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

  viewBeer(beerID, e){
    Axios.get(`http://www.localhost:8080/api${this.props.location.pathname}`)
      .then((response) => {
        this.setState(() => {
          return { beers: response.data }
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  };

// http://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
  // showBeer(){
  //   Object.entries(this.state.beers).map(([key,value])=>{
  //   console.log(key + " : " + value);
  //   })
  // };

 showBeer(){
    if(this.state.beers){
      return (
        <Result beer={this.state.beers} deleteBeer={this.deleteBeer.bind(this)} />
      )
    }
  }

  render(){
    console.log("below are propsss");
    console.log(this.state.beers);
    // console.log(this.state.beers.entries(this.state.beers));
    // console.log(props);
    return(

    <div>
       <h1>test</h1>
        {this.showBeer.bind(this)}
    </div>
    );
  }
}


export default BeerDeets;


