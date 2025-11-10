import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Academy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const courses = [
    {name: "Architecture & Design", img: "/images/architecture-course.jpg", desc: "Comprehensive training in architectural design and visualization using modern tools.",},
    {name: "Project Management", img: "/images/project-management-course.jpg", desc: "Master the fundamentals of project planning, scheduling, and execution.",},
    {name: "Aluminium Fabrication", img: "/images/aluminium-fabrication-course.jpg", desc: "Hands-on training on aluminium and glass fabrication and installation techniques.",},
    {name: "BIM & CAD Technologies", img: "/images/bim-course.jpg", desc: "Learn how to design, model, and collaborate using BIM and CAD software like ArchiCAD and AutoCAD.",},
    {name: "Real Estate Development", img: "/images/realestate-course.jpg", desc: "Understand the principles of property development, investment, and valuation.",},
    {name: "Renewable Energy & Solar Systems", img: "/images/solar-course.jpg", desc: "Get skilled in solar technology and sustainable energy solutions for modern buildings.",},
  ];

  return (
    <div className="academy-page">
      {/* Hero Section */}
      <section
        className="hero-section text-center text-light d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/vidson-academy.jpg')",
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
            Vidson Academy
          </h1>
          <p className="lead">
            Empowering the Next Generation of Builders, Designers, and Innovators
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4 fw-bold">About Vidson Academy</h2>
        <p className="text-muted fs-5">
          Vidson Academy, the educational arm of Vidson Group, is committed to empowering
          young professionals and craftsmen with the knowledge and skills to excel in the
          construction, design, and real estate industries. Our programs are structured to
          bridge the gap between theory and practical industry experience.
        </p>

        <p className="text-muted fs-5">
          Through specialized courses, hands-on workshops, and mentorship from experts,
          Vidson Academy continues to build a network of certified professionals who
          shape the future of sustainable development in Africa and beyond.
        </p>
      </section>

      {/* Gallery / Courses Section */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Programs & Courses</h2>
          <div className="row g-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={course.img}
                    alt={course.name}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{course.name}</h5>
                    <p className="card-text">{course.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vidson Academy */}
      <section className="why-choose-us py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Vidson Academy?</h2>
          <p className="text-muted fs-5 mb-4">
            Our commitment to excellence ensures that every learner gains both technical
            knowledge and practical experience relevant to today’s industry needs.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Industry-Relevant Courses</h5>
              <p className="text-muted">
                Our programs are designed by professionals with real-world experience.
              </p>
            </div>

            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Hands-On Learning</h5>
              <p className="text-muted">
                We emphasize practical training through workshops and live projects.
              </p>
            </div>

            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Career Opportunities</h5>
              <p className="text-muted">
                Graduates enjoy priority placement and internship opportunities with Vidson Group.
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

export default Academy;
