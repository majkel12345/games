import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEyZnwGguDLyAhnnYI4roS49aZA0ySN5M",
  authDomain: "games-f47ae.firebaseapp.com",
  projectId: "games-f47ae",
  storageBucket: "games-f47ae.appspot.com",
  messagingSenderId: "583814951867",
  appId: "1:583814951867:web:3fb3a1cdf933dfdcd2ca9e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
