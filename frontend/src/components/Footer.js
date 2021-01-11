// Helper Imports
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Container Imports
// Functional Component
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; ProCam Shop</Col>
        </Row>
      </Container>
    </footer>
  );
};
// Exports
// Default Export
export default Footer;
