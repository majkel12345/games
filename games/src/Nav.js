import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <h1>Witaj w świecei gier!</h1>
      <ul className="list">
        <li>
          <Link to="/hangman">
            <button>Hangman</button>
          </Link>
        </li>
        <li>
          <NavLink to="/photo">
            <button>Photo</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
