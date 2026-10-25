import { education, experience } from "../../data/experience.js";
import "./Resume.css";

function TimelineItem({ children }) {
  return <article className="timeline-item">{children}</article>;
}

function Resume() {
  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Experiencia</p>
          <h2 className="section-title">Recorrido profesional y formación</h2>
          <p className="section-subtitle">
            De la operación ferroviaria al desarrollo de software: disciplina, trabajo en equipo y
            foco en resultados.
          </p>
        </div>

        <div className="experience-grid">
          <div className="timeline-column">
            <h3 className="timeline-title">
              <i className="fa-solid fa-briefcase" aria-hidden="true" />
              Experiencia laboral
            </h3>

            <div className="timeline">
              {experience.map((job) => (
                <TimelineItem key={`${job.company}-${job.role}`}>
                  <div className="timeline-card">
                    <div className="timeline-head">
                      <h4>{job.role}</h4>
                      <span className="timeline-period">{job.period}</span>
                    </div>
                    <p className="timeline-company">{job.company}</p>
                    <p className="timeline-description">{job.description}</p>
                    <ul className="timeline-achievements">
                      {job.achievements.map((achievement) => (
                        <li key={achievement}>
                          <i className="fa-solid fa-check" aria-hidden="true" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>

          <div className="timeline-column">
            <h3 className="timeline-title">
              <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
              Educación
            </h3>

            <div className="timeline">
              {education.map((item) => (
                <TimelineItem key={item.title}>
                  <div className="timeline-card">
                    <div className="timeline-head">
                      <h4>{item.title}</h4>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <p className="timeline-company">{item.institution}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
