import { site } from "../../data/site.js";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="logo" href="#inicio" aria-label={`${site.name} — Inicio`}>
            TOMAS<span>.</span>
          </a>
          <p>{site.role} · React &amp; Node.js</p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <ul>
            {[...site.nav, { label: "Contacto", href: "#contacto" }].map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer-socials" aria-label="Redes">
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
        </ul>
      </div>

      <div className="container footer-bottom">
        <p>© {year} {site.name}. Todos los derechos reservados.</p>
        <a href="#inicio">
          Volver arriba
          <i className="fa-solid fa-arrow-up" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
