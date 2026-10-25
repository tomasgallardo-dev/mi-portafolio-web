import { site } from "../../data/site.js";
import "./Home.css";

function Home() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="hero-eyebrow">
            Hola, soy <strong>{site.name}</strong> — {site.role}
          </p>
          <h1 className="hero-title">
            Construyo interfaces <span className="hero-mark">claras</span> que se sienten vivas.
          </h1>
          <p className="hero-lead">
            React, Node.js y JavaScript para transformar ideas en productos digitales accesibles,
            rápidos y pensados para las personas.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#proyectos">
              Ver proyectos
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={site.cvUrl} download>
              Descargar CV
              <i className="fa-solid fa-download" aria-hidden="true" />
            </a>
          </div>

          <p className="hero-status">
            <span aria-hidden="true" />
            Disponible para nuevos proyectos y equipos
          </p>

          <ul className="hero-socials" aria-label="Redes y contacto">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon} aria-hidden="true" />
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} aria-label="Enviar email">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-media reveal">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-photo">
            <img
              src="/img/perfil.jpg"
              alt={`Foto de ${site.name}`}
              width="359"
              height="359"
              fetchPriority="high"
            />
          </div>
          <div className="hero-card">
            <span className="hero-card-icon" aria-hidden="true">
              <i className="fa-solid fa-code" />
            </span>
            <span>
              <b>{site.role}</b>
              React · Node.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
