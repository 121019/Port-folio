import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
//import PersonnalProjects from "./Navbar/PersonnalProjects";
//import Technology from "./Navbar/Technology";

//import Projetsformation from "./Projetsformation";
//import Contact from "./Contact";


function Navbar() {
  const links = [
    { path: "/", text: "Accueil" },
    { path: "/PersonnalProjects", text: "Projets personnels" },
    { path: "/projetsformation", text: "Projets réalisés en formation" },
    { path: "/Technology", text: "Technologies étudiées" },
    { path: "/contact", text: "Me contacter" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-links">
        {links.map((link, index) => (
          <div key={index}>
            <Link to={link.path}>{link.text}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

 
