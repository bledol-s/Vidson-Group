import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const values = [
    { title: "Integrity", desc: "We maintain honesty, transparency, and reliability in every project we deliver." },
    { title: "Innovation", desc: "We embrace modern technologies and creative solutions that redefine design and construction." },
    { title: "Quality", desc: "Every Vidson project is a blend of precision, durability, and world-class standards." },
    { title: "Teamwork", desc: "Collaboration fuels our success — within our teams and with our clients." },
    { title: "Sustainability", desc: "We are committed to eco-friendly practices that preserve the environment." },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="hero-section text-center text-light d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/about-vidson2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          position: "relative",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        ></div>
        <div className="container position-relative">
          <h1 className="display-4 fw-bold" style={{ color: "#FF7A00" }}>
            About Vidson Group
          </h1>
          <p className="lead">
            Building with Passion, Precision, and Purpose
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4 fw-bold">Who We Are</h2>
        <p className="text-muted fs-5">
          Vidson Group is a dynamic multi-sector company headquartered in Abuja, Nigeria, 
          with a commitment to excellence across architecture, aluminium fabrication, 
          solar technology, real estate, and professional training.
        </p>
        <p className="text-muted fs-5">
          Over the years, Vidson has grown into a trusted brand through consistent quality, 
          innovative designs, and sustainable solutions that meet both modern and traditional needs. 
          Our operations are driven by a dedicated team of experts passionate about shaping 
          Nigeria’s built environment.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Our Vision & Mission</h2>
          <div className="row justify-content-center g-4">
            <div className="col-md-5">
              <div className="p-4 border rounded-4 shadow-sm bg-white h-100">
                <h4 className="fw-bold text-warning">Our Vision</h4>
                <p className="text-muted mt-2">
                  To be a leading African brand transforming spaces through design innovation, 
                  sustainable technology, and superior craftsmanship.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="p-4 border rounded-4 shadow-sm bg-white h-100">
                <h4 className="fw-bold text-warning">Our Mission</h4>
                <p className="text-muted mt-2">
                  To deliver value-driven solutions in construction, technology, and education 
                  while fostering growth and sustainability for our clients and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-5 fw-bold">Our Core Values</h2>
        <div className="row g-4 justify-content-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-4 border rounded-4 shadow-sm h-100 text-center">
                <h5 className="fw-bold text-warning">{value.title}</h5>
                <p className="text-muted mt-2">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team (placeholder for now) */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Meet the Team</h2>
          <p className="text-muted fs-5">
            The strength of Vidson Group lies in its people — professionals with a shared 
            vision to deliver excellence across every project.
          </p>
          <p className="text-muted">
            (Team profiles coming soon)
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-5" data-aos="fade-up">
        <h2 className="fw-bold mb-3">Let’s Build the Future Together</h2>
        <p className="text-muted fs-5 mb-4">
          Partner with Vidson Group to bring innovation and excellence to every project.
        </p>
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
      </section>
    </div>
  );
};

export default About;
