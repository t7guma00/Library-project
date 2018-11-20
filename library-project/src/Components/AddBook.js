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
      <center>
        <div className="container">
          <h2>Add a book to the database</h2>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td width="80px">
                    <label>Book ID:</label>
                  </td>
                  <td>
                    <input type="number" name="ID" onChange={this.onChange} />
                  </td>
                </tr>
                <tr>
                  <td width="80px">
                    <label>ISBN:</label>
                  </td>
                  <td>
                    <input type="text" name="ISBN" onChange={this.onChange} />
                  </td>
                </tr>
                <tr>
                  <td width="80px">
                    <label>Title:</label>
                  </td>
                  <td>
                    <input type="text" name="title" onChange={this.onChange} />
                  </td>
                </tr>
                <tr>
                  <td width="80px">
                    <label>Year:</label>
                  </td>
                  <td>
                    <input type="number" name="year" onChange={this.onChange} />
                  </td>
                </tr>
                <tr>
                  <td width="80px">
                    <label>Description:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="description"
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td width="80px">
                    <label>Image:</label>
                  </td>
                  <td>
                    <input type="text" name="image" onChange={this.onChange} />
                  </td>
                </tr>
                <tr>
                  <td width="80px">
                    <label>Rating:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="rating"
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <button className="button" type="submit">
                      Add Book
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

export default withRouter(AddBook);
