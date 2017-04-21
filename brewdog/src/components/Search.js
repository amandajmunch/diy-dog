import React, { Component } from 'react';
import Axios from 'axios';
import Result from './Result';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      beers: {},
      search: ""
    }
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  };

// on clicking submit, send the axios call to the API
  handleSubmit(e) {
    console.log(this.state.beers);
    e.preventDefault();
    Axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.state.search}`)
    .then(response =>{
      console.log('response below');
      console.log(response.data[0]);
      // console.log(response.data.Title);
      this.setState({
        beer: response.data[0]
      });
    })
    .catch(function (error) {
      console.log(error);
    })
}


  //  beerData(beerDatas){
  //   const beer = {};

  //   beer.name = beerDatas.name;
  //   beer.image_url = beerDatas.image_url;
  //   beer.abv = beerDatas.abv;
  //   beer.ibu = beerDatas.ibu;
  //   beer.description = beerDatas.description;
  //   beer.tagline = beerDatas.tagline;

  //   return beer;
  // }

// upon clicking save, send this beer to the server
  saveBeer(){
    Axios.post("http://localhost:8080/api", this.state.beer)
      .then(response => this.props.history.push("/"))
      .catch(response => alert("Couldn't save beer"));
  }

// if the state has a name in beer, return the values
  showBeer(){
    if(this.state.beers.name){
      return (
        <Result beer={this.state.beers} saveBeer={this.saveBeer.bind(this)} />
      )
    }
  }


  render() {
     // console.log(this.state.beer);
     // console.log(this.state.search);
    return(
    <div className="search">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
           Name:
          <input type="text"
           value={this.state.search}
           onChange={this.handleChange.bind(this)}/>
        </label>
        <input type="submit" value="Submit"/>
        {this.showBeer()}
      </form>

    </div>
    );
  }
}

export default Search;
