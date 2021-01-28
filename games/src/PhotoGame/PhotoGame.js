import React, { useState } from "react";
import Images from "./Images";
import logo1 from "../buzki/1.png";
import logo2 from "../buzki/2.png";
import logo3 from "../buzki/3.png";
import logo4 from "../buzki/4.png";
import logo5 from "../buzki/5.png";
import logo6 from "../buzki/6.png";
import logo7 from "../buzki/7.png";
import logo8 from "../buzki/8.png";

const PhotoGame = () => {
  const images = [
    {
      photos: [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8],
      description: "dog",
    },
    {
      photos: [logo8, logo2, logo3, logo4, logo5, logo6, logo7, logo1],
      description: "cat",
    },
    {
      photos: [logo2, logo1, logo3, logo4, logo5, logo6, logo7, logo8],
      description: "horse",
    },
  ];

  const random = images[Math.floor(Math.random() * images.length)];
  const [value, setValue] = useState("");
  const [animal, setAnimal] = useState(random.description);
  const [photoImg, setPhotoImg] = useState(random.photos);
  const [win, setWin] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    setValue("");
    e.preventDefault();
    if (value === animal) {
      console.log("brawo");

      setWin(true);
    } else {
      console.log("nie udało się");
    }
  };

  console.log(photoImg);

  return (
    <div>
      <h1>Photo Game</h1>
      <Images win={win} images={photoImg} />
      <h1>{animal}</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          placeholder="write here!"
          onChange={handleOnChange}
          value={value}
        ></input>
      </form>
    </div>
  );
};

export default PhotoGame;
