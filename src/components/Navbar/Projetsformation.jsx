import { Link, useNavigate } from "react-router-dom";
import React from "react";


function Projetsformation() {
  const navigate=useNavigate();

    return (
        <div className= "Projetsformation"> 
         <Link to="/projetsformation">
              <h1>Projets en formation</h1>
              {/*projets*/}
         </Link>     
        </div>
    );
  }
  export default Projetsformation;
