import React from "react";
import docImage from "../../public/images/doctor.jpg"
import '../Styles/card.css'
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Context/global.context";

const Card = ({ name, username, id }) => {

  const { dispatch } = useContextGlobal();

  const addFav = ()=>{
    dispatch({ type: "TOOGLE_FAV", payload: { name, username, id } });
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/detail/${id}`}>
          <figure>
            <img src={docImage} alt="doctor picture" />
          </figure>
          <h3>{name}</h3>
          <h4>{username}</h4>
        </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;