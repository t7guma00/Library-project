import React, { Component } from "react";
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import img from "./image.png";
import "./Home.css";
import Carousel from "../Components/Carousel.js";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div id="container">
        <Header />
        <div className="image">
          <img src={img} width="1350" />
        </div>
        <br />
        <div id="body">
        <h3 id="myh3"> Recommended books:</h3>
        <Carousel />
        <Footer />
        </div>
      </div>
    );
  }
}
