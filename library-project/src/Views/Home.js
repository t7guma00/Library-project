import React, { Component } from "react";
import Header from "../Components/Header";
//import Footer from '../Components/Footer';
import img from './image.png' 
import "./Home.css";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div id="container">
        <Header />
        <div className="image">
          <img src={img} />
        </div>
        <div id="body" />
      </div>
    );
  }
}
