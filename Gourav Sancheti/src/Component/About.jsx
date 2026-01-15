import { useState } from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="About">
      <div className="about-container">
        {/* LEFT CARD */}
        {/* LEFT STACKED CARD */}
        <div className="about-card-wrapper">
          <div className="card-layer layer-1"></div>
          <div className="card-layer layer-2"></div>

          <div className="about-card main-card">
            <div className="avatar">
              <span><img src="/profile.jpeg" alt="" /></span>
            </div>
            <h3>Gourav Sancheti</h3>
            <p>Senior Software Engineer</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-tag">About Me</span>

          <h2 className="about-title">
            Turning Ideas Into <br />
            <span className="gradient-text">Digital Reality</span>
          </h2>

          <p>
            I’m Gourav Sancheti, a passionate WordPress & Shopify Developer with
            over 3+ years of experience in crafting high-performance,
            conversion-focused websites. Based in Ahmedabad, Gujarat, I’ve
            delivered 100+ successful projects worldwide.
          </p>

          <p>
            My journey began with an internship at Tech Horizon, where I
            discovered my passion for building digital solutions. Today, I work
            as a{" "}
            <strong>
              Senior Software Engineer at Restart Digital Services
            </strong>
            , specializing in custom WordPress, Shopify, and scalable web
            solutions.
          </p>

          {/* STATS */}
          <div className="about-stats">
            <div className="stat-box">
              <h3>3+</h3>
              <span>Years Experience</span>
            </div>
            <div className="stat-box">
              <h3>100+</h3>
              <span>Projects Delivered</span>
            </div>
            <div className="stat-box">
              <h3>70+</h3>
              <span>Happy Clients</span>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
