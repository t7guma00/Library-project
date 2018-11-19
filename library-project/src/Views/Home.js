import React, { Component } from "react";
import Header from "../Components/Header";
//import Footer from '../Components/Footer';
export default class Home extends Component {
  state = {};
  render() {
    return (
      <div id="container">
        <Header />
        <div id="body" />
      </div>
    );
  }
}
