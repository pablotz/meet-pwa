import React from "react";
import '../../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import UTL from '../../assets/img/utl_logo.png'



const Navbar = () => {
  return (
    <div class="topnav">
      <NavLink to="/">
      <img className="navbar-img" src={UTL} />
      </NavLink>
      <NavLink className="navbar-option" to="/guests">Participantes</NavLink>
      <NavLink className="navbar-option" to="/add-guest">Agregar participante</NavLink>
    </div>
  );
};

export default Navbar;
