import React, { Component } from "react";
import Header from "../Components/Header";
import BookList from "../Components/BookList";

class Books extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <BookList />
      </div>
    );
  }
}

export default Books;
