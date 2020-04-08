import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";

import projects from "./ProjectData";

import FunFactory from "./../pictures/projects/fun-factory.jpg";
import MoviesApp from "./../pictures/projects/movie-app.jpg";
import Yamb from "./../pictures/projects/yamb.jpg";
import Resorts from "./../pictures/projects/resorts.jpg";
import Forecast from "./../pictures/projects/forecast-serbia.jpg";
import OnlineCommerce from "./../pictures/projects/online-commerce.jpg";
import ApplicationManager from "./../pictures/projects/application-manager.jpg";
import Cars from "./../pictures/projects/automobilizam.jpg";
import Worldcup from "./../pictures/projects/worldcup.jpg";

export default class Projects extends Component {
  state = {
    projectImg: [
      Worldcup,
      Cars,
      ApplicationManager,
      OnlineCommerce,
      Forecast,
      Resorts,
      Yamb,
      MoviesApp,
      FunFactory,
    ],
    projects: projects,
  };
  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <article className="project-link">
          {this.state.projects.reverse().map((project) => {
            return (
              <section key={project.id} className="project-image">
                <img
                  src={this.state.projectImg[project.id - 1]}
                  alt={project.altText}
                />
                <div className="project-name">
                  <a href={project.linkSrc} target="_blank">
                    <span>
                      <FaSearch />
                    </span>
                    <br />
                    {project.title}
                  </a>
                </div>
              </section>
            );
          })}
        </article>
      </div>
    );
  }
}
