import React, { useEffect, useState } from "react";
import Images from "./Images";
import { photos } from "./photos";
import "./photoGame.css";

const PhotoGame = () => {
  // const random = photos[Math.floor(Math.random() * photos.length)];
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [animal, setAnimal] = useState(photos[index].description);
  const [photoImg, setPhotoImg] = useState(photos[index].photo);
  const [win, setWin] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  useEffect(() => {
    setAnimal(photos[index].description);
    setPhotoImg(photos[index].photo);
  }, [index]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value === animal) {
      console.log("brawo");
      setWin(true);
    }
    setValue("");
  };

  const handleOnNext = () => {
    setIndex(index + 1);
    setWin(false);
  };

  return (
    <div className="photoGameContainer">
      <Images win={win} images={photoImg} />
      {win ? (
        <h2>Brawo!!! wygrałeś, hasło to {animal}</h2>
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
      {index === photos.length - 1 && win ? (
        <button>Sprawdź wynik</button>
      ) : null}
      {index !== photos.length - 1 ? (
        <button onClick={handleOnNext}>Next</button>
      ) : null}
    </div>
  );
};

export default PhotoGame;
