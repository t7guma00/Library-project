import React, { Component } from "react";
//import Header from "../Components/Header";
//import Footer from '../Components/Footer';
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
                <button onClick={() => this.switchToAnotherCard(true)}>Next</button>
                <button onClick={() => this.switchToAnotherCard(false)}>Prev</button>
            </div>
        </div>
      </div>
    );
  }
}
  //   return (
  //     <div id="container">
  //       <div className="body">
  //         <div className="bcontainer">
  //         {(this.onload = this.getBooks())}
  //           {this.state.books.map(book => (
  //                 <div className="person" key={book.ISBN}>
  //                   <h2>{book.ISBN}</h2>
  //                   <h2>{book.title}</h2>
  //                   <h2>{book.year}</h2>
  //                   <h2>{book.description}</h2>
  //                 1 <img
  //                     src={book.image}
  //                     alt="Book Cover"
  //                     height="165"
  //                     width="110"
  //                   />
  //                   <h2>{book.rating}</h2>
  //                 </div>
  //               ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }


export default Carousel;
