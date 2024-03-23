import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Technology() {
  return (
    <div className="Technology">
      <h1>Technologies étudiées</h1>
      <p>
        Git bash <br />
        Windows power shell <br />
        Ubuntu <br />
        Javascript <br />
        Html <br />
        css <br />
        Github <br />
        Mysql <br />
        Mysql2 <br />
        Postman <br />
        Cypres <br />
        EsLint <br />
        Prettier <br />
      </p>
      <Link to="/Technology">Voir les langages étudiés</Link>
    </div>
  );
}

export default Technology;