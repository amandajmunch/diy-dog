import React from 'react';

const Image = (props) => {
  // have just title and delete button available per recipe
  console.log("an image:", props.image);
  console.log("props", props);
  return(
    <div className="Image">
      <br/>

      <img src={props.image.name} alt=""/>
       <br/>
       <p>Beer: {props.image.content}</p>
      <button className="button" onClick={(e) => props.deleteImage(props.image)}>
         Delete
      </button>
      <br/>
      <br/>
    </div>
   )
}

export default Image;
