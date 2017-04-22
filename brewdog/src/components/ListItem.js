import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  // have just title and delete button available per recipe
  console.log(props.beer)
  return(
    <div className="listItem">
      <p><Link to={'/beers/'+ props.beer.id}>{props.beer.name}</Link></p>
      <button className="button" onClick={(e) => props.deleteBeer(props.beer)}>
         Delete
      </button>
    </div>
   )
}

export default ListItem;
