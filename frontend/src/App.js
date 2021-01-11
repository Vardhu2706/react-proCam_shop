// Helper Imports
import React from "react";
import { Container } from "react-bootstrap";
// Component Imports
import Header from "./components/Header";
import Footer from "./components/Footer";
// Functional Component
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProCam Shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};
// Exports
// Export Default
export default App;
