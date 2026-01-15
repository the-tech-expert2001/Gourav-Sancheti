import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <span className="contact-tag">Get In Touch</span>

        <h2 className="contact-title">
          Let’s Start a <span>Conversation</span>
        </h2>

        <p className="contact-subtitle">
          Have a project in mind or just want to say hello? I’d love to hear
          from you. Reach out through any of the channels below.
        </p>

        {/* Cards */}
        <div className="contact-cards">
          {/* Email */}
          <div className="contact-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" fill="none" />
                <path
                  d="M4 6l8 6 8-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  ry="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="card-label">Email</p>
            <h4>sanchetigourav2001@gmail.com</h4>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2
                  19.86 19.86 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3
                  a2 2 0 0 1 2 1.72c.12.9.32 1.77.57 2.6
                  a2 2 0 0 1-.45 2.11L8.09 9.91
                  a16 16 0 0 0 6 6l1.48-1.48
                  a2 2 0 0 1 2.11-.45
                  c.83.25 1.7.45 2.6.57
                  a2 2 0 0 1 1.72 2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="card-label">Phone / WhatsApp</p>
            <h4>+91 9079694464</h4>
          </div>

          {/* Location */}
          <div className="contact-card">
            <div className="icon-box">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 21s-7-4.35-7-11a7 7 0 1 1 14 0c0 6.65-7 11-7 11z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="card-label">Location</p>
            <h4>Ahmedabad, Gujarat, India</h4>
          </div>
        </div>

        {/* Social */}
        <div className="social-section">
          <p>Connect with me on</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/gourav-sancheti-99a052260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <svg viewBox="0 0 24 24">
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2
                  2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  fill="currentColor"
                />
                <rect x="2" y="9" width="4" height="12" fill="currentColor" />
                <circle cx="4" cy="4" r="2" fill="currentColor" />
              </svg>
            </a>

            <a href="https://github.com/the-tech-expert2001" target="_blank">
              <svg viewBox="0 0 24 24">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3
                  m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                  c3.14-.35 6.44-1.54 6.44-7
                  a5.44 5.44 0 0 0-1.5-3.75
                  5.07 5.07 0 0 0-.09-3.77
                  s-1.18-.37-3.88 1.48
                  a13.38 13.38 0 0 0-7 0
                  C6.34 1.64 5.16 2 5.16 2
                  a5.07 5.07 0 0 0-.09 3.77
                  A5.44 5.44 0 0 0 3.56 8
                  c0 5.42 3.3 6.61 6.44 7
                  A3.37 3.37 0 0 0 9 18.13V22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>

            {/* <a href="#">
              <svg viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53
                  4.48 4.48 0 0 0-7.86 3v1
                  A10.66 10.66 0 0 1 3 4s-4 9 5 13
                  a11.64 11.64 0 0 1-7 2
                  c9 5 20 0 20-11.5
                  a4.5 4.5 0 0 0-.08-.83
                  A7.72 7.72 0 0 0 23 3z"
                  fill="currentColor"
                />
              </svg>
            </a> */}
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <div className="status">
            <span className="dottt"></span>
            <p>
              <strong>Available for Projects</strong>
              <br />
              Currently accepting new clients
            </p>
          </div>

          <a href="mailto:sanchetigourav2001@gmail.com" className="email-btn">
            ✉ Send an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
