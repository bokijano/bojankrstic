import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default App;
