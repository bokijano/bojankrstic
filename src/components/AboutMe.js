import React, { Component } from "react";
import Developer from "./../pictures/development/developer.svg";
import HTML5 from "./../pictures/development/html5.svg";
import CSS3 from "./../pictures/development/CSS3.svg";
import javascript from "./../pictures/development/javascript.svg";
import bootstrap from "./../pictures/development/bootstrap.png";
import sass from "./../pictures/development/sass.png";
import jquery from "./../pictures/development/jquery.png";
import ES6 from "./../pictures/development/ES6.png";
import react from "./../pictures/development/react-logo.png";
import git from "./../pictures/development/git.png";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <h1>About Me</h1>
        <article className="first-art">
          <img src={Developer} alt="developer" />
          <section>
            <p>
              I am a Front-End-Developer, from Serbia, I design & build user
              interfaces.
            </p>
            <p>My expertise is in the area of responsive design.</p>
            <p>
              With every line of code, I strive to make the web a beautiful
              place.
            </p>
          </section>
        </article>
        <article className="sec-article">
          <p>You can see technologies I've had experience in</p>
          <section>
            <img src={HTML5} alt="HTML5" />
            <img src={CSS3} alt="CSS3" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={sass} alt="sass" />
            <img src={jquery} alt="jquery" />
            <img src={javascript} alt="javascript" />
            <img src={ES6} alt="ES6" />
            <img src={react} alt="react" />
            <img src={git} alt="git" />
          </section>
        </article>
      </div>
    );
  }
}
