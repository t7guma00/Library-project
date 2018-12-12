import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class SelectedBook extends Component {
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.ID;
    this.getBook = this.getBook.bind(this);
    this.state = {
      books: []
    };
    this.getBook(this.props.match.params.ID);
  }

  getBook(ID) {
    axios.get(`http://localhost:3000/books/` + ID).then(res => {
      const books = res.data;
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Selected Book</h2>
        <table className="table">
          <thead />
          <tbody>
            {this.state.books.map(book => (
              <tr key={book.ID}>
                <tr>
                  <th>ID:</th>
                  <td>{book.ID}</td>
                </tr>
                <tr>
                  <th>ISBN:</th>
                  <td>{book.ISBN}</td>
                </tr>
                <tr>
                  <th>Title:</th>
                  <td>{book.title}</td>
                </tr>
                <tr>
                  <th>Year:</th>
                  <td>{book.year}</td>
                </tr>
                <tr>
                  <th>Description:</th>
                  <td>{book.description}</td>
                </tr>
                <tr>
                  <th>Image:</th>
                  <td>{book.image}</td>
                </tr>
                <tr>
                  <th>Rating:</th>
                  <td>{book.rating}</td>
                </tr>
              </tr>
            ))}
          </tbody>
        </table>
        <NavLink to={`/updatebook/${this.props.match.params.id}`}>
          <button className="btn btn-primary">Update</button>
        </NavLink>
        <NavLink to={`/deleteselected/${this.props.match.params.id}`}>
          <button className="btn btn-danger">Delete</button>
        </NavLink>
      </div>
    );
  }
}
export default SelectedBook;
