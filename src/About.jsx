import React from "react";
import Navbar from "./components/Navbar";
import iconPerfil from "/assets/iconos/icon-about.svg";
import imgPerfil from "/assets/perfil_user.png";

const About = () => {
  return (
    <>
      <Navbar />
      <section id="about">
        <div className="row">
          <div className="about-item">
            <div className="about-content-title">
              <img
                className="profile-pic"
                src={iconPerfil}
                alt="icono de user"
              />
              <h1>Sobre Mí</h1>
            </div>
            <div className="about-content-bio">
              <div className="about-title">
                <p>Soy Vladimir pero mis amigos me dicen Vladiii.</p>
                <p>
                  Me considero una persona apasionada por las tecnologías y la
                  programación,{" "}
                  <span>
                    mis stack favoritos son JavaScript, React, React Native,
                    NextJS, Android y MySQL.
                  </span>
                </p>
                <p>
                  En mis tiempos libres me dedico a crear proyectos personales y
                  compartir con la comunidad de programadores.
                </p>
              </div>
              <div>
                <img
                  className="about-perfil"
                  src={imgPerfil}
                  alt="imagen de perfil"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
