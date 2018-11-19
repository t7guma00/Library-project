import React, { Component } from "react";
import "./App.css";
import AllBooks from "./Views/AllBooks";
import AddBook from "./Components/AddBook";
import Books from "./Views/Books";
import Home from "./Views/Home";
import SignIn from "./Views/Signin";
import SignUp from "./Views/Signup";
import About from "./Views/About";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/home"
            render={() => (
              <div className="App">
                <Home />
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
          <Route
            exact={true}
            path="/allbooks"
            render={() => (
              <div className="App">
                <AllBooks />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/addbook"
            render={() => (
              <div className="App">
                <AddBook />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/about"
            render={() => (
              <div className="App">
                <About />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
