import React, { Component } from "react";
import Header from "../Components/Header";
//import Footer from '../Components/Footer';
import axios from "axios";
import "./Booklist.css";


class BookList extends Component {
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
      <div id="container">
        <div id="body">
          {(this.onload = this.getBooks())}
            {this.state.books.map(book => (
                  <div className="person" key={book.ISBN}>
                    <h1>{book.ISBN}</h1>
                    <h1>{book.title}</h1>
                    <h1>{book.year}</h1>
                    <h1>{book.description}</h1>
                  1 <img
                      src={book.image}
                      alt="Book Cover"
                      height="165"
                      width="110"
                    />
                    <h1>{book.rating}</h1>
                  </div>
                ))}
        </div>
      </div>
    );
  }

  /** render() {
    return (
      <div id="container">
        <div id="">
          {(this.onload = this.getBooks())}
          {this.state.books.map(book => (
            <p>
              {book.ISBN} {book.title} {book.year}{" "}
              <img src={book.image} alt="Book Cover" height="165" width="110" />{" "}
              {book.rating}{" "}
            </p>
          ))}
        </div>
      </div>
    );
  }*/
}

export default BookList;
