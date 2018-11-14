import React, { Component } from 'react';
import Header from '../Components/Header';
//import Footer from '../Components/Footer';
export default class Home extends Component {
    state = {
    }
    render () {
       return (
         <div id='container'>
         <Header/>
         <div id='body'>
         <h3>Title
                    </h3>
                    <p>Here is a description of how
                     the app works </p>
          </div>
         </div>
       )
    }
 }
