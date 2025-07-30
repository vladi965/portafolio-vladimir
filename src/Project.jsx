import Navbar from "./components/Navbar";
import iconProject from "/assets/iconos/icon-proyects.svg";
import { projects } from "./data/project";

const Project = () => {
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
