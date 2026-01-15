import { useState, useEffect } from "react";
import "./Portfolio.css";

/* ================= PROJECT DATA ================= */
const projects = [
  {
    id: 1,
    category: "Shopify",
    title: "Cosmetic Website",
    description:
      "Professional Shopify store for a cosmetic brand, built with a user-friendly design and smooth checkout flow.",
    image: "/Portfolio/ammoha.webp",
    tags: ["Shopify", "E-commerce", "Beauty Store"],
  },
  {
    id: 2,
    category: "WordPress",
    title: "Restart Digital Services",
    description:
      "Modern WordPress website designed for an IT and digital marketing agency to showcase services and drive leads.",
    image: "/Portfolio/restartdigitalservices.webp",
    tags: ["WordPress", "Marketing", "Custom Plugin"],
  },
  {
    id: 3,
    category: "WordPress",
    title: "Firststep Realty Solution",
    description:
      "Realty solutions website providing residential and commercial property services.",
    image: "/Portfolio/firstysteprealtysolution.webp",
    tags: ["WordPress", "Booking", "Custom Plugin"],
  },
  {
    id: 4,
    category: "Shopify",
    title: "Littel Great",
    description:
      "Modern furniture website for a sofa and chair business, designed to showcase products effectively.",
    image: "/Portfolio/littlegreat.webp",
    tags: ["Shopify", "E-commerce", "Furniture"],
  },
  {
    id: 5,
    category: "WordPress",
    title: "Pixalytix Digital Solutions",
    description:
      "Modern WordPress website designed for an IT and digital marketing agency to showcase services and drive leads",
    image: "/Portfolio/pixalytix.webp",
    tags: ["WordPress", "Marketing", "Custom Plugin"],
  },
  {
    id: 6,
    category: "WordPress",
    title: "Fire Bucket Event",
    description:
      "Event website designed for promoting and managing events effectively",
    image: "/Portfolio/firebucketevent.webp",
    tags: ["WordPress", "Booking", "Custom Plugin"],
  },
  {
    id: 7,
    category: "WooCommerce",
    title: "Artistry Glo",
    description: "E-commerce website for beauty and cosmetic products.",
    image: "/Portfolio/artistryglo.webp",
    tags: ["WordPress", "WooCommerce"],
  },
  {
    id: 8,
    category: "WordPress",
    title: "Maryyost Travel",
    description:
      "WordPress site with online ordering, table reservations, and menu management.",
    image: "/Portfolio/maryyosttravel.webp",
    tags: ["WordPress", "Booking"],
  },
  {
    id: 9,
    category: "WordPress",
    title: "Damtrucks",
    description:
      "Dam truck advertisement website built to highlight services and attract business inquiries.",
    image: "/Portfolio/damtrucks.webp",
    tags: ["WordPress", "Booking", "Marketing"],
  },
  {
    id: 10,
    category: "WordPress",
    title: "Egress Windows Experts",
    description:
      "Service-based website designed for window repair solutions with a clean and user-friendly layout.",
    image: "/Portfolio/egresswindowstoronto-ca.webp",
    tags: ["WordPress", "Window Repair", "Service Website"],
  },
  {
    id: 11,
    category: "WordPress",
    title: "Solar Force Systems",
    description:
      "Website built for a solar system company to showcase renewable energy solutions effectively",
    image: "/Portfolio/solarforce-nl.webp",
    tags: ["WordPress", "Booking"],
  },
  {
    id: 12,
    category: "WordPress",
    title: "The Pips Room",
    description:
      "Modern trading website built to showcase trading solutions and engage users effectively.",
    image: "/Portfolio/thepipsroom.webp",
    tags: ["WordPress", "Booking", "Membership"],
  },
  {
    id: 13,
    category: "WordPress",
    title: "Spectrum Getaways",
    description:
      "Travel website designed to showcase trips and destinations with a clean and engaging layout.",
    image: "/Portfolio/spectrumgetaways.webp",
    tags: ["WordPress", "Booking"],
  },
  {
    id: 14,
    category: "WordPress",
    title: "Restaurant & Booking Platform",
    description: "Website for a web development and marketing company.",
    image: "/Portfolio/peakperformancestud-io.webp",
    tags: ["WordPress", "Marketing", "Agency"],
  },
  {
    id: 15,
    category: "WordPress",
    title: "American Wrap Company",
    description:
      "Modern website built for car wrap services with a clean and visual-focused layout.",
    image: "/Portfolio/americanwrapco.webp",
    tags: ["WordPress", "Car Wrap"],
  },
  {
    id: 16,
    category: "WordPress",
    title: "Harris Nevada Law",
    description:
      "Modern website built for legal law services with a clean and visual-focused layout.",
    image: "/Portfolio/harrisnevadalaw.webp",
    tags: ["WordPress", "Nevada Law"],
  },
  {
    id: 17,
    category: "WooCommerce",
    title: "Leaping Lynx",
    description:
      "Designed a premium supplement brand website emphasizing wellness, product quality, trust, and a clean user experience.",
    image: "/Portfolio/leapinglynx.webp",
    tags: ["WordPress", "Supplements"],
  },
  {
    id: 18,
    category: "WordPress",
    title: "Summit Window Tinting",
    description:
      "Professional car tinting website showcasing quality service, protection, style, and customer trust.",
    image: "/Portfolio/summitwindowtinting.webp",
    tags: ["WordPress", "Tinting Experts"],
  },
  {
    id: 19,
    category: "WordPress",
    title: "Drummond Law Firm",
    description:
      "Modern website built for legal law services with a clean and visual-focused layout.",
    image: "/Portfolio/drummondfirm.png",
    tags: ["WordPress", "Law Firm"],
  },
  {
    id: 20,
    category: "WordPress",
    title: "Premier",
    description:
      "Custom-designed clothing store website showcasing unique fashion, premium fabrics, and a seamless shopping experience.",
    image: "/Portfolio/premierprintco.webp",
    tags: ["WordPress", "Custom Product Design"],
  },
  {
    id: 21,
    category: "WordPress",
    title: "Auto Paint Guard",
    description:
      "Professional car services website highlighting tinting, wrapping, detailing, and premium vehicle care solutions.",
    image: "/Portfolio/autopaintguard.webp",
    tags: ["WordPress", "Car Wrap"],
  },
  {
    id: 22,
    category: "WordPress",
    title: "Olympiaridgeestates",
    description:
      "Modern real estate website showcasing property listings, trusted services, and a seamless user experience.",
    image: "/Portfolio/olympiaridgeestates.webp",
    tags: ["WordPress", "Real State"],
  },
  {
    id: 23,
    category: "WordPress",
    title: "The Dogg Father.",
    description:
      "Pet product store website showcasing quality supplies, pet care essentials, and a friendly shopping experience.",
    image: "/Portfolio/thedoggfather-au.webp",
    tags: ["WordPress", "Pet Store"],
  },
  {
    id: 24,
    category: "WooCommerce",
    title: "American Wrap Company",
    description:
      "Modern website built for car wrap services with a clean and visual-focused layout.",
    image: "/Portfolio/americanwrapco.webp",
    tags: ["WordPress", "Car Wrap"],
  },
  {
    id: 25,
    category: "WordPress",
    title: "Elite Window Tint",
    description:
      "Modern website built for car wrap services with a clean and visual-focused layout.",
    image: "/Portfolio/elitewindowtint.webp",
    tags: ["WordPress", "Car Services"],
  },
   {
    id: 26,
    category: "WordPress",
    title: "Yogat Sea",
    description:
      "Yoga course website promoting mindful practices, guided sessions, and a calm, user-friendly learning experience.",
    image: "/Portfolio/yogatsea.webp",
    tags: ["WordPress", "Yoga At Sea", "Booking"],
  },
   {
    id: 27,
    category: "WordPress",
    title: "LV Home Services",
    description:
      "home services website offering reliable solutions for maintenance, repairs, and everyday household needs.",
    image: "/Portfolio/lvhomeservice.webp",
    tags: ["WordPress", "Home Services"],
  },
   {
    id: 28,
    category: "WordPress",
    title: "Midwest Fertility Center",
    description:
      "Developed a compassionate healthcare website highlighting trusted fertility services helping Chicago couples grow families since 1979.",
    image: "/Portfolio/mfcfamily.webp",
    tags: ["WordPress", "Car Wrap"],
  },
   {
    id: 29,
    category: "WordPress",
    title: "Dammi Media",
    description:
      "Media book website designed for podcast tours, interviews, and seamless promotional scheduling.",
    image: "/Portfolio/dammimedia.webp",
    tags: ["WordPress", "Car Wrap"],
  },
   {
    id: 30,
    category: "WooCommerce",
    title: "Belle kr",
    description:
      "E-commerce website for BELLE KR, highlighting durable, safe, sustainable Mylar bags.",
    image: "/Portfolio/belle-kr.webp",
    tags: ["WordPress", "food storage Solutions", "Ecommerce"],
  },
   {
    id: 31,
    category: "Shopify",
    title: "pet lovers stre",
    description:
      "Pet store website showcasing quality products, pet care essentials, and easy shopping.",
    image: "/Portfolio/pet-lovers-stre-.webp",
    tags: ["Shopify", "Pet Store"],
  },
   {
    id: 32,
    category: "Shopify",
    title: "K Beaut By Design",
    description:
      "Beauty store website highlighting premium products, skincare essentials, and seamless shopping experience.",
    image: "/Portfolio/k-beautybydesign.webp",
    tags: ["Shopify", "Beauty Store"],
  },
   {
    id: 33,
    category: "Shopify",
    title: "Grace Bey Variety Store",
    description:
      "Beauty store website highlighting premium products, skincare essentials, and seamless shopping experience.",
    image: "/Portfolio/gracebey.webp",
    tags: ["Shopify", "Beauty Store"],
  },
   {
    id: 34,
    category: "Shopify",
    title: "Blessed Bee Botanicals",
    description:
      "Beauty store website highlighting premium products, skincare essentials, and seamless shopping experience.",
    image: "/Portfolio/blessedbeebotanicals.webp",
    tags: ["Shopify", "Beauty Store"],
  },
   {
    id: 35,
    category: "Shopify",
    title: "E S M skin",
    description:
      "Beauty store website highlighting premium products, skincare essentials, and seamless shopping experience.",
    image: "/Portfolio/esmskin.webp",
    tags: ["Shopify", "Beauty Store"],
  },
   {
    id: 36,
    category: "Shopify",
    title: "Crown for the beauties",
    description:
      "Beauty store website highlighting premium products, skincare essentials, and seamless shopping experience.",
    image: "/Portfolio/crown-for-the-beauties.webp",
    tags: ["Shopify", "Beauty Store"],
  },
   {
    id: 37,
    category: "Shopify",
    title: "Beauty807",
    description:
      "Beauty store website highlighting premium products, skincare essentials, and seamless shopping experience.",
    image: "/Portfolio/beauty807.webp",
    tags: ["Shopify", "Beauty Store"],
  },
   {
    id: 38,
    category: "Shopify",
    title: "MUNCHKIN-LIL",
    description:
      "Baby store website featuring quality products, essentials, and a safe shopping experience.",
    image: "/Portfolio/munchkin-lil.webp",
    tags: ["Shopify", "BabyStore"],
  },
   {
    id: 39,
    category: "Shopify",
    title: "RAISE WELL",
    description:
      "Baby store website featuring quality products, essentials, and a safe shopping experience.",
    image: "/Portfolio/raise-well.webp",
    tags: ["Shopify", "Beauty Store"],
  },
   {
    id: 40,
    category: "Shopify",
    title: "Baby Cot Mobile",
    description:
      "Baby store website featuring quality products, essentials, and a safe shopping experience.",
    image: "/Portfolio/babycotmobiles-au.webp",
    tags: ["Shopify", "Baby Store"],
  },
   {
    id: 41,
    category: "Shopify",
    title: "Beauty807",
    description:
      "Beauty store website highlighting premium products, skincare essentials, and seamless shopping experience.",
    image: "/Portfolio/beauty807.webp",
    tags: ["Shopify", "Beauty Store"],
  },
   {
    id: 37,
    category: "Shopify",
    title: "Beauty807",
    description:
      "Beauty store website highlighting premium products, skincare essentials, and seamless shopping experience.",
    image: "/Portfolio/beauty807.webp",
    tags: ["Shopify", "Beauty Store"],
  },


];

