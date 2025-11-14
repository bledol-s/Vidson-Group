import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Solar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products = [
    { name: "Solar Panels", img: "/images/samples/solar-panels.jpg", desc: "High-efficiency monocrystalline and polycrystalline solar panels built for long-term performance." },
    { name: "Inverters", img: "/images/samples/inverter.jpg", desc: "Reliable inverters that convert DC to AC efficiently for both residential and industrial use." },
    { name: "Solar Batteries", img: "/images/samples/battery.jpg", desc: "Durable and high-capacity batteries that ensure constant power supply and energy storage." },
    { name: "Charge Controllers", img: "/images/samples/charge-controller.jpg", desc: "Smart controllers that regulate energy flow and prevent battery overcharging." },
    { name: "Solar Street Lights", img: "/images/samples/solar-streetlight.jpg", desc: "Energy-saving streetlights designed for durability and bright illumination." },
    { name: "Solar Water Heaters", img: "/images/samples/solar-heater.jpg", desc: "Eco-friendly water heating systems that harness solar power efficiently." },
    { name: "Off-Grid Systems", img: "/images/samples/off-grid.jpg", desc: "Independent solar power systems ideal for remote areas and full autonomy." },
    { name: "Hybrid Systems", img: "/images/samples/hybrid.jpg", desc: "Smart hybrid setups that combine solar and grid systems for reliability and efficiency." },
    { name: "Solar Accessories", img: "/images/samples/solar-accessories.jpg", desc: "Supporting solar components like cables, mounts, and connectors for complete installations." },
  ];

  return (
    <div className="solar-page">
      {/* Hero Section */}
      <section
        className="hero-section text-center text-light d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/hero/hero-solar2.jpg')",
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
          <h1 className="display-4 fw-bold" style={{ color: '#FF7A00' }}>Vidson Solar</h1>
          <p className="lead">
            Powering the Future with Clean and Sustainable Energy
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4 fw-bold">About Vidson Solar</h2>
        <p className="text-muted fs-5">
          Vidson Solar, a subsidiary of Vidson Group, is dedicated to providing renewable energy
          solutions that power homes, businesses, and industries sustainably. We specialize in
          the design, installation, and maintenance of efficient solar energy systems across Nigeria.
        </p>
        <p className="text-muted fs-5">
          Our mission is to accelerate the transition to clean energy through innovation,
          reliable technology, and affordable solar solutions that improve everyday life.
        </p>
      </section>

      {/* Product Gallery */}
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

      {/* Why Choose Section */}
      <section className="why-choose-us py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Vidson Solar?</h2>
          <p className="text-muted fs-5 mb-4">
            We bring you reliable, affordable, and sustainable energy solutions — built for the future.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Sustainable Power</h5>
              <p className="text-muted">
                100% renewable energy solutions that reduce environmental impact and electricity bills.
              </p>
            </div>

            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Expert Installation</h5>
              <p className="text-muted">
                Our engineers design and install systems tailored to your power needs and location.
              </p>
            </div>

            <div className="p-3 border rounded-4 shadow-sm" style={{ width: "280px" }}>
              <h5 className="fw-bold text-warning">Quality Components</h5>
              <p className="text-muted">
                We use only globally certified products to ensure long-term reliability and performance.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-3">
            <button
              onClick={() => {
                window.location.href = "/#contact";
              }}
              className="btn btn-lg"
              style={{
                backgroundColor: "#FF7A00",
                color: "#1A1A1A",
                border: "none",
                padding: "10px 25px",
                borderRadius: "6px",
                fontWeight: "600"
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

export default Solar;
