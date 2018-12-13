import React, { Component } from "react";
import axios from "axios";
import "./Booklist.css";
import { NavLink } from "react-router-dom";
import star from "./star.png";

class BookList extends Component {
  constructor() {
    super();
    this.getBooks = this.getBooks.bind(this);
    this.state = {
      books: []
    };
    this.getBooks();
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
              <div className="personcontainer">
                <div className="person" key={book.ISBN}>
                  <img
                    className="bookcover"
                    src={book.image}
                    alt="Book Cover"
                    height="330"
                    width="220"
                  />
                  <h4>{book.author}</h4>
                  <h3>{book.title}</h3>
                  <h5>{book.year}</h5>
                  <h5>
                    {book.rating} <img src={star} height="22" width="22" />
                  </h5>
                  <div className="book-link-container">
                    <NavLink className="book-link" to={`selectedbook/${book.ID}`}>
                      <button className="btn styled">More Information</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
