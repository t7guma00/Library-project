import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class SignIn extends Component {
    state = { 
    }
    render () {                                   
       return (
         <div id='container'>
         <Header/>
         <div id='body'>
         <h3>Signin
                    </h3>
                    <p>sign in test </p>
          </div>
          <Footer/>
         </div>
       )
    }
 }