import React from "react";
import './image-list.css';
import ImageCard from './image-card.component'
const ImageList = (props) => {
  // const images = props.images.map((image) => {
  //   return <img key={image.id} alt={image.description} src={image.urls.regular} />;
  //the above method can be rewrite by refactoring as bgYellow
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list" >{images}</div>;
};
export default ImageList;
