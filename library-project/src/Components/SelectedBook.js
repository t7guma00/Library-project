import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import "./SelectedBook.css";

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
              <div className="ccontainer">
              {this.state.books.map(book => (
                <div className="cersoncontainer">
                <div className="cerson">
                <img
                    className="bookcover"
                    src={book.image}
                    alt="Book Cover"
                    height="660"
                    width="440"
                  />
                <h5>ISBN: {book.ISBN}</h5>
                <h5>Title: {book.title}</h5>
                <h5>Author: {book.author}</h5>
                <h5>Year: {book.year}</h5>
                <h5>Description:{book.description} </h5>
                <h5>Rating:{book.rating} out of 5</h5>
                <button className="btn styled">Add to my bookshelf</button>
                </div>
                </div>
              ))}
            </div>
        </div>
        <Carousel />
        <Footer />
      </div>
    );
  }
}
export default SelectedBook;
