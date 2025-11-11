import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CATEGORIES = [
  "All News",
  "Vidson Aluminium",
  "Vidson Solar",
  "Vidson Real Estate",
  "Vidson Academy",
];

const NEWS = [
  {
    id: "innovation-award",
    title: "Vidson Aluminium Wins Innovation Award",
    category: "Vidson Aluminium",
    date: "October 2025",
    image: "/images/news/innovation-award.jpg",
    excerpt:
      "Vidson Aluminium has been recognized for its pioneering curtain wall systems, setting new standards in facade technology across West Africa.",
    content: `The prestigious award was presented by the Nigerian Institute of Architects 
    during the 2025 Architecture & Design Expo. Vidson Aluminium's innovation in facade
    engineering and its commitment to sustainability were key highlights.`,
  },
  {
    id: "solar-launch",
    title: "Vidson Solar Launches Smart Energy Facades",
    category: "Vidson Solar",
    date: "September 2025",
    image: "/images/news/solar-facade-launch.jpg",
    excerpt:
      "A new era of solar-integrated building solutions begins as Vidson Solar unveils its next-gen solar facade panels.",
    content: `The launch event in Abuja showcased Vidson Solar’s latest photovoltaic facade panels 
    designed to combine aesthetics with functionality. These systems allow buildings to generate 
    clean energy while maintaining elegant architectural finishes.`,
  },
  {
    id: "academy-graduation",
    title: "Vidson Academy Graduates 50 New Trainees",
    category: "Vidson Academy",
    date: "August 2025",
    image: "/images/news/academy-graduation.jpg",
    excerpt:
      "Vidson Academy continues to empower the next generation of technical experts in fabrication, glazing, and project management.",
    content: `The 6-month program covered hands-on training in aluminium systems, curtain wall
    assembly, and safety practices. Graduates have already been absorbed into Vidson Group’s
    ongoing projects nationwide.`,
  },
  {
    id: "estate-projects",
    title: "Vidson Real Estate Expands Residential Projects",
    category: "Vidson Real Estate",
    date: "July 2025",
    image: "/images/news/realestate-expansion.jpg",
    excerpt:
      "New housing developments are underway in Abuja and Lagos as Vidson Real Estate continues to redefine modern living.",
    content: `The expansion phase will introduce smart home systems, solar energy integration,
    and community-driven designs — setting a new standard for sustainable urban housing.`,
  },
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All News");
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredNews =
    activeCategory === "All News"
      ? NEWS
      : NEWS.filter((n) => n.category === activeCategory);

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: "url('/images/news-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
        <div className="container position-relative text-center">
          <h1 className="display-5 fw-bold">Vidson News</h1>
          <p className="lead">Updates, Innovations, and Insights from Our Group</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`btn ${
                  cat === activeCategory ? "btn-vidson-active" : "btn-outline-vidson"
                }`}
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

      {/* News Grid */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <div className="row g-4">
            {filteredNews.map((news, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="card-img-top"
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <small className="text-warning fw-bold">{news.category}</small>
                    <h5 className="card-title mt-2">{news.title}</h5>
                    <p className="text-muted small mb-2">{news.date}</p>
                    <p className="card-text">{news.excerpt}</p>
                    <button
                      className="btn btn-sm mt-2"
                      style={{
                        backgroundColor: "#FF7A00",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        padding: "6px 14px",
                      }}
                      onClick={() => setSelectedNews(news)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredNews.length === 0 && (
              <div className="col-12 text-center py-5">
                <p className="text-muted">No news in this category yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal for full news */}
      {selectedNews && (
        <div
          className="news-modal"
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
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "95%",
              maxWidth: 900,
              maxHeight: "90vh",
              overflow: "auto",
              borderRadius: 12,
              background: "#fff",
            }}
          >
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            />
            <div className="p-4">
              <small className="text-warning fw-bold">
                {selectedNews.category} • {selectedNews.date}
              </small>
              <h3 className="mt-2 mb-3">{selectedNews.title}</h3>
              <p className="text-muted fs-5">{selectedNews.content}</p>
              <div className="text-end">
                <button
                  className="btn btn-secondary mt-3"
                  onClick={() => setSelectedNews(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .btn-outline-vidson {
          border: 1px solid rgba(74, 74, 74, 0.12);
          color: #4a4a4a;
          background: transparent;
        }
        .btn-vidson-active {
          background: #ff7a00;
          color: #fff;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default News;
