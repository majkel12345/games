import { queryByTestId } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import Faces from "./Faces";
import Letters from "./Letters";

const HangMan = () => {
  const quotes = [
    {
      text: "Pan Tadeusz",
      category: "Utwór Literacki",
    },
    {
      text: "Star Wars",
      category: "Film",
    },
    {
      text: "Lalka",
      category: "Utwór Literacki",
    },
    {
      text: "Harry Potter",
      category: "Utwór Literacki",
    },
    {
      text: "Leonardo DiCaprio",
      category: "Aktor",
    },
    {
      text: "Pan Samochodzik",
      category: "Film",
    },
  ];

  const [guessed, setGuest] = useState([]);
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

  const [letter, setLetter] = useState("");
  const [word, setWord] = useState("");
  const [category, setCategory] = useState();

  const random = quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => {
    setWord(random.text);
    setCategory(random.category);
  }, []);

  // useEffect(() => {
  //   getContent();
  // }, []);

  const getContent = () => {
    let content = "";
    for (const char of word) {
      if (char == " " || guessed.includes(char.toLocaleUpperCase())) {
        content += char;
      } else {
        content += "_";
      }
    }
    return content;
  };

  const guess = (value) => {
    if (word.toUpperCase().includes(value)) {
      setGuest([...guessed, value]);
      return true;
    } else {
      return false;
    }
  };

  const handleOnClick = (e) => {
    console.log(e.target.value);
    e.target.disabled = true;
    setLetter(e.target.value);
    guess(e.target.value);
  };
  console.log(guessed);

  return (
    <div>
      <Faces />
      <h1 style={{ letterSpacing: "20px" }}>{getContent()}</h1>
      <p>{category}</p>
      <div className="keyboard">
        {letters.map((letter, index) => {
          return (
            <button key={index + 1} value={letter} onClick={handleOnClick}>
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HangMan;
