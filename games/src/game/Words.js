import React from "react";
import "./text.css";

const Words = () => {
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

  const random = React.useMemo(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, []);
  console.log(random);
  return (
    <div className="text">
      <h1>{random.text}</h1>
      <h2>{random.category}</h2>
    </div>
  );
};

export default Words;
