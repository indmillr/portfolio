import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <Home />
        <About />
        <Projects />
        <Contact />
      </Router>
    </div>
  );
}
