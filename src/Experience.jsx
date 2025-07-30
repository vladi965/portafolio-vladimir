import Navbar from "./components/Navbar";
import iconExperience from "/assets/iconos/icon-experience.svg";
import { experiences } from "./data/info";

const Experience = () => {
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
