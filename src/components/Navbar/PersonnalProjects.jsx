import React from "react";
import { Link, useNavigate } from "react-router-dom";


function PersonnalProjects() {
    return (
      <><div className="Personnalprojects">
       
      </div> 
      <div className="right-projetspersonnal">
      <Link to="/projetsformation">
          <h1>Projets personnels</h1>
              <a href= "P1 - Boule 8"></a>
              <a href= "P2 - Port-folio"></a>
              <a href= "P3 - Calcul mental"></a>
              <a href= "P4 - E-commerce"></a>
              <a href= "P5 -  "></a>

          </Link> 
        </div></>
 
    );
  }
  export default PersonnalProjects;

 