import React, { Component } from "react";
import Header from "../Components/Header";
import BookList from "../Components/BookList";
import "./Home.css";
import img from './image.png' 

class Books extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <div className="image">
          <img src={img}
          width="1350" >
          </img>
        </div>
        <br />
        <br />
        <BookList />
      </div>
    );
  }
}

export default Books;
