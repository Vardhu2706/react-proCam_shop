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
// Functional Component
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
// Exports
// Export Default
export default App;
