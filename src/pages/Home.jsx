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
      className="text-center fw-bold mb-5"
      style={{ color: "#4A4A4A" }}
      data-aos="fade-up"
    >
      Our Services
    </h2>

    {/* Service 1 */}
    <div className="row align-items-center mb-5" data-aos="fade-right">
      <div className="col-md-6">
        <img
          src="/images/vidson-aluminium.jpg"
          alt="Vidson Aluminium and Glass"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold" style={{ color: "#4A4A4A" }}>
          Vidson Aluminium & Glass
        </h3>
        <p className="text-muted">
          Specialists in modern aluminium works, glass installations, 
          curtain walls, cladding, and facade systems that redefine 
          architectural aesthetics and performance.
        </p>
        <a
          href="#aluminium"
          className="btn fw-semibold"
          style={{
            backgroundColor: "#FF7A00",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Service 2 */}
    <div className="row align-items-center mb-5 flex-md-row-reverse" data-aos="fade-left">
      <div className="col-md-6">
        <img
          src="/images/vidson-solar.jpg"
          alt="Vidson Solar Facades"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold" style={{ color: "#4A4A4A" }}>
          Vidson Solar Facades
        </h3>
        <p className="text-muted">
          Integrating solar energy solutions into architectural design, 
          promoting sustainability through intelligent, energy-efficient 
          facade systems.
        </p>
        <a
          href="#solar"
          className="btn fw-semibold"
          style={{
            backgroundColor: "#FF7A00",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Service 3 */}
    <div className="row align-items-center mb-5" data-aos="fade-right">
      <div className="col-md-6">
        <img
          src="/images/vidson-realestate.jpg"
          alt="Vidson Real Estate"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold" style={{ color: "#4A4A4A" }}>
          Vidson Real Estate
        </h3>
        <p className="text-muted">
          Delivering premium real estate development, management, and marketing 
          solutions designed for growth, comfort, and modern living.
        </p>
        <a
          href="#realestate"
          className="btn fw-semibold"
          style={{
            backgroundColor: "#FF7A00",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Service 4 */}
    <div className="row align-items-center flex-md-row-reverse" data-aos="fade-left">
      <div className="col-md-6">
        <img
          src="/images/vidson-academy.jpg"
          alt="Vidson Academy"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold" style={{ color: "#4A4A4A" }}>
          Vidson Academy
        </h3>
        <p className="text-muted">
          Empowering professionals through practical training programs 
          in design, construction technology, and business development.
        </p>
        <a
          href="#academy"
          className="btn fw-semibold"
          style={{
            backgroundColor: "#FF7A00",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Learn More
        </a>
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
