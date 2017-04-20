import React from 'react';

const BeerDeets = (props)=> {
  if(props.beer){
    return(
  <div>
    <h3>Beer info:</h3>
        <div>Name: {props.beer.name}</div>
        <div>Tagline: {props.beer.tagline}</div>
        <div>ABV: {props.beer.abv}</div>
        <div>IBU: {props.beer.ibu}</div>
        <img src={props.beer.image_url}/>
        <p>{props.beer.description}</p>
        <button onClick={(e) => props.saveBeer(e)}>Save Beer</button>
    </div>
  );
  }
}


export default BeerDeets;
