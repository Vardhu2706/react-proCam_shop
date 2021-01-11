// Helper Imports
import React from "react";
import { Container } from "react-bootstrap";
// Component Imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
// Functional Component
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
};
// Exports
// Export Default
export default App;
