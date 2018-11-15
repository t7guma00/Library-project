import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

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
            <NavLink href="#">My Bookshelf</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Log Out</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}