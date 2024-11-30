import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Context/global.context'
import '../Styles/home.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContextGlobal();

  return (
    <main className={state.theme == "dark" ? "dark" : ""} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.docs.map((doc) => (
          <Card key={doc.id} name={doc.name} username={doc.username} id={doc.id} />
        ))}
      </div>
    </main>
  )
}

export default Home