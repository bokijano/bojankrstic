import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";

import Yamb from "./../pictures/projects/yamb.jpg";
import Resorts from "./../pictures/projects/resorts.jpg";
import Forecast from "./../pictures/projects/forecast-serbia.jpg";
import OnlineCommerce from "./../pictures/projects/online-commerce.jpg";
import ApplicationManager from "./../pictures/projects/application-manager.jpg";
import Cars from "./../pictures/projects/automobilizam.jpg";
import Worldcup from "./../pictures/projects/worldcup.jpg";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <article className="project-link">
          <section className="project-image">
            <img src={Yamb} alt="yamb" />
            <div className="project-name">
              <a href="https://bokijano.github.io/game-yamb" target="_blank">
                <span>
                  <FaSearch />
                </span>
                <br />
                YAMB GAME
              </a>
            </div>
          </section>

          <section className="project-image">
            <img src={Resorts} alt="resorts" />
            <div className="project-name">
              <a
                href="https://bokijano.github.io/resorts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaSearch />
                </span>
                <br />
                MOUNTAIN RESORTS
              </a>
            </div>
          </section>

          <section className="project-image">
            <img src={Forecast} alt="forecast" />
            <div className="project-name">
              <a
                href="https://bokijano.github.io/forecast-serbia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaSearch />
                </span>
                <br />
                WEATHER FORECAST SERBIA
              </a>
            </div>
          </section>

          <section className="project-image">
            <img src={OnlineCommerce} alt="online commerce" />
            <div className="project-name">
              <a
                href="https://bokijano.github.io/online-commerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaSearch />
                </span>
                <br />
                ONLINE SHOPPING APP
              </a>
            </div>
          </section>

          <section className="project-image">
            <img src={ApplicationManager} alt="application manager" />
            <div className="project-name">
              <a
                href="https://bokijano.github.io/app-manager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaSearch />
                </span>
                <br />
                APPLICATION MANAGER
              </a>
            </div>
          </section>

          <section className="project-image">
            <img src={Cars} alt="cars" />
            <div className="project-name">
              <a
                href="https://f2j3m8mdozkgkfs9mpn8vw-on.drv.tw/cars/svetAutomobila/dist/automobilizam.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaSearch />
                </span>
                <br />
                ALL ABOUT CARS
              </a>
            </div>
          </section>

          <section className="project-image">
            <img src={Worldcup} alt="world - cup" />
            <div className="project-name">
              <a
                href="https://f2j3m8mdozkgkfs9mpn8vw-on.drv.tw/worldcup2018/sajt/worldcup.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaSearch />
                </span>
                <br />
                WORLD CUP RUSSIA 2018
              </a>
            </div>
          </section>
        </article>
      </div>
    );
  }
}
