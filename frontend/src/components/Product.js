import React from "react";
// Helper Imports
import { Card } from "react-bootstrap";
// Component Imports
import Rating from "../components/Rating";
// Functional Component
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Export
//
export default Product;
