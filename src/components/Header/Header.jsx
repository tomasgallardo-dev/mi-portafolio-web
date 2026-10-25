import { useEffect, useRef, useState } from "react";
import { site } from "../../data/site.js";
import "./Header.css";

const SECTION_IDS = [...site.nav.map((item) => item.href.slice(1)), "contacto"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");
  const menuToggleRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const firstLink = mobileMenuRef.current?.querySelector("a");
    const focusTimer = setTimeout(() => firstLink?.focus({ preventScroll: true }), 60);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const menu = mobileMenuRef.current;
      const toggle = menuToggleRef.current;
      if (!menu || !toggle) return;

      const focusables = [toggle, ...menu.querySelectorAll("a")];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 901px)");
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="logo" href="#inicio" aria-label={`${site.name} — Inicio`}>
          TOMAS<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${active === item.href ? " is-active" : ""}`}
              aria-current={active === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`nav-cta${active === "#contacto" ? " is-active" : ""}`}
            aria-current={active === "#contacto" ? "page" : undefined}
          >
            Hablemos
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
        </nav>

        <button
          ref={menuToggleRef}
          type="button"
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`menu-backdrop${menuOpen ? " is-open" : ""}`}
        onClick={() => {
          setMenuOpen(false);
          menuToggleRef.current?.focus();
        }}
        aria-hidden="true"
      />

      <nav
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Navegación móvil"
      >
        {[...site.nav, { label: "Contacto", href: "#contacto" }].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.href ? "is-active" : ""}
            aria-current={active === item.href ? "page" : undefined}
            onClick={closeMenu}
          >
            {item.label}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
        ))}
        <div className="mobile-socials">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <i className={social.icon} aria-hidden="true" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
