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
                <a href="home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="../books">Books</a>
              </li>
              <li>
                <a href="#">My Bookshelf</a>
              </li>
              <li>
                <a href="../about">About us</a>
              </li>
              <li>
                <a href="../tools">Admin tools</a>
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
