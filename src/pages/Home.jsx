function Home() {
  return (
    <>
      <section
        className="hero-section d-flex align-items-center text-white"
        style={{
          height: "90vh",
          background: "linear-gradient(to right, #4A4A4A, #FF7A00)",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4 mb-3">
            Building the Future with Excellence
          </h1>
          <p className="lead mb-4">
            Vidson Group delivers innovation in Aluminium, Glass, and Sustainable Construction.
          </p>
          <a
            href="#services"
            className="btn btn-light px-4 py-2 fw-semibold"
            style={{ borderRadius: "25px", color: "#FF7A00" }}
          >
            Learn More
          </a>
        </div>
      </section>
      
      <section id="services" className="py-5 bg-white">
      <div className="container">

        <h2
          className="text-center fw-bold mb-4"
          style={{ color: "#4A4A4A" }}
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
          Vidson Group operates through focused services — each delivering excellence across design, fabrication and construction.
        </p>

        {/* ---------------- Service 1: Image Left / Text Right ---------------- */}
        <div className="row align-items-center mb-5" data-aos="fade-right" data-aos-delay="100">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="/images/vidson-aluminium.jpg"
              alt="Vidson Aluminium & Glass"
              className="img-fluid rounded-4 service-img"
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold" style={{ color: "#4A4A4A" }}>Vidson Aluminium & Glass</h3>
            <p className="text-secondary fs-5">
              Specialists in architectural aluminium systems, curtain walls, glazing and cladding — delivering durable, elegant façade solutions for commercial and residential projects.
            </p>
            <a href="#aluminium" className="btn btn-vidson mt-2">Learn More</a>
          </div>
        </div>

        {/* Abstract separator */}
        <div className="abstract-sep my-4" data-aos="fade-up" data-aos-delay="50" />

        {/* ---------------- Service 2: Text Left / Image Right ---------------- */}
        <div className="row align-items-center mb-5 flex-md-row-reverse" data-aos="fade-left" data-aos-delay="150">
          <div className="col-md-6 mb-3 mb-md-0 text-md-end">
            <img
              src="/images/vidson-solar.jpg"
              alt="Vidson Solar Facades"
              className="img-fluid rounded-4 service-img"
              style={{ display: "inline-block" }}
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold" style={{ color: "#4A4A4A" }}>Vidson Solar Facades</h3>
            <p className="text-secondary fs-5">
              Integrating photovoltaic systems into façades — design, assembly and installation of smart solar façades that reduce energy cost and enhance building aesthetics.
            </p>
            <a href="#solar" className="btn btn-vidson mt-2">Learn More</a>
          </div>
        </div>

        {/* Abstract separator */}
        <div className="abstract-sep my-4" data-aos="fade-up" data-aos-delay="50" />

        {/* ---------------- Service 3: Image Left / Text Right ---------------- */}
        <div className="row align-items-center mb-5" data-aos="fade-right" data-aos-delay="200">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="/images/vidson-realestate.jpg"
              alt="Vidson Real Estate"
              className="img-fluid rounded-4 service-img"
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold" style={{ color: "#4A4A4A" }}>Vidson Real Estate</h3>
            <p className="text-secondary fs-5">
              End-to-end real estate development services — residential and commercial projects designed for modern living and long-term value.
            </p>
            <a href="#realestate" className="btn btn-vidson mt-2">Learn More</a>
          </div>
        </div>

        {/* Abstract separator */}
        <div className="abstract-sep my-4" data-aos="fade-up" data-aos-delay="50" />

        {/* ---------------- Service 4: Text Left / Image Right ---------------- */}
        <div className="row align-items-center mb-5 flex-md-row-reverse" data-aos="fade-left" data-aos-delay="250">
          <div className="col-md-6 mb-3 mb-md-0 text-md-end">
            <img
              src="/images/vidson-academy.jpg"
              alt="Vidson Academy"
              className="img-fluid rounded-4 service-img"
              style={{ display: "inline-block" }}
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold" style={{ color: "#4A4A4A" }}>Vidson Academy</h3>
            <p className="text-secondary fs-5">
              Hands-on vocational training programs in aluminium works, solar installations, plumbing and general construction — focused on practical skills and industry readiness.
            </p>
            <a href="#academy" className="btn btn-vidson mt-2">Learn More</a>
          </div>
        </div>

      </div>
    </section>



      {/* Temporary News Section */}
      <section id="news" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ color: "#4A4A4A" }}>
            Latest News & Updates
          </h2>
          <p className="text-muted mb-0">
            Stay informed about our latest projects, partnerships, and innovations.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
