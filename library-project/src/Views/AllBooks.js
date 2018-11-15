import React, { Component } from "react";
import Header from "../Components/Header";
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
      <div>
        {(this.onload = this.getBooks())}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>ISBN</th>
              <th>title</th>
              <th>year</th>
              <th>description</th>
              <th>image</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map(book => (
              <tr key={book.ID}>
                <td>{book.ID}</td>
                <td>{book.ISBN}</td>
                <td>{book.title}</td>
                <td>{book.year}</td>
                <td>{book.description}</td>
                <td>{book.image}</td>
                <td>{book.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllBooks;
