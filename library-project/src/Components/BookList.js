import React, { Component } from "react";
//import Header from "../Components/Header";
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
        <div className="body">
          <div className="bcontainer">
          {(this.onload = this.getBooks())}
            {this.state.books.map(book => (
                  <div className="person" key={book.ISBN}>
                    <h2>{book.ISBN}</h2>
                    <h2>{book.title}</h2>
                    <h2>{book.year}</h2>
                    <h2>{book.description}</h2>
                  1 <img
                      src={book.image}
                      alt="Book Cover"
                      height="165"
                      width="110"
                    />
                    <h2>{book.rating}</h2>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
