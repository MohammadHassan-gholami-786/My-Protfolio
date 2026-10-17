import "./index.css"; 
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-container">
      
        <nav className="navbar">
          <div className="navbar-content">
            <span className="developer-logo">M.HASSAN<span className="logo-dot">.DEV</span></span>
            <div className="nav-links">
              <Link to="/" className="nav-item">Home</Link>
              <Link to="/about" className="nav-item">About</Link>
              <Link to="/projects" className="nav-item">Projects</Link>
              <Link to="/skills" className="nav-item">Skills</Link>
              <Link to="/contact" className="nav-item">Contact</Link>
            </div>
          </div>
        </nav>

   
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>


        <footer className="portfolio-footer">
          <div className="footer-card-content">
            <p>© 2026 Mohammad Hassan Gholami. All Rights Reserved.</p>
            <p className="footer-subtext">Designed & Engineered with React & Custom CSS</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
