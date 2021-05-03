import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./view/Dashboard/Dashboard";
import Home from "./view/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
