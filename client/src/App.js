import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SavedBooks from "./pages/SavedBooks";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/savedBooks" component={SavedBooks} />
      </Switch>
    </Router>
  );
}

export default App;
