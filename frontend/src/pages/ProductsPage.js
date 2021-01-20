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

const ProductsPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>All Products</h1>

      {loading ? (
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
      )}
    </>
  );
};

export default ProductsPage;
