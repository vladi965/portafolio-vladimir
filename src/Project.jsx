import React, { useState } from "react";
import Navbar from "./components/Navbar";
import iconProject from "./assets/iconos/icon-proyects.svg";

const Project = ({ data }) => {
  const projects = [
    {
      id: "app",
      titleProject: "Chat PDF AI SAAS",
      description:
        "El proyecto consiste en la creación de un SaaS que utiliza IA para permitir a los usuarios subir múltiples archivos...",
      image: "/src/assets/portfolio/saas-with-ai.png",
      nameOneSkill: "Next",
      iconOneSkill: "/src/assets/stacks/icon-next.png",
      nameTwoSkill: "React",
      iconTwoSkill: "/src/assets/stacks/icon-react.png",
      nameThreeSkill: "TailwindCSS",
      iconThreeSkill: "/src/assets/stacks/icon-tailwindcss.png",
      codeTitle: "Code",
      codeImage: "/src/assets/iconos/icon-github.svg",
      codeImageHover: "/src/assets/iconos/icon-github-green.svg",
      codeUrl:
        "https://github.com/vladi965/Chat-with-PDF-AI-SAAS-Challenge-App",
      previewTitle: "Preview",
      previewImage: "/src/assets/iconos/icon-preview.svg",
      previewImageHover: "/src/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://chat-with-pdf-challenge-teal.vercel.app/",
    },
    {
      id: "landing",
      titleProject: "Edusity",
      description:
        "El proyecto consiste en la creación de una landing page que contiene información de los about, campus, program, testimonials...",
      image: "/src/assets/portfolio/edusity.png",
      nameOneSkill: "React",
      iconOneSkill: "/src/assets/stacks/icon-react.png",
      nameTwoSkill: "TailwindCSS",
      iconTwoSkill: "/src/assets/stacks/icon-tailwindcss.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/src/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/src/assets/iconos/icon-github.svg",
      codeImageHover: "/src/assets/iconos/icon-github-green.svg",
      codeUrl: "https://github.com/vladi965/Website-Edusity-React",
      previewTitle: "Preview",
      previewImage: "/src/assets/iconos/icon-preview.svg",
      previewImageHover: "/src/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://edusity-blush-nine.vercel.app/",
    },
    {
      id: "landing",
      titleProject: "VirtualR",
      description:
        "El proyecto consiste en la creación de una landing page que contiene información de features, workflow, pricing, testimonials...",
      image: "/src/assets/portfolio/virtualR.png",
      nameOneSkill: "React",
      iconOneSkill: "/src/assets/stacks/icon-react.png",
      nameTwoSkill: "TailwindCSS",
      iconTwoSkill: "/src/assets/stacks/icon-tailwindcss.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/src/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/src/assets/iconos/icon-github.svg",
      codeImageHover: "/src/assets/iconos/icon-github-green.svg",
      codeUrl: "https://github.com/vladi965/landingPage_VirtualR",
      previewTitle: "Preview",
      previewImage: "/src/assets/iconos/icon-preview.svg",
      previewImageHover: "/src/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://landing-page-virtual-r.vercel.app/",
    },
    {
      id: "web",
      titleProject: "Portal Transparencia",
      description:
        "El proyecto consiste en la mejora de la plataforma de transparencia BN, aplicando nuevos diseños en iconos...",
      image: "/src/assets/portfolio/transparencia.png",
      nameOneSkill: "HTML5",
      iconOneSkill: "/src/assets/stacks/icon-html.png",
      nameTwoSkill: "CSS3",
      iconTwoSkill: "/src/assets/stacks/icon-css.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/src/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/src/assets/iconos/icon-github.svg",
      codeImageHover: "/src/assets/iconos/icon-github-green.svg",
      codeUrl: "#",
      previewTitle: "Preview",
      previewImage: "/src/assets/iconos/icon-preview.svg",
      previewImageHover: "/src/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://www.bn.com.pe/transparenciabn/transparencia.asp",
    },
    {
      id: "web",
      titleProject: "Floreria Encantada",
      description:
        "El proyecto consiste en la creación de una página web conteniendo información de las flores, delivery, los precios...",
      image: "/src/assets/portfolio/floreria-encantada.png",
      nameOneSkill: "HTML5",
      iconOneSkill: "/src/assets/stacks/icon-html.png",
      nameTwoSkill: "CSS3",
      iconTwoSkill: "/src/assets/stacks/icon-css.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/src/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/src/assets/iconos/icon-github.svg",
      codeImageHover: "/src/assets/iconos/icon-github-green.svg",
      codeUrl: "https://github.com/vladi965/Pagina-Web-Tienda-Floreria",
      previewTitle: "Preview",
      previewImage: "/src/assets/iconos/icon-preview.svg",
      previewImageHover: "/src/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://floreria-encantada-demo.netlify.app/",
    },
    {
      id: "web",
      titleProject: "AG Transporte & Serv",
      description:
        "El proyecto consiste en la creación de una página web conteniendo información de los servicios, los transportes, valores...",
      image: "/src/assets/portfolio/ag-transporte.png",
      nameOneSkill: "HTML5",
      iconOneSkill: "/src/assets/stacks/icon-html.png",
      nameTwoSkill: "CSS3",
      iconTwoSkill: "/src/assets/stacks/icon-css.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/src/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/src/assets/iconos/icon-github.svg",
      codeImageHover: "/src/assets/iconos/icon-github-green.svg",
      codeUrl: "https://github.com/vladi965/Pagina-Web-AG",
      previewTitle: "Preview",
      previewImage: "/src/assets/iconos/icon-preview.svg",
      previewImageHover: "/src/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://ag-transporte-refrigerado.vercel.app/",
    },
  ];

  return (
    <>
      <Navbar />
      <section id="portfolio">
        <div className="row">
          <div className="portfolio-item">
            <div className="portfolio-content-title">
              <img
                className="profile-pic"
                src={iconProject}
                alt="icono de project"
              />
              <h1>Proyectos</h1>
            </div>
            <div className="portfolio-info">
              {projects.map((project, index) => (
                <div className="container-experience" key={index}>
                  <div className="experience-content">
                    <div className="experience-card">
                      <div className="experience-item-card">
                        <div className="experience-content-item-card-image">
                          <img
                            className="item-card-image"
                            src={project.image}
                            alt={project.titleProject}
                          />
                        </div>
                        <div className="experience-content-description">
                          <h2>{project.titleProject}</h2>
                          <div className="experience-item-list-skill">
                            <ul id="experience-list-skill">
                              <li>
                                <img
                                  src={project.iconOneSkill}
                                  alt="icono de project"
                                />
                                <span>{project.nameOneSkill}</span>
                              </li>
                              <li>
                                <img
                                  src={project.iconTwoSkill}
                                  alt="icono de project"
                                />
                                <span>{project.nameTwoSkill}</span>
                              </li>
                              <li>
                                <img
                                  src={project.iconThreeSkill}
                                  alt="icono de project"
                                />
                                <span>{project.nameThreeSkill}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="experience-item-description">
                            <p>{project.description}</p>
                          </div>
                          <div className="experience-item-icons">
                            <div className="experience-content-icons">
                              <ul id="nav-code">
                                <li>
                                  <a
                                    target="_blank"
                                    href={project.codeUrl}
                                    title={project.codeTitle}
                                  >
                                    <img
                                      className="icons-general disable"
                                      src={project.codeImage}
                                      alt="icono projects"
                                    />
                                    <img
                                      className="icons-general active"
                                      src={project.codeImageHover}
                                      alt="icono projects"
                                    />
                                    {project.codeTitle}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    href={project.previewUrl}
                                    title={project.previewTitle}
                                  >
                                    <img
                                      className="icons-general disable"
                                      src={project.previewImage}
                                      alt="icono projects"
                                    />
                                    <img
                                      className="icons-general active"
                                      src={project.previewImageHover}
                                      alt="icono projects"
                                    />
                                    {project.previewTitle}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Project;