const tabs = ["All Projects", "WordPress", "Shopify", "WooCommerce"];
const PROJECT_LIMIT = 12;

/* ================= PORTFOLIO ================= */
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("WordPress");
  const [showAll, setShowAll] = useState(false);

  // Tab change pe limit reset
  useEffect(() => {
    setShowAll(false);
  }, [activeTab]);

  const filteredProjects =
    activeTab === "All Projects"
      ? projects
      : projects.filter((item) => item.category === activeTab);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, PROJECT_LIMIT);

  return (
    <section className="portfolio-section" id="Portfolio">
      <span className="portfolio-subtitle">Portfolio</span>

      <h2 className="portfolio-title">
        Featured Projects & <span>Recent Work</span>
      </h2>

      <p className="portfolio-desc">
        A selection of projects showcasing my expertise in WordPress,
        Shopify, and WooCommerce development.
      </p>

      {/* Tabs */}
      <div className="portfolio-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="portfolio-grid">
        {visibleProjects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <div className="image-scroll-wrapper">
              {project.comingSoon && (
                <span className="badge">Coming Soon</span>
              )}

              <img
                src={project.image}
                alt={project.title}
                className="scroll-image"
              />
            </div>

            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Know More Button */}
      {!showAll && filteredProjects.length > PROJECT_LIMIT && (
        <div className="know-more-wrapper">
          <button
            className="know-more-btn"
            onClick={() => setShowAll(true)}
          >
            Know More
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
