// Helpers Imports
import React from "react";
import { Row, Col } from "react-bootstrap";
// Component/File Imports
import products from "../products";
import Product from "../components/Product";

const HomePage = () => {
  return (
    <>
      <h1>Latest Camera Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} ex={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
