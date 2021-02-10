import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "./Nav.css";

const Nav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  });

  const handleOnClick = () => {
    firebase.auth().signOut();
    console.log("loged out");
  };

  return (
    <div className="nav">
      <div className="buttons">
        {user ? (
          <button className="logButton" onClick={handleOnClick}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="logButton">Log in</button>
          </Link>
        )}
      </div>

      <h1>Witaj w świecei gier!</h1>
      <ul className="list">
        <li>
          <Link to="/hangman">
            <button className="gameButton">Hangman</button>
          </Link>
        </li>
        <li>
          <Link to="/photo">
            <button className="gameButton">Photo</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
