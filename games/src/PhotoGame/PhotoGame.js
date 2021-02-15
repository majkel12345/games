import React, { useEffect, useState } from "react";
import Images from "./Images";
import { photos } from "./photos";
import "./photoGame.css";

const PhotoGame = () => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [animal, setAnimal] = useState();
  const [photoImg, setPhotoImg] = useState();
  const [win, setWin] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [end, setEnd] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://games-f47ae-default-rtdb.europe-west1.firebasedatabase.app/photoGame/${index}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchData([...fetchData, data]);
        setAnimal(data.description);
        setPhotoImg(data.photo);
        setMounted(true);
      })
      .catch(() => {
        setEnd(true);
      });
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
  console.log(fetchData);

  return (
    <div className="photoGameContainer">
      {!end ? (
        <>
          {mounted ? <Images win={win} images={photoImg} /> : <p>loading</p>}
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
                <input
                  type="submit"
                  value="check"
                  className="inptutSub"
                ></input>
              </form>
            </div>
          )}
          <button className="btn" onClick={handleOnNext}>
            Next
          </button>
        </>
      ) : (
        <div className="finishedGame">
          <button className="btn">Sprwdź swój wynik</button>
        </div>
      )}
    </div>
  );
};

export default PhotoGame;
