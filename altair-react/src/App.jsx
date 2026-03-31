import React from "react";
import "./styles/variables.css";
import "./styles/overrides.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import Home from "./pages/Home";

const App = () => (
  <>
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default App;
