import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HangMan from "./game/HangMan";
import Nav from "./Nav";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
