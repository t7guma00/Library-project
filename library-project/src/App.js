import React, { Component } from "react";
import "./App.css";
import AllBooks from "./Views/AllBooks";

import Books from './Views/Books' ;
import Home from './Views/Home' ;
import SignIn from './Views/Signin' ;
import SignUp from './Views/Signup' ;


import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/signin' render={() => (
            <div className="App">
              <SignIn />
            </div>
          )}/>
          <Route exact={true} path='/signup' render={() => (
            <div className="App">
              <SignUp />
              </div>
          )}/>
          <Route exact={true} path='/books' render={() => (
            <div className="App">
              <Books />
              </div>
          )}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
