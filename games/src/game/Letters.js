import React from "react";
import "./letters.css";

const Letters = (props) => {
  const letters = [
    "A",
    "Ą",
    "B",
    "C",
    "Ć",
    "D",
    "E",
    "Ę",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "Ł",
    "M",
    "N",
    "Ń",
    "O",
    "Ó",
    "P",
    "R",
    "S",
    "Ś",
    "T",
    "U",
    "W",
    "Y",
    "Z",
    "Ź",
    "Ż",
  ];

  const handleOnClick = (event) => {
    props.onButtonClick(event.target.value);
    // event.preventDefault();
  };
  return (
    <div className="keyboard">
      {letters.map((letter, index) => {
        return (
          <button key={index + 1} value={letter} onClick={handleOnClick}>
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Letters;
