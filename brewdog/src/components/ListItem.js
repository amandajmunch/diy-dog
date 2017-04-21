import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  return  <div className="beer">
            <p><Link to={'/'+ props.beer.id}>{props.beer.name}</Link></p>
            <div
              className="button delete"
              onClick={(e) => props.deleteBeer(props.beer)}
            >
            Delete
            </div>

          </div>
}

export default ListItem;
