import React, { useState } from "react";
import Images from "./Images";
import { photos } from "./photos";
import "./photoGame.css";

const PhotoGame = () => {
  const random = photos[Math.floor(Math.random() * photos.length)];
  const [value, setValue] = useState("");
  const [animal, setAnimal] = useState(random.description);
  const [photoImg, setPhotoImg] = useState(random.photo);
  const [win, setWin] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value === animal) {
      console.log("brawo");
      setWin(true);
    } else {
      setValue("");
    }
  };

  return (
    <div className="photoGameContainer">
      <Images win={win} images={photoImg} />
      {win ? (
        <h2>Brawo!!! wygrałeś, hasło to => {animal}</h2>
      ) : (
        <div className="inputContainer">
          <form onSubmit={handleOnSubmit}>
            <input
              className="inptuText"
              type="text"
              placeholder="write here!"
              onChange={handleOnChange}
              value={value}
            ></input>
            <input type="submit" value="check" className="inptutSub"></input>
          </form>
        </div>
      )}
    </div>
  );
};

export default PhotoGame;
