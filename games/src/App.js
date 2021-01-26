import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HangMan from "./game/HangMan";
import Nav from "./Nav";
import PhotoGame from "./PhotoGame/PhotoGame";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
