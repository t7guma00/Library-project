import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Header from "../Components/Header";

class Register extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      ID: "",
      username: "",
      password: ""
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();

    const { ID, username, password } = this.state;

    axios
      .post("http://localhost:3000/user", {
        ID,
        username,
        password
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push("/home");
      });
  };

  render() {
    return (
      <center>
        <div className="display">
          <Header />
          <div className="container">
            <br />
            <h2>Become a member</h2>
            <form onSubmit={this.handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td width="80px">
                      <label>Username:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="username"
                        onChange={this.onChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td width="80px">
                      <label>Password:</label>
                    </td>
                    <td>
                      <input
                        type="password"
                        name="password"
                        onChange={this.onChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <button className="btn" type="submit">
                        Complete registration
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </center>
    );
  }
}

export default withRouter(Register);
