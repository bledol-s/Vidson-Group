import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RealEstate = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const properties = [
    { name: "Luxury Apartments", img: "/images/apartments.jpg", desc: "Modern residential apartments designed for comfort and elegance." },
    { name: "Smart Homes", img: "/images/smarthomes.jpg", desc: "Technology-driven homes that combine convenience, safety, and energy efficiency." },
    { name: "Commercial Buildings", img: "/images/commercial.jpg", desc: "High-standard commercial developments that redefine business environments." },
    { name: "Estate Development", img: "/images/estate.jpg", desc: "Planned and serviced estates with exceptional infrastructure and amenities." },
    { name: "Facility Management", img: "/images/facility.jpg", desc: "Professional facility management services for residential and commercial properties." },
    { name: "Investment Projects", img: "/images/investment.jpg", desc: "Lucrative real estate investment opportunities for local and international clients." },
  ];

  return (
    <div className="realestate-page">
      {/* Hero Section */}
      <section
        className="hero-section text-center text-light d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/vidson-realestate.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          position: "relative",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
        <div className="container position-relative">
          <h1 className="display-4 fw-bold" style={{ color: "#FF7A00" }}>
            Vidson Real Estate
          </h1>
          <p className="lead">Building Dreams, Creating Sustainable Communities</p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4 fw-bold">About Vidson Real Estate</h2>
        <p className="text-muted fs-5">
          Vidson Real Estate, a proud member of the Vidson Group, is committed to transforming
          the real estate landscape in Nigeria through quality, innovation, and integrity.
          We specialize in developing premium residential and commercial spaces that combine
          functionality, aesthetics, and sustainability.
        </p>

        <p className="text-muted fs-5">
          Our mission is to deliver exceptional living and working environments that stand the
          test of time. Whether it’s smart homes, luxury apartments, or modern estates,
          Vidson Real Estate ensures every project exceeds expectations.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Project Gallery</h2>
          <div className="row g-4">
            {properties.map((property, index) => (
              <div
                key={index}
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={property.img}
                    alt={property.name}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{property.name}</h5>
                    <p className="card-text">{property.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Vidson Real Estate?</h2>
          <p className="text-muted fs-5 mb-4">
            From concept to completion, we deliver excellence with a focus on quality,
            transparency, and long-term value creation.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Trusted Expertise</h5>
              <p className="text-muted">
                Decades of experience in real estate development and project delivery across Nigeria.
              </p>
            </div>

            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Premium Quality</h5>
              <p className="text-muted">
                Every project adheres to the highest construction and design standards.
              </p>
            </div>

            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Sustainability Focus</h5>
              <p className="text-muted">
                Eco-friendly materials and energy-efficient designs for a better future.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="btn btn-lg"
              style={{
                backgroundColor: "#FF7A00",
                color: "white",
                border: "none",
                padding: "10px 25px",
                borderRadius: "6px",
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
