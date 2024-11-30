import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.css'
import { useContextGlobal } from '../Context/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <nav className={state.theme== "light" ? 'light' : 'dark'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <h2><span className='first-letter'>D</span>H Odonto</h2>
      <div className='links-container'>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        <Link to="/fav">
          <h4>Favs</h4>
        </Link>
        <button 
          className='change-theme'
          onClick={() => dispatch({type: "CHANGE_THEME"})}
        >
          Change theme
          </button>
      </div>
    </nav>
  )
}

export default Navbar