// src/pages/Projects.jsx
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PROJECTS = [

  {
    id: "cbn-adoekiti",
    title: "Central Bank of Nigeria",
    location: "Ado Ekiti, Nigeria",
    scope: "Cladding and Curtain Walls",
    category: "Vidson Aluminium",
    images: [
      "/images/projects/cbn-adoekiti.jpg",
      "/images/projects/cbn-adoekiti.jpg",
      "/images/projects/cbn-adoekiti.jpg",
    ],
    description:
      "Full facade cladding and curtain wall installation for the Central Bank of Nigeria Ado-Ekiti branch. Delivered with precision and local fabrication from our Lagos facility.",
  },
  {
    id: "british-ikoyi",
    title: "British Council Office",
    location: "Ikoyi, Lagos",
    scope: "Curtain Walls, Windows & Doors",
    category: "Vidson Aluminium",
    images: [
      "/images/projects/british-council-ikoyi.jpg",
      "/images/projects/british-council-ikoyi.jpg",
    ],
    description:
      "Curtain wall and glazing works for the British Council. Emphasis on acoustic performance and high-precision glazing.",
  },
  {
    id: "gambia-airport",
    title: "Gambia International Airport",
    location: "Banjul, Gambia",
    scope: "Cladding, Curtain Walls, Windows & Doors",
    category: "Vidson Aluminium",
    images: [
      "/images/projects/gambia-airport.jpg",
      "/images/projects/gambia-airport.jpg",
      "/images/projects/gambia-airport.jpg",
    ],
    description:
      "Large-scale facade and glazing works for the new terminal. Project executed across borders with tight coordination and quality control.",
  },
  {
    id: "nepl-benin",
    title: "NEPL Head Office",
    location: "Benin, Nigeria",
    scope: "Cladding, Curtain Walls, Windows & Doors",
    category: "Vidson Aluminium",
    images: [
      "/images/projects/nepl-benin.jpg", 
      "/images/projects/nepl-benin.jpg",
    ],
    description:
      "Facade and window installations for NEPL corporate headquarters. Focus on durability and aesthetic appeal.",
  },
  {
    id: "zenith-towers",
    title: "Zenith Towers",
    location: "Victoria Island, Lagos",
    scope: "Cladding, Curtain Walls, Windows & Doors",
    category: "Vidson Aluminium",
    images: [
      "/images/projects/zenith-towers.jpg", 
      "/images/projects/zenith-towers.jpg",
    ],
    description:
      "High-profile tower facade package including cladding, glazing, and balustrades.",
  },
  {
    id: "apdc-abuja",
    title: "Abuja Property Dev. Company",
    location: "Abuja, Nigeria",
    scope: "Cladding, Curtain Walls, Windows & Doors",
    category: "Vidson Aluminium",
    images: [
      "/images/projects/apdc-abuja.jpg", 
      "/images/projects/apdc-abuja.jpg",
    ],
    description:
      "Multiple facade and glazing scopes across the APDC campus; high quality finish and local coordination.",
  },

  // example Solar / Real Estate / Academy projects (add your images)
  {
    id: "solar-microgrid",
    title: "Solar Microgrid Pilot",
    location: "Lagos, Nigeria",
    scope: "Solar facade & PV integration",
    category: "Vidson Solar",
    images: [
      "/images/projects/solar-microgrid.jpg", 
      "/images/projects/solar-microgrid.jpg",
    ],
    description:
      "Pilot integration of solar facades and rooftop PV to reduce building energy draw and provide resilient power.",
  },

  {
    id: "estate-zen",
    title: "Zenith Residential Estate",
    location: "Abuja, Nigeria",
    scope: "Residential Development",
    category: "Vidson Real Estate",
    images: [
      "/images/projects/estate-zen.jpg", 
      "/images/projects/estate-zen.jpg",
    ],
    description:
      "Master-planned residential development with mixed housing and sustainable infrastructure.",
  },

  {
    id: "academy-workshop",
    title: "Training Workshop - Curtain Walling",
    location: "Lagos, Nigeria",
    scope: "Hands-on training",
    category: "Vidson Academy",
    images: [
      "/images/projects/academy-workshop.jpg",
      "/images/projects/academy-workshop.jpg",
    ],
    description:
      "Practical training sessions delivered to early-career fabricators and installers at Vidson Academy.",
  },
];

