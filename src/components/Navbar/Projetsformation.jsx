import { Link, useNavigate } from "react-router-dom";
import React from "react";


function Projetsformation() {
  const navigate=useNavigate();

    return (
        <div className= "Projetsformation"> 
         <Link to="/projetsformation">
              <h1>Projets réalisés en formation</h1>
              <a href= "P1 - Quizz"></a>
              <a href= "P1 - E-books"></a>
              <a href= "P1 - Externatic"></a>
              <a href= "P1 - Viking"></a>
              <a href= "P1 - La bonne bouffe"></a>
         </Link>     
        </div>
    );
  }
  export default Projetsformation;
