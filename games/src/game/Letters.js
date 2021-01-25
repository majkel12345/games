import React from "react";
import "./letters.css";

const Letters = ({ onButtonClick }) => {
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

  const handleOnClick = (e) => {
    e.preventDefault();
    onButtonClick(e.target.value);
    e.target.disabled = true;
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
