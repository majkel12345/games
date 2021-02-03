import React, { useState } from "react";
import "./images.css";
import minion from "./Photos/minion.png";

const Images = ({ win, images, score }) => {
  const [showPhoto, setShowPhoto] = useState([]);
  const cardImg = minion;

  const handleOnClick = (e) => {
    if (!showPhoto.includes(e.target.name)) {
      setShowPhoto([...showPhoto, e.target.name]);
    }
  };

  return (
    <div className="container">
      <div className="imageContainer">
        {images.map((img, index) => {
          return (
            <img
              className="image"
              src={win ? img : !showPhoto.includes(img) ? cardImg : img}
              key={index}
              onClick={handleOnClick}
              name={img}
              alt="obrazek"
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
