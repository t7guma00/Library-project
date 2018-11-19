import React from "react";
import "./Header.css";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="wrapper">
          <nav role="navigation">
            <ul>
              <li class="active">
                <a href="#" class="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">My Bookshelf</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </nav>
          <ul class="utilities">
            <li>
              <form>
                <input
                  class="search-input"
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
