import React, { useImperativeHandle, useState } from "react";
import logo1 from "../buzki/1.png";
import logo2 from "../buzki/2.png";
import logo3 from "../buzki/3.png";
import logo4 from "../buzki/4.png";
import logo5 from "../buzki/5.png";
import logo6 from "../buzki/6.png";
import logo7 from "../buzki/7.png";
import logo8 from "../buzki/8.png";

const Images = () => {
  const images = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  const [showPhoto, setShowPhoto] = useState([]);

  const handleOnClick = (e) => {
    if (!showPhoto.includes(e.target.name)) {
      setShowPhoto([...showPhoto, e.target.name]);
    } else {
      return null;
    }
  };
  console.log(showPhoto);

  return (
    <div>
      {images.map((img, index) => {
        return (
          <img
            src={!showPhoto.includes(img) ? logo8 : img}
            key={index}
            onClick={handleOnClick}
            name={img}
          ></img>
        );
      })}
    </div>
  );
};

export default Images;
