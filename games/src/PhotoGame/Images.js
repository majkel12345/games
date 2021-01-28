import React, { useState } from "react";

const Images = ({ win, images }) => {
  const [showPhoto, setShowPhoto] = useState([]);
  const cardImg =
    "https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80";

  const handleOnClick = (e) => {
    if (!showPhoto.includes(e.target.name)) {
      setShowPhoto([...showPhoto, e.target.name]);
    }
  };

  return (
    <div>
      {images.map((img, index) => {
        return (
          <img
            src={win ? img : !showPhoto.includes(img) ? cardImg : img}
            height="400"
            width="600"
            key={index}
            onClick={handleOnClick}
            name={img}
            alt="obrazek"
          ></img>
        );
      })}
    </div>
  );
};

export default Images;
