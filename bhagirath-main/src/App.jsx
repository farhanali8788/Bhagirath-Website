import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ── Styles ──
import "./styles/variables.css";
import "./styles/overrides.css";

// ── Layout ──
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// ── Common ──
import WhatsAppFloat from "./components/common/WhatsAppFloat";

// ── Pages ──
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  );
};

export default App;
