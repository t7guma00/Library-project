import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/AllBooks">All Books</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/signin'>Sign In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/signup'>Sign Up</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
