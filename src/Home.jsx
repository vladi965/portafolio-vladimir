import React from "react";
import Navbar from "./components/Navbar";
import perfilImg from "./assets/img-perfil.png";
import handImg from "./assets/img-mano.png";
import iconLinkedln from "./assets/iconos/icon-linkedln.svg";
import iconGithub from "./assets/iconos/icon-github.svg";
import iconJavascript from "./assets/iconos/javascript.svg";
import iconNext from "./assets/iconos/nextjs.svg";
import iconHtml from "./assets/iconos/html.svg";
import iconCss from "./assets/iconos/css.svg";
import iconReact from "./assets/iconos/reactjs.svg";

const Home = () => {
  return (
    <header>
      <Navbar />
      <div className="banner">
        <div className="banner-text">
          <div className="banner-content-previus">
            <img
              className="profile-previus"
              src={perfilImg}
              alt="Vladimir Profile"
            />
            <div className="banner-border-box">
              <p>¿En qué te puedo ayudar?</p>
              <img
                className="profile-pic"
                src={handImg}
                alt="icono de una mano saludando"
              />
            </div>
          </div>
          <h1 className="responsive-headline">
            Hola, soy <span>Vladimir</span>{" "}
          </h1>
          <h1 className="responsive-headline">Desarrollador Frontend</h1>
          <h3>
            Especializado en la creación y desarrollo de aplicaciones web y
            móviles.
          </h3>
          <ul className="social">
            <li>
              <a href="#">
                <img src={iconLinkedln} alt="imagen de Linkedln" />
                Mi Linkedln
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconGithub} alt="imagen de Github" />
                Mi Github
              </a>
            </li>
          </ul>
        </div>
        {/* Habilidades */}
        <div className="skillContainer">
          <h2>Mis Habilidades</h2>
          <div className="skill-technology">
            <ul id="nav-skill">
              <li>
                <img src={iconJavascript} alt="imagen de JavaScript" />
              </li>
              <li>
                <img src={iconNext} alt="imagen de Nextjs" />
              </li>
              <li>
                <img src={iconHtml} alt="imagen de Html" />
              </li>
              <li>
                <img src={iconCss} alt="imagen de Css" />
              </li>
              <li>
                <img src={iconReact} alt="imagen de React" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
