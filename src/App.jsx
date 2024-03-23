import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Contact from "./components/Navbar/Contact";
import Footer  from "./components/pages/Footer";
import Projetsseule from "./components/Navbar/Projetsseule";
import Projetsformation from "./components/Navbar/Projetsformation";
import HomePage from "./components/pages/HomePage";
import Langages from "./components/Navbar/Langages";
import Skull from "./components/pages/Skull";

import "./App.css";

function App() {
  return (
    <Router>  
      <Navbar />
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetsseule" element={<Projetsseule />} />
          <Route path="/projetsformation" element={<Projetsformation />} />
          <Route path="/langagesétudiés" element={<Langages />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;


src/components/Navbar/Navbar.jsx