const CATEGORIES = [
  "All Projects",
  "Vidson Aluminium",
  "Vidson Solar",
  "Vidson Real Estate",
  "Vidson Academy",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null); // project object for modal
  const carouselRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filtered = PROJECTS.filter((p) =>
    activeCategory === "All Projects" ? true : p.category === activeCategory
  );

  // modal controls
  const openProject = (project) => {
    setSelectedProject(project);
    // reset scroll of carousel after render
    setTimeout(() => {
      if (carouselRef.current) carouselRef.current.scrollLeft = 0;
    }, 50);
    // prevent body scroll
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const scrollCarousel = (dir = "next") => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    if (dir === "next") carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
    else carouselRef.current.scrollBy({ left: -width, behavior: "smooth" });
  };

  return (
    <div className="projects-page">
      {/* Hero */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: "url('/images/projects-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
        data-aos="fade-in"
      >
        <div
          style={{
            background: "rgba(0,0,0,0.45)",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }} className="text-center">
          <h1 className="display-5 fw-bold">Our Projects</h1>
          <p className="lead">Showcasing excellence across our subsidiaries and sectors</p>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`btn ${cat === activeCategory ? "btn-vidson-active" : "btn-outline-vidson"}`}
                onClick={() => setActiveCategory(cat)}
                style={{
                  borderRadius: "999px",
                  padding: "8px 18px",
                  fontWeight: 600,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <div className="row g-4">
            {filtered.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card h-100 shadow-sm border-0">
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="card-img-top"
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        background: "rgba(0,0,0,0.55)",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: 8,
                      }}
                    >
                      <small style={{ fontWeight: 700 }}>{project.category}</small>
                    </div>
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="text-muted mb-3" style={{ flexGrow: 1 }}>
                      {project.location} — {project.scope}
                    </p>

                    <div className="d-flex gap-2">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#FF7A00",
                          color: "#fff",
                          borderRadius: 6,
                          padding: "8px 14px",
                          border: "none",
                          fontWeight: 600,
                        }}
                        onClick={() => openProject(project)}
                      >
                        View Details
                      </button>

                      <a
                        className="btn btn-outline-secondary"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        style={{ borderRadius: 6 }}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="col-12 text-center py-5">
                <p className="text-muted">No projects found in this category yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal / Details Overlay */}
      {selectedProject && (
        <div
          className="project-modal"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1050,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "95%",
              maxWidth: 1100,
              maxHeight: "90vh",
              overflow: "hidden",
              borderRadius: 12,
              background: "#fff",
            }}
          >
            <div className="p-3 d-flex justify-content-between align-items-start border-bottom">
              <div>
                <h5 className="mb-0">{selectedProject.title}</h5>
                <small className="text-muted">{selectedProject.location} — {selectedProject.scope}</small>
              </div>
              <button className="btn btn-sm btn-secondary" onClick={closeModal}>Close</button>
            </div>

            {/* Carousel */}
            <div style={{ display: "flex", gap: 0 }}>
              {/* Prev */}
              <button
                onClick={() => scrollCarousel("prev")}
                style={{
                  width: 48,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                ‹
              </button>

              {/* Scrollable image strip */}
              <div
                ref={carouselRef}
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  gap: 0,
                  scrollBehavior: "smooth",
                  padding: 12,
                }}
              >
                {selectedProject.images.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      minWidth: "80%",
                      maxWidth: "80%",
                      flex: "0 0 80%",
                      scrollSnapAlign: "center",
                      borderRadius: 8,
                      overflow: "hidden",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                      background: "#eee",
                      marginRight: 12,
                    }}
                  >
                    <img
                      src={img}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
                    />
                  </div>
                ))}
              </div>

              {/* Next */}
              <button
                onClick={() => scrollCarousel("next")}
                style={{
                  width: 48,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                ›
              </button>
            </div>

            <div className="p-4" style={{ overflowY: "auto", maxHeight: 220 }}>
              <p style={{ color: "#444" }}>{selectedProject.description}</p>

              <div className="mt-3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#FF7A00",
                    color: "#fff",
                    borderRadius: 6,
                    padding: "8px 14px",
                    border: "none",
                    fontWeight: 600,
                  }}
                  onClick={() => (window.location.href = "/#contact")}
                >
                  Get in Touch
                </button>

                <a
                  className="btn btn-outline-secondary"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* small styles */}
      <style jsx>{`
        .btn-outline-vidson {
          border: 1px solid rgba(74,74,74,0.12);
          color: #4A4A4A;
          background: transparent;
        }
        .btn-vidson-active {
          background: linear-gradient(90deg, #FF7A00, #FF7A00);
          color: #fff;
          border: none;
        }
        /* make small scrollbar look nicer for carousel */
        .project-modal ::-webkit-scrollbar {
          height: 10px;
          width: 10px;
        }
        .project-modal ::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default Projects;
