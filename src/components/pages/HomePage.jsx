import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";   

function HomePage() {
  const navigate = useNavigate();

 

  return (// ajouter capture ecran des projets 
    <div className="home-page">
      <h1>Cathy Aelbrecht</h1>
      
        <div className="left-projetsformation">
          <a href ="https://www.youtube.com/" alt ="">Projet 1 : P1 - Quizz</a>
          <a href ="https://www.youtube.com/" alt ="">Projet 2 : P2 - Site ebooks</a>
          <a href ="https://www.youtube.com/" alt ="">Projet 3 : Site d'offres d'emploi</a>
        </div>
        <br/>
        <div className="right-projetsseule">
          <a href ="https://www.youtube.com/" alt ="">Projet 4 : Boule 8</a>
          <a href ="https://www.youtube.com/" alt ="">Projet 5 : Porte - folio</a>
          <a href ="https://www.youtube.com/" alt ="">Projet 6 : </a>
      </div>
</div>
  );
}

export default HomePage;