import { Link, useNavigate } from "react-router-dom";

function Langages() {

  const navigate=navigate("./Langages");

    return (
      <div className="Langages">
        <h1>Langages étudiés</h1>
        <Link to="/Langages">

        </Link>

      </div>
    );
  }
  export default Langages;