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
                <img
                  src={book.image}
                  alt="Book Cover"
                  height="165"
                  width="110"
                />
                <h5>Title: {book.title}</h5>
                <h5>ISBN: {book.ISBN}</h5>
                <h5>Year: {book.year}</h5>
                <h5>Description: {book.description}</h5>
                <h5>{book.rating} out of 5</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
