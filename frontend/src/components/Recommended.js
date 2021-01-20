import React from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Recommended = () => {
  const product = {};
  return (
    <div>
      <Row>
        <Col>
          <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`}>
              <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
              <Link to={`/products/${product._id}`}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="div">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
                <Card.Text as="h3">${product.price}</Card.Text>
              </Card.Text>
            </Card.Body>
            <Button>Add To Cart</Button>
          </Card>
        </Col>
        <Col>
          <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`}>
              <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
              <Link to={`/products/${product._id}`}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="div">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
                <Card.Text as="h3">${product.price}</Card.Text>
              </Card.Text>
            </Card.Body>
            <Button>Add To Cart</Button>
          </Card>
        </Col>
        <Col>
          <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`}>
              <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
              <Link to={`/products/${product._id}`}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="div">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
                <Card.Text as="h3">${product.price}</Card.Text>
              </Card.Text>
            </Card.Body>
            <Button>Add To Cart</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`}>
              <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
              <Link to={`/products/${product._id}`}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="div">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
                <Card.Text as="h3">${product.price}</Card.Text>
              </Card.Text>
            </Card.Body>
            <Button>Add To Cart</Button>
          </Card>
        </Col>
        <Col>
          <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`}>
              <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
              <Link to={`/products/${product._id}`}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="div">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
                <Card.Text as="h3">${product.price}</Card.Text>
              </Card.Text>
            </Card.Body>
            <Button>Add To Cart</Button>
          </Card>
        </Col>
        <Col>
          <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`}>
              <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
              <Link to={`/products/${product._id}`}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="div">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
                <Card.Text as="h3">${product.price}</Card.Text>
              </Card.Text>
            </Card.Body>
            <Button>Add To Cart</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Recommended;
