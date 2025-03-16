import React from "react";
import Navbar from "./components/Navbar";
import iconExperience from "./assets/iconos/icon-experience.svg";
import imgPerfil from "./assets/perfil_user.png";
const Experience = () => {
  const experiences = [
    {
      title: "Freelance",
      company: "-",
      date: "Ene 2025 - Mar 2025",
      description:
        "Desarrollo de páginas web y aplicaciones web utilizando tecnologías de HTML, CSS, JavaScript, React, TailwindCSS, React Router, NPM, Shadcn y Lucide para crear interfaces amigables e interactivas. Optimización de rendimiento de las plataformas e integración de APIs para mejorar la comunicación entre Front y Back. Colaboración con clientes para mejorar la interfaz de usuario (UI) y la experiencia (UX).",
    },
    {
      title: "Locador de Servicios",
      company: "Banco de la Nación",
      date: "Ene 2024 - Mar 2024",
      description:
        "Analicé y segmenté contenidos para la plataforma de Transparencia del Banco de la Nación, diseñé prototipos responsive y desarrollé plantillas en HTML, CSS3 y JavaScript. También implementé mejoras en SEO y elaboré informes sobre la optimización de la plataforma y la migración de contenidos.",
    },
    {
      title: "Locador de Servicios",
      company: "Banco de la Nación",
      date: "Set 2023 - Nov 2023",
      description:
        "Analicé y segmenté contenidos para la plataforma de Transparencia del Banco de la Nación, diseñé prototipos responsive y desarrollé plantillas en HTML, CSS3 y JavaScript. También implementé mejoras en SEO y elaboré informes sobre la optimización de la plataforma y la migración de contenidos.",
    },
    {
      title: "Practicante Profesional",
      company: "Banco de la Nación",
      date: "Set 2022 - Set 2023",
      description:
        "Me encargué de la publicación y actualización de noticias y canales de atención en la web del Banco de la Nación. Optimicé la plataforma de noticias, asegurando su diseño responsive para una mejor experiencia en dispositivos móviles. Colaboré en la migración de productos y servicios del Banco a Gob.pe, coordinando con distintas áreas para validar la información y gestionar la carga de contenido en el CMS de Gob.pe.",
    },
  ];

  return (
    <>
      <Navbar />
      <section id="experience">
        <div className="row">
          <div className="experience-item">
            <div className="experience-content-title">
              <img
                className="profile-pic"
                src={iconExperience}
                alt="icono de user"
              />
              <h1>Experiencia</h1>
            </div>
            <div className="experience-info">
              {experiences.map((experience, index) => (
                <div className="container-experience" key={index}>
                  <div
                    className={`timeline-marker ${index === 0 ? "active" : ""}`}
                  ></div>
                  <div className="experience-content">
                    <div className="experience-box-info">
                      <h3>{experience.title}</h3>
                      <p>{experience.company}</p>
                      <span>{experience.date}</span>
                    </div>
                    <div className="experience-box-description">
                      <p>{experience.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
