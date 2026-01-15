import React from "react";
import "./Ready.css";

const Ready = () => {
  return (
    <section className="ready-section" id="ready">
      <div className="ready-overlay"></div>

      <div className="ready-content">
        <h2 className="ready-title">
          Ready to Build Your <br />
          <span>Next Website?</span>
        </h2>

        <p className="ready-text">
          Let's discuss your project and create something amazing together. I'm
          here to help transform your ideas into a high-performing digital
          presence.
        </p>

        <div className="ready-buttons">
          <a
            href="https://wa.me/919079694464?text=Hi%20Gourav,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start a Conversation →
          </a>
          {/* <a href="tel:919079694464" className="btn-primary">
            Start a Conversation →
          </a> */}

          <a href="#Portfolio" className="btn-secondary">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ready;
