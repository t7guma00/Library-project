import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Books from './Views/Books' ;
import Home from './Views/Home' ;
import SignIn from './Components/signin' ;
import SignUp from './Components/signup' ;



import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Route exact={true} path='/Home' render={() => (
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
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
