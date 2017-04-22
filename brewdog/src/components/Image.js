import React from 'react';
import { Link } from 'react-router-dom';

const Image = (props) => {
  // have just title and delete button available per recipe
  console.log(props.beer)
  return(
    <div className="Image">
      <img src={props.image.name}/>
      <button className="button" onClick={(e) => props.deleteImage(props.image)}>
         Delete
      </button>
    </div>
   )
}

export default Image;
