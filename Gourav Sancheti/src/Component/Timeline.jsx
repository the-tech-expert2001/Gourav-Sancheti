import { useEffect, useRef } from "react";
import "./Timeline.css";

const timelineData = [
  {
    date: " Nov 2025 - Present",
    role: "Senior Software Engineer",
    company: "Restart Digital Services",
    desc: "Leading development of WordPress and Shopify projects. Mentoring junior developers and implementing best practices for scalable and high-performance web solutions.",
  },
  {
    date: "Jul 2025 - Nov 2025",
    role: "Associate Software Engineer",
    company: "Pixalytix Digital Solutions",
    desc: "Developed custom WordPress themes and plugins. Delivered 30+ client projects focusing on performance optimization and user experience.",
  },
  {
    date: "Jun 2024 - Jul 2025",
    role: "Associate Software Engineer",
    company: "Coozmoo Digital Solutions",
    desc: "Built responsive websites and eCommerce stores using WordPress, Shopify, Wix, BigCommerce, Webflow, GoDaddy, and Namecheap. Focused on performance, scalability, and clean code.",
  },
  {
    date: "Apr 2023 - Apr 2021",
    role: "Wordpress Developer",
    company: "Academy of Trade Finance",
    desc: "Started professional career in WordPress development. Learned best practices for clean code and effective client communication.",
  },
  {
    date: "Dec 2022 - Mar 2023",
    role: "Web Developer Intern",
    company: "Tech Horizon",
    desc: "Gained hands-on experience in WordPress fundamentals and contributed to live client projects.",
  },
];

const Timeline = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.4 }
    );

    itemsRef.current.forEach((item) => item && observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section" id="timeline">
      {/* Menu se #timeline call hoga */}

      <span className="timeline-tag">Career Journey</span>

      <h2 className="timeline-title">
        My Professional <br />
        <span>Experience Timeline</span>
      </h2>

      <p className="timeline-desc">
        A journey of continuous learning and growth, from intern to senior
        software engineer, building expertise across multiple technologies.
      </p>

      <div className="timeline">
        <div className="timeline-line"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <span className="dot"></span>

            <div className="timeline-card">
              <span className="date">{item.date}</span>
              <h3 className="role">{item.role}</h3>
              <h4 className="company">{item.company}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
