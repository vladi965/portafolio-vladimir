import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "/assets/vs-white.png";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  // Sincronizar el tab activo con la ruta actual
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveTab("home");
    else if (path === "/about") setActiveTab("about");
    else if (path === "/experience") setActiveTab("experience");
    else if (path === "/project") setActiveTab("project");
    else if (path === "/contact") setActiveTab("contact");
  }, [location]);

  // Manejar clic sin recargar
  const handleTabClick = (tabName, e) => {
    e.preventDefault();
    setActiveTab(tabName);
    // Navegación programatica sin recargar
    window.history.pushState({}, "", tabName === "home" ? "/" : `/${tabName}`);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <>
      <nav id="nav-wrap">
        <div className="content-image">
          <img src={logo} alt="Logo del Portafolio" />
        </div>
        <div className="content-nav">
          <ul id="nav" className="nav">
            <li>
              <NavLink to="/" end>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">Sobre Mi</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experiencia</NavLink>
            </li>
            <li>
              <NavLink to="/project">Proyectos</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Bottom Tabs para mobile */}
      <div className="bottom-tabs">
        <a
          href="/"
          className={`tab ${activeTab === "home" ? "active" : ""}`}
          onClick={(e) => handleTabClick("home", e)}
        >
          <FaHome className="tab-icon" />
          <span className="tab-text">Inicio</span>
        </a>
        <a
          href="/about"
          className={`tab ${activeTab === "about" ? "active" : ""}`}
          onClick={(e) => handleTabClick("about", e)}
        >
          <FaUser className="tab-icon" />
          <span className="tab-text">Sobre Mi</span>
        </a>
        <a
          href="/experience"
          className={`tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={(e) => handleTabClick("experience", e)}
        >
          <FaBriefcase className="tab-icon" />
          <span className="tab-text">Experiencia</span>
        </a>
        <a
          href="/project"
          className={`tab ${activeTab === "project" ? "active" : ""}`}
          onClick={(e) => handleTabClick("project", e)}
        >
          <FaProjectDiagram className="tab-icon" />
          <span className="tab-text">Proyectos</span>
        </a>
        <a
          href="/contact"
          className={`tab ${activeTab === "contact" ? "active" : ""}`}
          onClick={(e) => handleTabClick("contact", e)}
        >
          <FaEnvelope className="tab-icon" />
          <span className="tab-text">Contacto</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
