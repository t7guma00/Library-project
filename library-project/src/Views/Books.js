import React, { Component } from "react";
import Header from "../Components/Header";
import BookList from "../Components/BookList";
import Footer from '../Components/Footer';
import "./Home.css";
import img from "./image.png";

class Books extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <div className="banner">
          <div className="banner-image-container">
            <img src={img} />
          </div>
        </div>
        <br />
        <br />
        <BookList />
        <Footer />
      </div>
    );
  }
}

export default Books;
