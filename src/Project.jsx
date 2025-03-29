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
      image: "/assets/portfolio/saas-with-ai.png",
      nameOneSkill: "Next",
      iconOneSkill: "/assets/stacks/icon-next.png",
      nameTwoSkill: "React",
      iconTwoSkill: "/assets/stacks/icon-react.png",
      nameThreeSkill: "TailwindCSS",
      iconThreeSkill: "/assets/stacks/icon-tailwindcss.png",
      codeTitle: "Code",
      codeImage: "/assets/iconos/icon-github.svg",
      codeImageHover: "/assets/iconos/icon-github-green.svg",
      codeUrl:
        "https://github.com/vladi965/Chat-with-PDF-AI-SAAS-Challenge-App",
      previewTitle: "Preview",
      previewImage: "/assets/iconos/icon-preview.svg",
      previewImageHover: "/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://chat-with-pdf-challenge-teal.vercel.app/",
    },
    {
      id: "landing",
      titleProject: "Edusity",
      description:
        "El proyecto consiste en la creación de una landing page que contiene información de los about, campus, program, testimonials...",
      image: "/assets/portfolio/edusity.png",
      nameOneSkill: "React",
      iconOneSkill: "/assets/stacks/icon-react.png",
      nameTwoSkill: "TailwindCSS",
      iconTwoSkill: "/assets/stacks/icon-tailwindcss.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/assets/iconos/icon-github.svg",
      codeImageHover: "/assets/iconos/icon-github-green.svg",
      codeUrl: "https://github.com/vladi965/Website-Edusity-React",
      previewTitle: "Preview",
      previewImage: "/assets/iconos/icon-preview.svg",
      previewImageHover: "/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://edusity-blush-nine.vercel.app/",
    },
    {
      id: "landing",
      titleProject: "VirtualR",
      description:
        "El proyecto consiste en la creación de una landing page que contiene información de features, workflow, pricing, testimonials...",
      image: "/assets/portfolio/virtualR.png",
      nameOneSkill: "React",
      iconOneSkill: "/assets/stacks/icon-react.png",
      nameTwoSkill: "TailwindCSS",
      iconTwoSkill: "/assets/stacks/icon-tailwindcss.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/assets/iconos/icon-github.svg",
      codeImageHover: "/assets/iconos/icon-github-green.svg",
      codeUrl: "https://github.com/vladi965/landingPage_VirtualR",
      previewTitle: "Preview",
      previewImage: "/assets/iconos/icon-preview.svg",
      previewImageHover: "/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://landing-page-virtual-r.vercel.app/",
    },
    {
      id: "web",
      titleProject: "Portal Transparencia",
      description:
        "El proyecto consiste en la mejora de la plataforma de transparencia BN, aplicando nuevos diseños en iconos...",
      image: "/assets/portfolio/transparencia.png",
      nameOneSkill: "HTML5",
      iconOneSkill: "/assets/stacks/icon-html.png",
      nameTwoSkill: "CSS3",
      iconTwoSkill: "/assets/stacks/icon-css.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/assets/iconos/icon-github.svg",
      codeImageHover: "/assets/iconos/icon-github-green.svg",
      codeUrl: "#",
      previewTitle: "Preview",
      previewImage: "/assets/iconos/icon-preview.svg",
      previewImageHover: "/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://www.bn.com.pe/transparenciabn/transparencia.asp",
    },
    {
      id: "web",
      titleProject: "Floreria Encantada",
      description:
        "El proyecto consiste en la creación de una página web conteniendo información de las flores, delivery, los precios...",
      image: "/assets/portfolio/floreria-encantada.png",
      nameOneSkill: "HTML5",
      iconOneSkill: "/assets/stacks/icon-html.png",
      nameTwoSkill: "CSS3",
      iconTwoSkill: "/assets/stacks/icon-css.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/assets/iconos/icon-github.svg",
      codeImageHover: "/assets/iconos/icon-github-green.svg",
      codeUrl: "https://github.com/vladi965/Pagina-Web-Tienda-Floreria",
      previewTitle: "Preview",
      previewImage: "/assets/iconos/icon-preview.svg",
      previewImageHover: "/assets/iconos/icon-preview-green.svg",
      previewUrl: "https://floreria-encantada-demo.netlify.app/",
    },
    {
      id: "web",
      titleProject: "AG Transporte & Serv",
      description:
        "El proyecto consiste en la creación de una página web conteniendo información de los servicios, los transportes, valores...",
      image: "/assets/portfolio/ag-transporte.png",
      nameOneSkill: "HTML5",
      iconOneSkill: "/assets/stacks/icon-html.png",
      nameTwoSkill: "CSS3",
      iconTwoSkill: "/assets/stacks/icon-css.png",
      nameThreeSkill: "JS",
      iconThreeSkill: "/assets/stacks/icon-javascript.png",
      codeTitle: "Code",
      codeImage: "/assets/iconos/icon-github.svg",
      codeImageHover: "/assets/iconos/icon-github-green.svg",
      codeUrl: "https://github.com/vladi965/Pagina-Web-AG",
      previewTitle: "Preview",
      previewImage: "/assets/iconos/icon-preview.svg",
      previewImageHover: "/assets/iconos/icon-preview-green.svg",
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
