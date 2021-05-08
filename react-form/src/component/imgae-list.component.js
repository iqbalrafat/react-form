import React from "react";
import './image-list.css';
const ImageList = (props) => {
  // const images = props.images.map((image) => {
  //   return <img key={image.id} alt={image.description} src={image.urls.regular} />;
  //the above method can be rewrite by refactoring as bgYellow
  const images = props.images.map(({ id, description, urls }) => {
    return <img key={id} alt={description} src={urls.regular} />;
  });
  return <div className="image-list" >{images}</div>;
};
export default ImageList;
