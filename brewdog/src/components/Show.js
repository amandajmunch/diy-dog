import React from 'react';

const ShowBeer = (props)=> {
  console.log("below are props");
  console.log(props);
   if(props.beer){
    return(
  <div>
      {props.beer.name}
        {props.beer.tagline}
       {props.beer.abv}
        {props.beer.ibu}
        <img src={props.beer.image_url}/>
           <p>{props.beer.description}</p>
         {props.beer.food_pairing}
         {props.beer.brewers_tips}

  </div>
  );
  }
}


export default ShowBeer;



