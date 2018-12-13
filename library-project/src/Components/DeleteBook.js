import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class DeleteBook extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      ID: 1
    };
  }

  updateInputValue(val) {
    this.setState({ ID: val.target.value });
  }
  delete = event => {
    event.preventDefault();
    const id = this.state.ID;

    axios
      .delete("http://localhost:3000/books/" + id)

      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push("/books");
      });
  };

  render() {
    return (
      <center>
        <div className="container">
          <h2>Delete a book from the database</h2>
          <form>
            <table>
              <tbody>
                <tr>
                  <td width="80px">
                    <label>Book ID:</label>
                  </td>
                </tr>
                <input type="number" onChange={this.updateInputValue} min="1" />
                <td />
                <td>
                  <button className="btn" onClick={this.delete}>
                    Delete
                  </button>
                </td>
              </tbody>
            </table>
          </form>
        </div>
      </center>
    );
  }
}

export default withRouter(DeleteBook);
