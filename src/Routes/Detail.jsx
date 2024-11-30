import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Context/global.context';
import { useEffect, useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const { state } = useContextGlobal();
  const [dentist, setDentist] = useState({});

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios.get(url)
      .then((res) => {
        setDentist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <section className={state.theme == "dark" ? "dark" : undefined}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      { dentist && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  )
}

export default Detail