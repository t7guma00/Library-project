import React, { Component } from "react";
import Header from "../Components/Header";
//import Footer from '../Components/Footer';
import axios from "axios";

class AllBooks extends Component {
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
        <Header />
        <div id="body">
          {(this.onload = this.getBooks())}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Year</th>
                <th>Description</th>
                <th>Image</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map(book => (
                <tr key={book.ISBN}>
                  <td>{book.ISBN}</td>
                  <td>{book.title}</td>
                  <td>{book.year}</td>
                  <td>{book.description}</td>
                  <td>
                    <img src={book.image} height="165" width="110" />
                  </td>
                  <td>{book.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AllBooks;
