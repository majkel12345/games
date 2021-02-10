import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HangMan from "./game/HangMan";
import Nav from "./Nav";
import PhotoGame from "./PhotoGame/PhotoGame";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
          </Route>
          <Route path="/hangman">
            <HangMan />
          </Route>
          <Route path="/photo">
            <PhotoGame />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Login notSingUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
