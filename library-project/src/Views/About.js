import React, { Component } from "react";
import Header from "../Components/Header";

class About extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <div id="body">
          <br />
          <br />
          <p>
            This web application has been created by three students at the Oulu
            University of Applied Sciences located in Oulu, Finland. This
            project is a part of our study in Information Technology. For more
            information about us as well as previous projects you can check out
            our GitHub pages:
            <br />
            <a href="https://github.com/t7guma00" target="_blank">
              Máté Gulyás
            </a>
            <br />
            <a href="https://github.com/janecake" target="_blank">
              Zhanna Kresteva
            </a>
            <br />
            <a href="https://github.com/leono93" target="_blank">
              Leon Oelen
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
