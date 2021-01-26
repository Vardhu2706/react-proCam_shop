// Helper Imports
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
// Components/Files Imports

// Functional Component
const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
                <NavDropdown.Divider />
                <LinkContainer to="products/">
                  <NavDropdown.Item>All Products</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
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
