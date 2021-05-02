import React from "react";

const ImageList = props => {
//we can display images directly with save the map result into images and then display in div with
//by return props.images.map
const images=props.images.map((image)=>{
    return <img src={image.urls.regular}/>    
  });
  return <div>{images}</div>      
};
export default ImageList;
