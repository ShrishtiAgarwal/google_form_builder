import "./App.css";
import React, { useState } from "react";
import HomePage from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/createForm" component={CreateForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
