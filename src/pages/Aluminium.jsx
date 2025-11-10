import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aluminium = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products = [
    { name: "Windows", img: "/images/windows.jpg", desc: "High-quality aluminium windows for modern and durable finishes." },
    { name: "Curtain Wall", img: "/images/curtainwall.jpg", desc: "Elegant glass curtain walls that enhance building aesthetics." },
    { name: "Partitioning", img: "/images/partition.jpg", desc: "Custom aluminium partitions for offices and interiors." },
    { name: "Cladding", img: "/images/cladding.jpg", desc: "Durable aluminium cladding for both exterior and interior designs." },
    { name: "Cubicles", img: "/images/cubicle.jpg", desc: "Strong and stylish glass cubicles for bathrooms and offices." },
    { name: "Doors", img: "/images/doors.jpg", desc: "Beautiful aluminium doors designed for safety and style." },
    { name: "Handrails", img: "/images/handrails.jpg", desc: "Modern aluminium and glass handrails for staircases and balconies." },
    { name: "Skylight", img: "/images/skylight.jpg", desc: "Natural light systems with aluminium skylight structures." },
    { name: "Facades", img: "/images/facades.jpg", desc: "Architectural aluminium facades for commercial and residential projects." },
  ];

  return (
    <div className="aluminium-page">
      {/* Hero Section */}
      <section
        className="hero-section text-center text-light d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/vidson-aluminium.jpg')",
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
          <h1 className="display-4 fw-bold" style={{ color: '#FF7A00' }}>Vidson Aluminium</h1>
          <p className="lead">
            Precision, Strength, and Beauty in Every Frame
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4 fw-bold">About Vidson Aluminium</h2>
          <p className="text-muted fs-5">
            Vidson Aluminium, a proud subsidiary of Vidson Group, specializes in the
            design, fabrication, and installation of high-quality aluminium and glass
            works. From sleek curtain walls and durable windows to handrails,
            partitions, cubicles, and cladding — we deliver excellence through innovation.
          </p>

          <p className="text-muted fs-5">
            With a dedicated production facility in Lagos and years of craftsmanship,
            Vidson Aluminium continues to redefine the boundaries of architectural
            aesthetics and structural integrity across Nigeria.
          </p>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Product Gallery</h2>
          <div className="row g-4">
            {products.map((product, index) => (
              <div key={index} className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <p className="card-text">{product.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vidson Aluminium */}
      <section className="why-choose-us py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Vidson Aluminium?</h2>
          <p className="text-muted fs-5 mb-4">
            We combine years of experience with advanced technology to deliver top-quality
            aluminium and glass works that stand the test of time.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">In-House Production</h5>
              <p className="text-muted">
                All aluminium products are fabricated in our Lagos factory with strict quality control.
              </p>
            </div>

            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Expert Installation</h5>
              <p className="text-muted">
                Our experienced team ensures every installation meets design and safety standards.
              </p>
            </div>

            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Innovative Designs</h5>
              <p className="text-muted">
                Every solution is tailored to reflect modern architectural trends and durability.
              </p>
            </div>
          </div>

        <div className="pt-3">
          <button
            onClick={() => {
              window.location.href = "/#contact";
            }}
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

export default Aluminium;
