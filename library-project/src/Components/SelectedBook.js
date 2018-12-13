import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

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
      <div className="display">
        <Header />
        <div className="container">
          <table className="table">
            <thead />
            <tbody>
              {this.state.books.map(book => (
                <tr key={book.ISBN}>
                  <h2>More information about {book.title}</h2>
                  <tr>
                    <th>ISBN:</th>
                    <td>{book.ISBN}</td>
                  </tr>
                  <tr>
                    <th>Author:</th>
                    <td>{book.author}</td>
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
                    <th>Book Cover:</th>
                    <td>
                      <img src={book.image} />
                    </td>
                  </tr>
                  <tr>
                    <th>Rating:</th>
                    <td>{book.rating} out of 5</td>
                  </tr>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default SelectedBook;
