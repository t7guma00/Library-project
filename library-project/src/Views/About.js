import React, { Component } from "react";
import Header from "../Components/Header";
import imgmate from "./imgmate.jpg";
import imgzhanna from "./imgzhanna.jpg";
import "./About.css";
import Footer from "../Components/Footer";
import imgleon from "./imgleon.jpg";

class About extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <div className="dcontainer">
          <div className="person">
            <div className="image">
              <img src={imgmate} width="300" />
            </div>
            <h1>Máté Gulyás</h1>
            <a href="https://github.com/t7guma00" target="_blank">
              Máté Gulyás
            </a>
          </div>

          <div className="person">
            <div className="image">
              <img src={imgzhanna} width="300" />
            </div>
            <h1>Zhanna Kresteva</h1>
            <a href="https://github.com/janecake" target="_blank">
              Zhanna Kresteva
            </a>
          </div>

            <div className="image">{<img src={imgleon} width="300" />}</div>
          <div className="person">
            <h1>Leon Oelen</h1>
            <a href="https://github.com/leono93" target="_blank">
              Leon Oelen
            </a>
          </div>
        </div>
        <p className="myp">
          This application was created by three Oulu University of the Applied
          Sciences students as a part of their Bachelor Degree in Information
          Technology studies. This task is a part of Advanced Applications
          Project Module.
        </p>
        <Footer />
      </div>
    );
  }
}

export default About;
