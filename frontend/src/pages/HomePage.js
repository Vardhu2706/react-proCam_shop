// Helpers Imports
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// Component/File Imports
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Categories from "../components/Categories";
import Recommended from "../components/Recommended";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>CAMERA GEAR CATEGORIES</h1>
      <Categories />
      <h1>RECOMMENDED PRODUCTS</h1>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} ex={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )} */}
      <Recommended />
      <Message variant="alert alert-primary" className="social_banner">
        <h4>Follow us on social media!</h4>
        <div>
          <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/"
            target="_blank"
          >
            <i className="fab fa-twitter-square fa-2x"></i>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <i className="fab fa-instagram-square fa-2x"></i>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.pinterest.com/"
            target="_blank"
          >
            <i className="fab fa-pinterest-square fa-2x"></i>
          </a>
        </div>
      </Message>
    </>
  );
};

export default HomePage;
