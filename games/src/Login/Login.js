import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "./login.css";

const Login = ({ notSingUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (notSingUp) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("zarejesttrowany i zalogowany");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("zalogowany");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="logInContainer">
      <form onSubmit={handleOnSubmit}>
        <div className="loginWindow">
          {notSingUp ? (
            <h3>Wpisz e-mail aby sie zarejestrować</h3>
          ) : (
            <h3>Wpisz e-mail i hasło aby się zalogować</h3>
          )}
          <input
            onChange={handleOnEmailChange}
            name="email"
            placeholder="e-mail"
          ></input>
          <input
            onChange={handleOnPasswordChange}
            name="password"
            placeholder="password"
          ></input>
          {notSingUp ? (
            <button type="submit">Sign Up</button>
          ) : (
            <button type="submit">Log in</button>
          )}

          {notSingUp ? (
            <Link to="/login">
              <span>Kliknij aby sie zalogować</span>
            </Link>
          ) : (
            <Link to="/signup">Kliknij aby się zarejestrować</Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
