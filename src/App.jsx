import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Contact from "./components/Navbar/Contact";
import Footer  from "./components/pages/Footer";
import PersonnalProjects from "./components/Navbar/PersonnalProjects";
import Projetsformation from "./components/Navbar/Projetsformation";
import HomePage from "./components/pages/HomePage";
import Technology from "./components/Navbar/Technology";
import Skull from "./components/pages/Skull";

import "./App.css";

function App() {
  return (
    <Router>  
      <Navbar />
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PersonnalProjects" element={<PersonnalProjects />} /> 
          <Route path="/projetsformation" element={<Projetsformation />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;


