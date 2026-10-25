import { useState } from "react";
import { site } from "../../data/site.js";
import "./Contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/mjgzppva";

const initialForm = { nombre: "", email: "", mensaje: "" };

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error("No se pudo enviar el formulario");

      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="section-eyebrow">Contacto</p>
          <h2 className="section-title">¿Tenés una idea o una propuesta?</h2>
          <p className="contact-lead">
            Estoy abierto a oportunidades como desarrollador full stack y a proyectos freelance.
            Escribime y te respondo a la brevedad.
          </p>

          <a className="contact-email" href={`mailto:${site.email}`}>
            <span className="contact-email-icon" aria-hidden="true">
              <i className="fa-solid fa-envelope" />
            </span>
            <span>
              <small>Escribime directamente</small>
              {site.email}
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square contact-email-arrow" aria-hidden="true" />
          </a>

          <ul className="contact-socials" aria-label="Redes profesionales">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <i className={social.icon} aria-hidden="true" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="contact-note">
            <i className="fa-regular fa-clock" aria-hidden="true" />
            Respondo normalmente dentro de las próximas 24 a 48 horas.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                autoComplete="name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Contame sobre tu proyecto o la oportunidad..."
              rows="6"
              minLength={10}
              required
            />
          </div>

          <div className="honeypot" aria-hidden="true">
            <label htmlFor="empresa">Empresa</label>
            <input id="empresa" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" />
          </div>

          <p
            className={`form-status${status === "success" ? " is-success" : ""}${
              status === "error" ? " is-error" : ""
            }`}
            role="status"
            aria-live="polite"
          >
            {status === "success" &&
              "¡Mensaje enviado con éxito! Te respondo a la brevedad."}
            {status === "error" && (
              <>
                No pudimos enviar el mensaje. Probá de nuevo o escribime a{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </>
            )}
          </p>

          <button type="submit" className="btn btn-primary form-submit" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                Enviando...
                <i className="fa-solid fa-circle-notch fa-spin" aria-hidden="true" />
              </>
            ) : (
              <>
                Enviar mensaje
                <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
