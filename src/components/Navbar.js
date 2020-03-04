import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link, Route, Switch } from "react-router-dom";

import Responsive from "./../pictures/responsive.svg";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
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
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </div>
    );
  }
}
