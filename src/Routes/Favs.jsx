import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from '../Context/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();
  const favs = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <section className={state.theme === "dark" && "dark"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((fav) => (
          <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
        ))}
      </div>
    </section>
  );
};

export default Favs;