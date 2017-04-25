import React from 'react';

const Image = (props) => {
  // have just title and delete button available per recipe
  console.log("an image:", props.image);
  console.log("props", props);
  return(
    <div className="Image">
      <br/>

      <img src={props.image.name} alt="" className="imageUpload" id="myImg" onClick={function(){
          var modal = document.getElementById('myModal');
          // var img = document.getElementById('myImg');
          var modalImg = document.getElementById("img01");
          modal.style.display = "block";
          modalImg.src = props.image.name;}}
      />

       <br/>
       <p>Beer: {props.image.content}</p>
      <button className="button" onClick={(e) => props.deleteImage(props.image)}>
         Delete
      </button>
      <div id="myModal" className="modal">

        // The Close Button
        <span className="close" onClick={function() {
          var modal = document.getElementById('myModal');
          modal.style.display = "none";
        }}>&times;</span>

        // Modal Content (The Image)
        <img className="modal-content" id="img01" alt=""/>
      </div>
      <br/>
      <br/>
    </div>
   )
}

export default Image;
