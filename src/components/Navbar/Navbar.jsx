import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
//import Langages from "./components/Navbar/Langages";
//import Projetsformation from "./Projetsformation";
//import Projetsseule from "./Projetsseule";
//import Contact from "./Contact";


function Navbar() {
    const navigate=useNavigate();

    const navbar = () => {
        // Implémentez votre logique de navigation ici
      };

    const links = [
        {path:"/", text:"Accueil "},
        {path:"/projetsseule", text:"projets réalisés seule"},
        {path:"/projetsFormation", text:"Projets réalisés en formation"},
        {path:"/Langages", text:"Langages étudiés"},

        {path:"/contact", text: "Me contacter"},
    ];
    <nav className="navbar">
    <div className="nav-links">
      {links.map((link, index) => (
        <div key={link}>
          <Link to={link.path}
            onClick={navbar}>
          {link.text}
          </Link>
        </div>
      ))}
    </div>
  </nav>

  //Formulaire contact

  src/components/Navbar/Navbar.css

}
export default Navbar;
