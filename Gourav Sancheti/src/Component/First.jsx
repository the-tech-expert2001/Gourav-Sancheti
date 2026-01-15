import { useState } from "react";
import "./First.css";

const First = () => {
  return (
    <section className="hero" >
      {/* Availability badge */}
      <div className="badgee">
        <span className="dott"></span>
        Available for Projects
      </div>

      {/* Main heading */}
      <h1 className="hero-title">
        Crafting Digital <br />
        <span className="gradient-text">Experiences That Convert</span>
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">WordPress & Shopify Developer</p>

      {/* Stats */}
      <div className="hero-stats">
        <span>
          <strong>3+</strong> Years Experience
        </span>
        <span className="divider">|</span>
        <span>
          <strong>100+</strong> Websites Delivered
        </span>
        <span className="divider">|</span>
        <span>Ahmedabad, India</span>
      </div>

      {/* Buttons */}
      <div className="hero-buttons">
        <a href="Gourav Sancheti.pdf"  target="Blank" className="btn-primary">
          Download CV
        </a>

        <a href="#Portfolio" className="btn-outline">
          View My Work
        </a>
      </div>

      {/* Skills */}
      <div className="hero-skills">
        <span>WordPress</span>
        <span>Shopify</span>
        <span>WooCommerce</span>
        <span>React</span>
        <span>PHP</span>
        <span>Liquid</span>
      </div>
    </section>
  );
};

export default First;
