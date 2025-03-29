import React from "react";
import Navbar from "./components/Navbar";
import iconExperience from "/assets/iconos/icon-experience.svg";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance",
      company: "CROMO PERU SAC",
      date: "Ene 2025 - Mar 2025",
      description:
        "Desarrollé un chatbot con un menú de opciones (catálogo digital, cotización, servicios, preguntas frecuentes y más), ademas se agrego la validación de RUC y DNI, permitiendo continuar solo a empresas en estado ACTIVO. Agregué una funcionalidad de cotización donde los clientes ingresan datos y reciben el documento por correo, con opción de adjuntar imágenes.",
    },
    {
      title: "Locador de Servicios",
      company: "Banco de la Nación",
      date: "Ene 2024 - Mar 2024",
      description:
        "Realicé un análisis de la plataforma de Transparencia BN, mapeando y segmentando contenidos. Diseñé prototipos de interfaz en Figma para escritorio, tablet y móvil. Desarrollé las plantillas responsivas con HTML, CSS3 y JavaScript y ademas implementé SEO en las plantillas y optimicé su rendimiento.",
    },
    {
      title: "Locador de Servicios",
      company: "Banco de la Nación",
      date: "Set 2023 - Nov 2023",
      description:
        "Realice la verificación de la relación de páginas y archivos de los productos y/o servicios de la plataforma de Banco de la Nación, ademas se hizo el mapeo y segmentación de los contenidos de los productos y/o servicios. Coordinación con las áreas correspondientes del banco y la relación de carga de formularios, formatos y documentos relacionados.",
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
