import starSVG from "../images/star.svg";
import starGrey from "../images/grey Star.svg"
import React from "react";



function RendererStars({rating}) {
    const stars = [];
    const maxRating = Math.max(...rating);
    

    for (let i = 0; i < maxRating; i++) {
       stars.push(<img src={starSVG} alt="star" key={i} />)
    } 
    const greyStars = [];
    for( let i = maxRating; i < 5 ; i++ ){
        greyStars.push(<img src={starGrey} alt="star" key={i}/>)
    }

    return [...stars, ...greyStars];
  }
  export  {RendererStars};