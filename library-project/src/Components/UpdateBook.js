import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class UpdateBook extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.state = {
      ID: 0,
      ISBN: "",
      Title: "",
      Year: "",
      Description: "",
      Image: "",
      Rating: ""
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  getBooks(val) {
    this.setState({ ID: val.target.value });
    axios.get("http://localhost:3000/books/" + val.target.value).then(res => {
      const state = {
        ISBN: res.data[0].ISBN,
        title: res.data[0].title,
        year: res.data[0].year,
        description: res.data[0].description,
        image: res.data[0].image,
        rating: res.data[0].rating
      };
      this.setState(state);
      console.log(res.data[0].title);
    });
  }

  updateInputValue(val) {
    this.setState({ ID: val.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    const id = this.state.ID;
    const { ISBN, title, year, description, image, rating } = this.state;

    axios
      .put("http://localhost:3000/books/" + id, {
        ISBN,
        title,
        year,
        description,
        image,
        rating
      })
      .then(res => {
        this.props.history.push("/books");
      });
  };

  render() {
    return (
      <center>
        <div className="container">
          <h2>Update a book in the database</h2>
          <table>
            <tbody>
              <tr>
                <td width="80px">
                  <label> Book ID:</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="ID"
                    onChange={this.getBooks}
                    value={this.state.ID}
                    min="1"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td width="80px">
                    <label>ISBN:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="ISBN"
                      value={this.state.ISBN}
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td width="80px">
                    <label>Title:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td width="80px">
                    <label>Year:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="year"
                      value={this.state.year}
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Description:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="description"
                      onChange={this.onChange}
                      value={this.state.description}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Image URL:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="image"
                      onChange={this.onChange}
                      value={this.state.image}
                    />
                  </td>
                </tr>
                <tr>
                  <td width="80px">
                    <label>Rating:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="rating"
                      value={this.state.rating}
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <button className="button" type="submit">
                      Update Book
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </center>
    );
  }
}

export default withRouter(UpdateBook);
