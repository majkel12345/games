import React, { useState } from "react";
import Faces from "./Faces";
import Words from "./Words";
import Letters from "./Letters";

const HangMan = () => {
  const [letter, setLetter] = useState();

  const onKeyboadrdClick = (value) => {
    setLetter(value);
  };
  console.log(letter);
  return (
    <div>
      <h1>Hangman</h1>
      <Faces />
      <Words />
      <Letters onButtonClick={onKeyboadrdClick} />
    </div>
  );
};

export default HangMan;
