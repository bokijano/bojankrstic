import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default App;
