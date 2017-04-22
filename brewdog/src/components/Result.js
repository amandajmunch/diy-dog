import React from 'react';

const Result = (props) => {
  // result render after search
  if (props.beer){
    return(
      <div className="result">
          <img src={props.beer.image_url} alt="a movie poster" />
          <div className="details">
            <p>Title: {props.beer.name}</p>
            <p>Year: {props.beer.abv}</p>
            <p>Rated: {props.beer.ibu}</p>
            <p>Runtime: {props.beer.tagline}</p>
            <p>{props.beer.description}</p>
            <div>Primary Malt: {props.beer.ingredients.malt[0].name}</div>
            <div>Primary Hop: {props.beer.ingredients.hops[0].name}</div>
            <div>Food Pairing: {props.beer.food_pairing}</div>
          </div>

        <div className="save">
          <button className="button" onClick={(e) => props.saveBeer()}>
            Save
          </button>
        </div>
      </div>
    )
  } else {
    return <div><p>Search for a beer using the form above!</p></div>
  }
}

export default Result;
