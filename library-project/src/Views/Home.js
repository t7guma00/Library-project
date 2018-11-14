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
         <h3>Congradulations!
                    </h3>
                    <p>Congradulations, you have made a 1,000 dollar donation! To cancel donation, please email your card numbers, expiration date and numbers on the back to our customer service Thank you! </p>
          </div>
         </div>
       )
    }
 }
