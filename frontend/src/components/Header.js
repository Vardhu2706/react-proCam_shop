// Helper Imports
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// Component Imports

// Functional Component
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* Using Link Container to remove reload animation. */}
          <LinkContainer to="/">
            <Navbar.Brand>ProCam Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <LinkContainer to="products/battery-grips">
                  <NavDropdown.Item>Battery Grips</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="products/drives-and-storage">
                  <NavDropdown.Item>Drives & Storage</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="products/flashes">
                  <NavDropdown.Item>Flashes</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="products/flash-triggers">
                  <NavDropdown.Item>Flash Triggers</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="products/lenses">
                  <NavDropdown.Item>Lenses</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="products/light-modifiers">
                  <NavDropdown.Item>Light Modifiers</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="products/studio-lights">
                  <NavDropdown.Item>Studio Lights</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="products/teleconverters">
                  <NavDropdown.Item>Teleconverters</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link h>
                  <i className="fas fa-user"></i>
                  Sign In
                </Nav.Link>
              </LinkContainer>
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
