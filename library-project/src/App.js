import React, { Component } from "react";
import "./App.css";
import AllBooks from "./Views/AllBooks";
import Home from "./Views/Home";
import SignIn from "./Components/signin";
import SignUp from "./Components/signup";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/Home"
            render={() => (
              <div className="App">
                <Home />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/AllBooks"
            render={() => (
              <div className="App">
                <AllBooks />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/signin"
            render={() => (
              <div className="App">
                <SignIn />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/signup"
            render={() => (
              <div className="App">
                <SignUp />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
