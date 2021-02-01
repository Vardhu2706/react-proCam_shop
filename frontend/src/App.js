// Helper Imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// Components/Files Imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage"
// Functional Component
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Route path="/shipping" component={ShippingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/" component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
// Exports
// Export Default
export default App;
