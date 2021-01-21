import React from "react";
import "./letters.css";

const Letters = ({ onButtonClick, word, quessed }) => {
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

  // const guess = (letter) => {
  //   if (!word.toUpperCase().includes(letter)) {
  //     console.log("błąd");
  //     return false;
  //   }
  //   quessed.push(letter);

  //   console.log(quessed);
  // };

  const handleOnClick = (e) => {
    e.preventDefault();
    onButtonClick(e.target.value);
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
