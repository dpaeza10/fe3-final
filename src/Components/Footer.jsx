import React from 'react'
import dhLogo from '../../public/images/DH.png'
import { useContextGlobal } from '../Context/global.context';
// Preguntar si el footer tambien debe cambair de tema
const Footer = () => {

  const { state } = useContextGlobal();

  return (
    <footer className={state.theme == "dark" ? "dark" : undefined}>
        <img src={dhLogo} alt='DH-logo' />
    </footer>
  )
}

export default Footer