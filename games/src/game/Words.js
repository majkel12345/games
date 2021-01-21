import React from "react";
import "./text.css";

const Words = ({ quotes }) => {
  return (
    <div className="text">
      <h1>{quotes.text}</h1>
    </div>
  );
};

export default Words;
