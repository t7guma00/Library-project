import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Carousel.css";


class Carousel extends Component {
  constructor() {
    super();
    this.getBooks = this.getBooks.bind(this);
    this.state = {
      books: [],
      index: 0
    };
  }
  getBooks() {
    axios.get(`http://localhost:3000/books`).then(res => {
      const books = res.data;
      this.setState({ books });
    });
  }
  switchToAnotherCard = (direction) => {
    let newIndex;
    if (direction) {
      newIndex = this.state.index + 1;
      if (newIndex > this.state.books.length - 1) 
      {
        newIndex = 0;
      }
    } else {
      newIndex = this.state.index - 1;
      if (newIndex < 0) 
      {
        newIndex = this.state.books.length - 1;
      }
    }
    this.setState({
      index: newIndex
    })
  }
  render() {
    return (
      <div className="Carousel">
        <div className="page">
            <div className="col">
              <div className={`cards-slider active-slide`}>
                {(this.onload = this.getBooks())}
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${this.state.index*(100/this.state.books.length)}%)`
                }}>
                  {
                    this.state.books.map(book => <Card key={book.ID} book={book}/> )
                  }
                </div>
              </div>
            </div>
            <div className="carousel-controls" >
                <button className="btn styled" onClick={() => this.switchToAnotherCard(false)}>Prev</button>
                <button className="btn styled" onClick={() => this.switchToAnotherCard(true)}>Next</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
