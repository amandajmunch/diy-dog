import React from 'react';
import { Link } from 'react-router-dom';

const BeerDeets = (props)=> {
  console.log("below are propsss");
  console.log(props);
  if(props.beer){
    return(
  <div>
        <div><Link to='/show'>Search</Link> Name: {props.beer.name}</div>
        <div>Tagline: {props.beer.tagline}</div>
        <div>ABV: {props.beer.abv}</div>
        <div>IBU: {props.beer.ibu}</div>
        <img src={props.beer.image_url}/>
        <p>{props.beer.description}</p>
        <button onClick={props.deleteBeer ? (e) => props.deleteBeer(props.beer.id, e) : (e) => props.saveBeer(e)}>
           {props.beer.id ? "Delete" : "Save"}
         </button>
    </div>
    );
  }
}


export default BeerDeets;
