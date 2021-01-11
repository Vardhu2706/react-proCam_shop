// Helper Imports
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// Component Imports

// Functional Component
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProCam Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i>
                Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
// Export
// Default Export
export default Header;
