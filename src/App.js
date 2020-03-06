import React, { Component } from "react";
//import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { FaAlignRight } from "react-icons/fa";

import Responsive from "./pictures/responsive.svg";

class App extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  toggleBack = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="navbar-style">
          <div className="logo">
            <img src={Responsive} alt="responsive pict" />
          </div>
          <button className="nav-btn">
            <FaAlignRight className="nav-icon" onClick={this.handleToggle} />
          </button>
          <ul
            className={
              this.state.isOpen ? "listing-style show-nav" : "listing-style"
            }
          >
            <li>
              <a onClick={this.toggleBack} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={this.toggleBack} href="#about">
                About Me
              </a>
            </li>
            <li>
              <a onClick={this.toggleBack} href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <AboutMe />
        </div>

        <div id="projects">
          <Projects />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
