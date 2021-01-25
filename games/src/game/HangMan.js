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

  const finalStep = 7;
  const random = quotes[Math.floor(Math.random() * quotes.length)];

  const [guessed, setGuessed] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState();
  const [currentStep, setCurrentStep] = useState(0);

  const randomTextCategory = () => {
    setWord(random.text);
    setCategory(random.category);
  };

  useEffect(() => {
    randomTextCategory();
  }, []);

  const getContent = () => {
    let content = "";
    for (const char of word) {
      if (char === " " || guessed.includes(char.toLocaleUpperCase())) {
        content += char;
      } else {
        content += "_";
      }
    }
    return content;
  };

  const guess = (value) => {
    if (word.toUpperCase().includes(value)) {
      setGuessed([...guessed, value]);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleOnClick = (value) => {
    console.log(value);

    guess(value);
  };

  console.log(currentStep);
  console.log(guessed);

  const content = getContent();

  return (
    <div className="gameContainer">
      <Faces currentStep={currentStep} />
      <div style={{ letterSpacing: "20px" }}>
        {currentStep === finalStep ? (
          <p>Niestety przegrałeś. Hasło to {word}</p>
        ) : !content.includes("_") ? (
          <p>
            Wygrałeś!! <br></br> hasło to: {word}
          </p>
        ) : (
          <>
            <h1>{content}</h1>
            <p>{category}</p>
            <Letters onButtonClick={handleOnClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default HangMan;
