import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  // have just title and delete button available per recipe
  console.log(props.beer)
  return(
    <div className="listItem">
      <h3>{props.beer.name}</h3>
      <Link to={'/beers/'+ props.beer.id}><img src={props.beer.image_url} alt=""/></Link>
      <br/>
      <button className="button" onClick={(e) => props.deleteBeer(props.beer)}>
         Delete
      </button>
    </div>
   )
}

export default ListItem;
