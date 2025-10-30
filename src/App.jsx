import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


function App() {
  return (
    <Router>
      <div className="">
        {/* ✅ Navbar shows on all pages */}
        <Navbar />

        {/* ✅ Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
