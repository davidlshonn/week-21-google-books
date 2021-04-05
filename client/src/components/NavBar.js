import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar>
          <Navbar.Brand>Books</Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/savedbooks">Saved</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
