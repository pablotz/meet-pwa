import React from 'react'
import '../styles/home.css'
import Congreso from '../assets/img/congreso.png'
import UTL from '../assets/img/utl_logo.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-page">
            <div className="utl-section">
                <img className="utl-logo" src={UTL} alt="utl"/>
                <h1>Congreso de Tecnologías de la información</h1>
            </div>
            <div className="congreso-section">
                <img className="congreso" src={Congreso} alt="congreso"/>
                <NavLink className="goto-contacts" to="/guests"> Entrar </NavLink>
            </div>
        </div>
    )
}

export default Home
