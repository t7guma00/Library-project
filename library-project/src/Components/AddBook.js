import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class AddBook extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      ID: "",
      ISBN: "",
      title: "",
      year: "",
      description: "",
      image: "",
      rating: ""
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();

    const { ID, ISBN, title, year, description, image, rating } = this.state;

    axios
      .post("http://localhost:3000/books", {
        ID,
        ISBN,
        title,
        year,
        description,
        image,
        rating
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push("/allbooks");
      });
  };

  render() {
    return (
      <div className="container">
        <h2>Add a book to the database</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Book ID:
            <input type="number" name="ID" onChange={this.onChange} />
          </label>
          <label>
            ISBN:
            <input type="text" name="ISBN" onChange={this.onChange} />
          </label>
          <label>
            Title:
            <input type="text" name="title" onChange={this.onChange} />
          </label>
          <label>
            {" "}
            Description:
            <input type="text" name="description" onChange={this.onChange} />
          </label>
          <label>
            {" "}
            Image:
            <input type="text" name="image" onChange={this.onChange} />
          </label>
          <label>
            {" "}
            Rating:
            <input type="number" name="rating" onChange={this.onChange} />
          </label>
          <br />
          <br />
          <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddBook);
