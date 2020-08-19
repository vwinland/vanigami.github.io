import React, { Component } from "react";
import rubyLogo from "../images/smallruby.png";
import RoRLogo from "../images/smallerRoR.png";
import SinatraLogo from "../images/smallSinatra.png";
import reactLogo from "../images/reactLogo.png";
import reduxLogo from "../images/reduxLogo.png";
import nodeJSLogo from "../images/smallNodeJS.png";
import postgresLogo from "../images/postgrelogo-tiny.png";
export default class FlipCard extends Component {
  render() {
    return (
      <div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <span>Programming Languages</span>
              <br />
              <span>&</span>
              <br />
              <span>Libraries/Frameworks</span>
              <br />
              <br />
              <i class="fas fa-laptop-code fa-5x"></i>
            </div>
            <div class="flip-card-back">
              <ul>
                <span class="flipHeading">Programming Languages</span>
                <br />
                <li>
                  <span>Ruby </span>
                  <img src={rubyLogo} />
                </li>

                <li>
                  <span>JavaScript </span>
                  <i class="fab fa-js"></i>{" "}
                </li>
                <br />
                <span class="flipHeading">Libraries + Frameworks</span>
                <br />
                <li>
                  <span class="flip-card-back">Ruby on Rails </span>
                  <span>Ruby on Rails </span>
                  <img src={RoRLogo} />{" "}
                </li>
                <li>
                  <span>Sinatra </span>
                  <img src={SinatraLogo} />
                </li>
                <li>
                  <span>React </span>
                  <img src={reactLogo} />
                </li>
                <li>
                  <span>Redux </span>
                  <img src={reduxLogo} />
                </li>
                <li>
                  <span>NodeJS </span>
                  <img src={nodeJSLogo} />
                </li>
                <br />
                <span class="flipHeading">Databases</span>
                <br />
                <li>
                  <span>SQL </span>
                  <i class="fas fa-database"></i>
                </li>
                <li>
                  <span>Postgresql </span>
                  <img src={postgresLogo} />
                </li>
                <br />
                <span class="flipHeading">Deployment</span>
                <br />
                <br />
                <span class="flipHeading">Education</span>
                <br />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
