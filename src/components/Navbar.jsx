import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vs-white.png";

const Navbar = () => {
  return (
    <nav id="nav-wrap">
      <div className="content-image">
        <img src={logo} alt="Logo del Portafolio" />
      </div>
      <div>
        <ul id="nav" className="nav">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre Mi</Link>
          </li>
          <li>
            <Link to="/experience">Experiencia</Link>
          </li>
          <li>
            <Link to="/project">Proyectos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
