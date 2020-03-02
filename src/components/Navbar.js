import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-style">
        <ul className="listing-style">
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </div>
    );
  }
}
