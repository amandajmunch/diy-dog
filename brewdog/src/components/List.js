import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Search from '../search.png';

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
// axios call to the server to grab all the beers
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
  //console.log('deleteBeer', beer)
    if(beer){
      Axios.delete(`http://www.localhost:8080/api/beers/${beer.id}`)
        .then((response) => {
          this.getBeers();
          })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

// rendering them in key value form
  renderBeers(){
    if(this.state.beers){
      return this.state.beers.data.map((beer, index) => {
        return <ListItem key={index} beer={beer} deleteBeer={this.deleteBeer.bind(this)}/>
      })
    }
  }

  render() {
    return (
      <div className="listy">
        <div className="searchIcon">
          <p><Link to='/search' className="searchIcon"><img src={Search} alt="search" className="searchIcon"/></Link></p>
          <br/>
        </div>
        <div className="list">
          {this.renderBeers()}
        </div>
      </div>
    );
  }
}

export default List;
