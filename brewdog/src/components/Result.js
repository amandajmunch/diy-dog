import React from 'react';

const Result = (props) => {
  console.log("props of beers", props);
  // result render after search
  // if (props.beer){
    return(
      <div>
      <div className="result">
          <img src={props.beer.image_url} alt="a beer pic" className="beerImage"/>
          <div className="details">
            <p>Name: {props.beer.name}</p>
            <p>ABV: {props.beer.abv}</p>
            <p>IBU: {props.beer.ibu}</p>
            <p>Tagline: {props.beer.tagline}</p>
            <div>Primary Malt: {props.beer.ingredients.malt[0].name}</div>
            <div>Primary Hop: {props.beer.ingredients.hops[0].name}</div>
            <p>{props.beer.description}</p>
            <div>Food Pairing: {props.beer.food_pairing}</div>
            <br/>
            <div>Brewer's Tips: {props.beer.brewers_tips}</div>
          </div>
      </div>
        <div className="save">
          <button className="button" onClick={(e) => props.saveBeer()}>
            Save
          </button>
        </div>
      </div>
    )
  // } else {
  //   return <div><p>Search for a beer using the form above!</p></div>
  // }
}

export default Result;
