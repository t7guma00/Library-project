import React, { Component } from "react";
import axios from "axios";

class SelectedBook extends Component {
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.id;
    this.getBook = this.getBook.bind(this);
    this.state = {
      books: []
    };
    this.getBook(this.props.match.params.id);
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
        <table className="table">
          <thead />
          <tbody>
            {this.state.books.map(book => (
              <tr key={book.ID}>
                <h2>More information about {book.title}</h2>
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
      </div>
    );
  }
}
export default SelectedBook;
