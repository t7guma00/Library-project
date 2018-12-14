import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <nav role="navigation">
            <ul>
              <li className="active">
                <a href="../home">Home</a>
              </li>
              <li onClick="this._handleClick">
                <a href="../books">Books</a>
              </li>
              <li onClick="this._handleClick">
                <a href="#">My Bookshelf</a>
              </li>
              <li onClick="this._handleClick">
                <a href="../about">About us</a>
              </li>
              <li onClick="this._handleClick">
                <a href="../register">Register</a>
              </li>
              <li onClick="this._handleClick">
                <a href="../login">Log in</a>
              </li>
            </ul>
          </nav>
          <ul className="utilities">
            <li>
              <form>
                <input
                  className="search-input"
                  type="text"
                  id="search-query"
                  placeholder="Search"
                  name="q"
                  autocomplete="off"
                  spellcheck="false"
                  aria-autocomplete="list"
                  aria-haspopup="true"
                  aria-controls="typeahead-dropdown-14"
                  dir="ltr"
                />
              </form>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
