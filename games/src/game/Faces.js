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

const Faces = () => {
  return (
    <div className="facesContainer">
      <img
        style={{ color: "red" }}
        src={logo1}
        height="100"
        width="100"
        alt="buzka"
      />
      <img
        style={{ color: "red" }}
        src={logo2}
        height="100"
        width="100"
        alt="buzka"
      />
      <img
        style={{ color: "red" }}
        src={logo3}
        height="100"
        width="100"
        alt="buzka"
      />
      <img
        style={{ color: "red" }}
        src={logo4}
        height="100"
        width="100"
        alt="buzka"
      />
      <img
        style={{ color: "red" }}
        src={logo5}
        height="100"
        width="100"
        alt="buzka"
      />
      <img
        style={{ color: "red" }}
        src={logo6}
        height="100"
        width="100"
        alt="buzka"
      />
      <img
        style={{ color: "red" }}
        src={logo7}
        height="100"
        width="100"
        alt="buzka"
      />
      <img
        style={{ color: "red" }}
        src={logo8}
        height="100"
        width="100"
        alt="buzka"
      />
    </div>
  );
};

export default Faces;
