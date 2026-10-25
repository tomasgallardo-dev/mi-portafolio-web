import { projects } from "../../data/projects.js";
import "./Projects.css";

function getHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "github.com";
  }
}

function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Proyectos</p>
          <h2 className="section-title">Trabajo que habla por sí solo</h2>
          <p className="section-subtitle">
            Una selección de proyectos donde combiné interfaz, lógica y experiencia de usuario.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project${index % 2 === 1 ? " project--reverse" : ""}`}
            >
              <div className="project-media">
                <div className="browser-frame">
                  <div className="browser-bar">
                    <span className="browser-dots" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="browser-url">
                      <i className="fa-solid fa-lock" aria-hidden="true" />
                      {getHostname(project.demo || project.code)}
                    </span>
                    {project.demo && (
                      <span className="browser-live">
                        <span aria-hidden="true" />
                        En vivo
                      </span>
                    )}
                  </div>
                  <div className="browser-shot">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width="1200"
                      height="560"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-highlight">{project.highlight}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-tech" aria-label={`Tecnologías de ${project.title}`}>
                  {project.tech.map((tech) => (
                    <li className="chip" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.demo && (
                    <a
                      className="btn btn-primary btn-sm"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver sitio
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    </a>
                  )}
                  <a
                    className={`btn btn-sm ${project.demo ? "btn-ghost" : "btn-primary"}`}
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver código
                    <i className="fa-brands fa-github" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
