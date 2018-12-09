import React, { Component } from "react";
//import Header from "../Components/Header";
//import Footer from '../Components/Footer';
import axios from "axios";
import Card from "./Card";
import "./Carousel.css";


class Carousel extends Component {
  constructor() {
    super();
    this.getBooks = this.getBooks.bind(this);
    this.state = {
      books: []
    };
  }
  getBooks() {
    axios.get(`http://localhost:3000/books`).then(res => {
      const books = res.data;
      this.setState({ books });
    });
  }
  render() {
    return (
      <div className="Carousel">
        <div className="page">
            <div className="col">
              <div className={`cards-slider active-slide`}>
                <div className="cards-slider-wrapper">
                  {(this.onload = this.getBooks())}
                  {
                    this.state.books.map(book => <Card key={book.ID} book={book}/> )
                  }
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
  //   return (
  //     <div id="container">
  //       <div className="body">
  //         <div className="bcontainer">
  //         {(this.onload = this.getBooks())}
  //           {this.state.books.map(book => (
  //                 <div className="person" key={book.ISBN}>
  //                   <h2>{book.ISBN}</h2>
  //                   <h2>{book.title}</h2>
  //                   <h2>{book.year}</h2>
  //                   <h2>{book.description}</h2>
  //                 1 <img
  //                     src={book.image}
  //                     alt="Book Cover"
  //                     height="165"
  //                     width="110"
  //                   />
  //                   <h2>{book.rating}</h2>
  //                 </div>
  //               ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }


export default Carousel;