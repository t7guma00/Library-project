import React, { Component } from "react";
import Header from "../Components/Header";
import AddBook from "../Components/AddBook";
import UpdateBook from "../Components/UpdateBook";
//import Footer from '../Components/Footer';

class Tools extends Component {
  render() {
    return (
      <div id="container">
        <Header /> <br />
        <br />
        <div id="body">
          <p>
            <AddBook />
          </p>

          <p>
            <UpdateBook />
          </p>
        </div>
      </div>
    );
  }
}

export default Tools;
