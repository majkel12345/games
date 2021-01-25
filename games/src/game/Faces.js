import React from "react";
import "./face.css";
import logo1 from "../buzki/1.png";
import logo2 from "../buzki/2.png";
import logo3 from "../buzki/3.png";
import logo4 from "../buzki/4.png";
import logo5 from "../buzki/5.png";
import logo6 from "../buzki/6.png";
import logo7 from "../buzki/7.png";
import logo8 from "../buzki/8.png";

const Faces = ({ currentStep }) => {
  const images = [
    {
      src: logo1,
      class: "one",
    },
    {
      src: logo2,
      class: "two",
    },
    {
      src: logo3,
      class: "three",
    },
    {
      src: logo4,
      class: "four",
    },
    {
      src: logo5,
      class: "five",
    },
    {
      src: logo6,
      class: "six",
    },
    {
      src: logo7,
      class: "seven",
    },
    {
      src: logo8,
      class: "eight",
    },
  ];

  return (
    <div className="facesContainer">
      <img
        className={images[currentStep].class}
        src={images[currentStep].src}
        alt="bużka"
      ></img>
    </div>
  );
};

export default Faces;
