import "./About.css";

const focusAreas = [
  {
    icon: "fa-solid fa-universal-access",
    text: "Interfaces accesibles y responsivas",
  },
  {
    icon: "fa-solid fa-layer-group",
    text: "Componentes reutilizables y código mantenible",
  },
  {
    icon: "fa-solid fa-gauge-high",
    text: "Rendimiento y buenas prácticas web",
  },
  {
    icon: "fa-solid fa-people-group",
    text: "Colaboración con equipos y producto",
  },
];

function About() {
  return (
    <section id="sobremi" className="section about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="section-eyebrow">Sobre mí</p>
          <h2 className="section-title">Tecnología con criterio, personas en el centro.</h2>

          <div className="about-text">
            <p>
              Soy desarrollador full stack y vengo de un recorrido poco habitual: mi paso por Trenes
              Argentinos me enseñó a trabajar bajo presión, cuidar los detalles y asumir
              responsabilidad por lo que hago. Hoy aplico esa misma disciplina al desarrollo web.
            </p>
            <p>
              Me especializo en React y JavaScript, con bases sólidas de Node.js, MongoDB y MySQL.
              Disfruto transformar ideas en interfaces claras, accesibles y fáciles de mantener.
            </p>
            <p>
              Busco sumarme a un equipo donde pueda aportar valor, aprender de otros y seguir
              creciendo profesionalmente.
            </p>
          </div>

          <a className="btn btn-ghost about-cta" href="#contacto">
            Hablemos de tu proyecto
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
        </div>

        <aside className="about-card">
          <h3>En qué me enfoco</h3>
          <ul>
            {focusAreas.map((area) => (
              <li key={area.text}>
                <span className="about-icon" aria-hidden="true">
                  <i className={area.icon} />
                </span>
                {area.text}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default About;
