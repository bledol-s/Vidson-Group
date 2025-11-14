import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Careers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section
        className="hero-section text-center text-light d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/vidson-careers.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          position: "relative",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
        <div className="container position-relative">
          <h1 className="display-4 fw-bold" style={{ color: "#FF7A00" }}>
            Careers at Vidson Group
          </h1>
          <p className="lead text-light">
            Join a team dedicated to innovation, excellence, and growth.
          </p>
        </div>
      </section>

      {/* About Working With Us */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="fw-bold text-center mb-4">Working With Vidson</h2>
        <p className="text-muted fs-5 text-center">
          At Vidson Group, we believe that our greatest strength lies in our people. 
          We are a community of architects, engineers, builders, and innovators who 
          share a passion for creating solutions that shape a better future.
        </p>
        <p className="text-muted fs-5 text-center">
          We offer a collaborative environment where your ideas are valued, 
          creativity is encouraged, and excellence is rewarded. Whether you’re 
          an experienced professional or a young graduate, you’ll find opportunities 
          to grow, learn, and make a real impact.
        </p>
      </section>

      {/* Culture & Values */}
      <section className="bg-light py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Our Culture & Values</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h5 className="fw-bold text-warning">Innovation</h5>
                <p className="text-muted">
                  We embrace technology and creativity to deliver sustainable, 
                  future-ready solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h5 className="fw-bold text-warning">Integrity</h5>
                <p className="text-muted">
                  We uphold transparency, honesty, and professionalism in everything we do.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h5 className="fw-bold text-warning">Teamwork</h5>
                <p className="text-muted">
                  We believe in collaboration and mutual respect to achieve excellence together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="container py-5 text-center" data-aos="fade-up">
        <h2 className="fw-bold mb-4">Current Openings</h2>
        <p className="text-muted fs-5 mb-4">
          There are currently no open positions available.
        </p>
        <p className="text-muted fs-5">
          Subcribe to our news letter to be the first to know when there will be an open position.
        </p>
        <button
          className="btn btn-lg mt-3"
          style={{
            backgroundColor: "#FF7A00",
            color: "white",
            border: "none",
            padding: "10px 25px",
            borderRadius: "6px",
          }}
          onClick={() => {
            window.location.href = "/#contact";
          }}
        >
          Send Your CV
        </button>

        <div
      className="newsletter-box mt-5 text-center p-5"
      data-aos="fade-up"
      style={{
        background: 'linear-gradient(90deg, #FF7A00 0%, #4A4A4A 100%)',
        borderRadius: '12px',
        color: 'white',
      }}
    >
      <h4 className="fw-bold mb-3">Stay Updated</h4>
      <p className="mb-4" style={{ fontSize: '15px' }}>
        Subscribe to our newsletter for updates and insights from Vidson Group.
      </p>
      <form
        className="d-flex justify-content-center align-items-center gap-2 flex-wrap"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control"
          style={{
            width: '280px',
            borderRadius: '25px',
            padding: '10px 15px',
            border: 'none',
          }}
        />
        <button
          className="btn"
          style={{
            backgroundColor: 'white',
            color: '#FF7A00',
            borderRadius: '25px',
            fontWeight: 'bold',
            padding: '10px 25px',
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
      </section>

      {/* Join the Team */}
      <section className="py-5 bg-'#4A4A4A' text-light text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold mb-3" style={{ color: "#FF7A00" }}>
            Be Part of Our Story
          </h2>
          <p className="fs-5 mb-4">
            At Vidson Group, every project starts with a dream — and every dream 
            begins with people like you.
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
        </div>
      </section>
    </div>
  );
};

export default Careers;
