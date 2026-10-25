import { skillGroups, softSkills } from "../../data/skills.js";
import "./Skills.css";

function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Habilidades</p>
          <h2 className="section-title">Herramientas que uso a diario</h2>
          <p className="section-subtitle">
            Niveles honestos: lo que domino, lo que estoy profundizando y lo que uso para
            construir.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div
                      className="skill-meter"
                      role="img"
                      aria-label={`${skill.name}: nivel ${skill.level}`}
                    >
                      {[1, 2, 3, 4].map((step) => (
                        <span
                          key={step}
                          className={step <= skill.score ? "is-filled" : ""}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="soft-skills">
          <h3>Habilidades blandas</h3>
          <ul>
            {softSkills.map((skill) => (
              <li key={skill.name}>
                <i className={skill.icon} aria-hidden="true" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
