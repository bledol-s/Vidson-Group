import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import scrollToId from '../utils/scrollToId';

function Home() {
  return (
    <>
      <section id="home">
      {/* ===== HERO SLIDER ===== */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="/images/vidson-solar.jpg"
              className="d-block w-100"
              alt="Vidson Solar Facade"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold" style={{ color: '#FF7A00' }}>Building Excellence</h2>
              <p style={{ color: '#000000ff' }}>Innovating the future of construction and engineering</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="/images/vidson-academy.jpg"
              className="d-block w-100"
              alt="Vidson Academy"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold" style={{ color: '#FF7A00' }}>Engineering Quality</h2>
              <p style={{ color: '#000000ff' }}>Delivering value-driven solutions across Nigeria</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="/images/vidson-realestate.jpg"
              className="d-block w-100"
              alt="Vidson Real Estate"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold" style={{ color: '#FF7A00' }}>Innovation & Integrity</h2>
              <p style={{ color: '#000000ff' }}>Building with purpose and precision</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
      
      <section id="services" className="py-3 bg-white">
      {/* Abstract separator */}
      <div className="abstract-sep my-4" data-aos="fade-up" data-aos-delay="50" />

      <div className="container">

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
            <Link to="/aluminium" className="btn btn-vidson mt-2">
              Learn More
            </Link>
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
            <Link to="/solar" className="btn btn-vidson mt-2">
              Learn More
            </Link>
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
            <Link to="/realestate" className="btn btn-vidson mt-2">
              Learn More
            </Link>
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
            <Link to="/academy" className="btn btn-vidson mt-2">
              Learn More
            </Link>
          </div>
        </div>

      </div>
      {/* Abstract separator */}
      <div className="abstract-sep my-4" data-aos="fade-up" data-aos-delay="50" />
    </section>

    {/* ===== ABOUT SECTION ===== */}
<section className="about-section py-5 " id="about" 
        style={{
            background: 'linear-gradient(90deg, #FF7A00 0%, #4A4A4A 100%)',
            color: 'white',
            borderRadius: '12px',
          }}
>
  <div className="container">
    <div className="row align-items-center">
      
      {/* Image Column */}
      <div className="col-md-5 mb-4 mb-md-3" data-aos="fade-right">
        <img 
          src="/images/about-vidson.jpg" 
          alt="About Vidson Group" 
          className="img-fluid rounded shadow-sm"
        />
      </div>

      {/* Text Column */}
      <div className="col-md-6" data-aos="fade-left">
        <h2 className="fw-bold" style={{ color: '#4A4A4A' }}>
          About <span style={{ color: '#FF7A00' }}>Vidson Group</span>
        </h2>
        <p className="mt-3" style={{ color: '#fff', lineHeight: '1.8' }}>
          Vidson Group is a forward-thinking company built on innovation, precision, and quality. 
          With expertise spanning across aluminium and glass works, solar façades, real estate 
          development, and professional training through Vidson Academy, our mission is to deliver 
          sustainable solutions that redefine modern living and construction in Nigeria.
        </p>
        <p className="mt-3" style={{ color: '#fff', lineHeight: '1.8' }}>
          We combine technical excellence with creative design thinking — ensuring every project 
          reflects durability, functionality, and beauty. From concept to completion, Vidson 
          remains committed to setting new benchmarks for performance and customer satisfaction.
        </p>

        {/* Buttons */}
        <div className="d-flex flex-wrap gap-3 mt-4">
          <button
            onClick={() => scrollToId('contact').catch(() => {})}
            className="btn btn-lg"
            style={{
              backgroundColor: "#FF7A00",
              color: "white",
              border: "none",
              padding: "10px 25px",
              borderRadius: "6px",
              fontWeight: "500",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            Get in Touch
          </button>
          <Link
            to="/about"
            className="btn btn-lg"
            style={{
              backgroundColor: "transparent",
              color: "#FF7A00",
              border: "2px solid #FF7A00",
              padding: "10px 25px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== PORTFOLIO SECTION ===== */}
<section className="portfolio-section py-5" id="projects">
  <div className="container">
    <h2 className="fw-bold text-center mb-4" style={{ color: '#4A4A4A' }}>
      Our <span style={{ color: '#FF7A00' }}>Projects</span>
    </h2>

    <div 
      className="portfolio-slider d-flex gap-4 overflow-auto pb-3"
      style={{
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'thin',
        scrollbarColor: '#FF7A00 #f0f0f0',
      }}
    >
      {/* Project Card */}
      {[
        {
          img: '/images/cbn-adoekiti.jpg',
          title: 'Central Bank of Nigeria',
          location: 'Ado Ekiti, Nigeria',
          scope: 'Cladding and Curtain Walls'
        },
        {
          img: '/images/british-council-ikoyi.jpg',
          title: 'British Council Office',
          location: 'Ikoyi, Lagos',
          scope: 'Curtain Walls, Windows & Doors'
        },
        {
          img: '/images/gambia-airport.jpg',
          title: 'Gambia International Airport',
          location: 'Banjul, Gambia',
          scope: 'Cladding, Curtain Walls, Windows & Doors'
        },
        {
          img: '/images/mtn-office.jpg',
          title: 'MTN Office',
          location: 'Victoria Island, Lagos',
          scope: 'Cladding, Curtain Walls, Windows & Doors'
        },
        {
          img: '/images/zenith-towers.jpg',
          title: 'Zenith Towers',
          location: 'Victoria Island, Lagos',
          scope: 'Cladding, Curtain Walls, Windows & Doors'
        },
        {
          img: '/images/apdc-abuja.jpg',
          title: 'Abuja Property Dev. Company',
          location: 'Abuja, Nigeria',
          scope: 'Cladding, Curtain Walls, Windows & Doors'
        }
      ].map((project, index) => (
        <div
          key={index}
          className="project-card flex-shrink-0"
          data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
          style={{
            width: '320px',
            scrollSnapAlign: 'start',
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
          />
          <div className="p-3">
            <h5 style={{ color: '#FF7A00' }}>{project.title}</h5>
            <p className="mb-1" style={{ color: '#4A4A4A', fontSize: '14px' }}>
              {project.location}
            </p>
            <p style={{ color: '#555', fontSize: '13px' }}>
              {project.scope}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* View More Button */}
    <div className="text-center mt-5">
      <button
        className="btn btn-lg"
        style={{
          backgroundColor: '#FF7A00',
          color: 'white',
          border: 'none',
          padding: '10px 25px',
          borderRadius: '6px'
        }}
      >
        View More Projects
      </button>
    </div>
  </div>
</section>

      {/* ===== NEWS SECTION ===== */}
<section className="news-section py-5" id="news">
  <div className="container">
    <h2 className="fw-bold text-center mb-4" style={{ color: '#4A4A4A' }}>
      Latest <span style={{ color: '#FF7A00' }}>News & Updates</span>
    </h2>

    <div
      className="news-slider d-flex gap-4 overflow-auto pb-3"
      style={{
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'thin',
        scrollbarColor: '#FF7A00 #f0f0f0',
      }}
    >
      {[
        {
          img: '/images/news-expansion.jpg',
          title: 'Vidson Group Expands Operations in West Africa',
          date: 'October 10, 2025',
          description:
            'Vidson Group announces a major expansion across West Africa, strengthening partnerships and delivering innovative façade systems.',
        },
        {
          img: '/images/cbn-adoekiti.jpg',
          title: 'CBN Ado-Ekiti Project Successfully Completed',
          date: 'September 22, 2025',
          description:
            'Vidson Aluminium & Glass completes the Central Bank of Nigeria Ado-Ekiti facade project, setting new standards in precision and quality.',
        },
        {
          img: '/images/news-academy.jpg',
          title: 'Vidson Academy Launches Training Program',
          date: 'August 30, 2025',
          description:
            'Vidson Academy opens a new practical training series for young professionals in curtain walling and aluminium systems.',
        },
        {
          img: '/images/news-solar.jpg',
          title: 'Vidson Solar Introduces Energy-Efficient Panels',
          date: 'July 12, 2025',
          description:
            'The Solar division introduces a new range of panels for sustainable facade integration and renewable energy efficiency.',
        },
        {
          img: '/images/news-realestate.jpg',
          title: 'Vidson Lauches Solar Powered Real Estate',
          date: 'October 12, 2025',
          description:
            'The Solar division introduces a new real estate powered by powered by solar, all the facades, windows, doors and facade are generating energy for each unit of a home.',
        },
      ].map((news, index) => (
        <div
          key={index}
          className="news-card flex-shrink-0"
          data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
          style={{
            width: '320px',
            scrollSnapAlign: 'start',
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={news.img}
            alt={news.title}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />
          <div className="p-3">
            <h5 style={{ color: '#FF7A00' }}>{news.title}</h5>
            <p className="mb-1" style={{ color: '#999', fontSize: '13px' }}>
              {news.date}
            </p>
            <p style={{ color: '#4A4A4A', fontSize: '14px' }}>{news.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Newsletter Signup */}
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
  </div>
</section>

{/* ===== TESTIMONIALS SECTION ===== */}
<section className="testimonials-section py-5" id="testimonials">
  <div className="container">
    <h2 className="fw-bold text-center mb-4" style={{ color: '#4A4A4A' }}>
      What Our <span style={{ color: '#FF7A00' }}>Clients Say</span>
    </h2>

    <div
      className="testimonials-slider d-flex gap-4 overflow-auto pb-3"
      style={{
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'thin',
        scrollbarColor: '#FF7A00 #f0f0f0',
      }}
    >
      {[
        {
          name: 'Engr. Samuel Adedeji',
          position: 'Project Manager, NEPL',
          review:
            'Vidson Group has been a reliable partner throughout our project. Their precision in aluminium and glass works is unmatched.',
          img: '/images/client1.jpg',
        },
        {
          name: 'Mrs. Grace Okon',
          position: 'Architect, APDC Abuja',
          review:
            'They deliver on time and with exceptional quality. Our office building stands out beautifully thanks to Vidson’s craftsmanship.',
          img: '/images/client2.jpg',
        },
        {
          name: 'Mr. Lamin Jatta',
          position: 'Airport Supervisor, Gambia International Airport',
          review:
            'Their facade and curtain wall installation was top-notch. The professionalism of the team made the entire process seamless.',
          img: '/images/client1.jpg',
        },
        {
          name: 'Engr. Samuel Adedeji',
          position: 'Project Manager, NEPL',
          review:
            'Vidson Group has been a reliable partner throughout our project. Their precision in aluminium and glass works is unmatched.',
          img: '/images/client1.jpg',
        },
        {
          name: 'Mrs. Grace Okon',
          position: 'Architect, APDC Abuja',
          review:
            'They deliver on time and with exceptional quality. Our office building stands out beautifully thanks to Vidson’s craftsmanship.',
          img: '/images/client2.jpg',
        },
        {
          name: 'Mr. Lamin Jatta',
          position: 'Airport Supervisor, Gambia International Airport',
          review:
            'Their facade and curtain wall installation was top-notch. The professionalism of the team made the entire process seamless.',
          img: '/images/client1.jpg',
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-card flex-shrink-0 text-center p-4"
          data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
          style={{
            width: '320px',
            scrollSnapAlign: 'start',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="rounded-circle mb-3"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              border: '3px solid #FF7A00',
            }}
          />
          <p style={{ color: '#555', fontSize: '14px', minHeight: '80px' }}>
            “{testimonial.review}”
          </p>
          <h6 className="fw-bold mt-3" style={{ color: '#FF7A00' }}>
            {testimonial.name}
          </h6>
          <p style={{ color: '#4A4A4A', fontSize: '13px' }}>{testimonial.position}</p>
        </div>
      ))}
    </div>

    {/* Leave a Review Button */}
    <div className="text-center mt-5">
      <button
        className="btn btn-lg"
        style={{
          backgroundColor: '#FF7A00',
          color: 'white',
          border: 'none',
          padding: '10px 25px',
          borderRadius: '6px',
        }}
      >
        Leave a Review
      </button>
    </div>
  </div>
</section>


{/* ===== CONTACT SECTION ===== */}
<section className="contact-section py-3" id="contact">
        {/* Abstract separator */}
    <div className="abstract-sep my-4" data-aos="fade-up" data-aos-delay="50" />

  <div className="container">
    <h2 className="fw-bold text-center mb-4" style={{ color: '#4A4A4A' }}>
      Get In <span style={{ color: '#FF7A00' }}>Touch</span>
    </h2>

    <div className="row gy-4 align-items-center">
      {/* Contact Form */}
      <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-right">
        <div
          className="p-4 shadow-sm rounded w-100"
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            maxWidth: '480px',
          }}
        >
          <h5 className="fw-bold mb-3" style={{ color: '#FF7A00' }}>
            Send us a Message
          </h5>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Your Message"
                rows="6"
                required
                style={{ minHeight: '140px' }}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="btn"
                style={{
                  backgroundColor: '#FF7A00',
                  color: 'white',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 25px',
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Information */}
      <div className="col-lg-6" data-aos="fade-left">
        <div
          className="p-4 shadow-sm rounded"
          style={{
            background: 'linear-gradient(90deg, #FF7A00 0%, #4A4A4A 100%)',
            color: 'white',
            borderRadius: '12px',
          }}
        >
          <h5 className="fw-bold mb-3">Our Offices</h5>

          <div className="mb-3">
            <h6 className="fw-bold">Corporate Office / Factory</h6>
            <p className="mb-1">
              Block 0, Plot 3, Gateway Industrial Estate, Km 15,<br />
              Lagos-Ibadan Expressway
            </p>
            <p className="mb-0">
              Tel: 01-814 3065<br />
              Mobile: +2348033609755, +2348033046072
            </p>
          </div>

          <hr style={{ borderColor: 'rgba(255,255,255,0.3)' }} />

          <div className="mb-3">
            <h6 className="fw-bold">Abuja Office</h6>
            <p className="mb-1">
              Vidson Suite, 1st Floor, Abuja Property Dev. Company Building,<br />
              Plot 1329, Cadastral Zone AO, Area 11, By AGIS, Garki, Abuja
            </p>
            <p className="mb-0">
              Mobile: +2348062065279, +2348059273898
            </p>
          </div>

          <hr style={{ borderColor: 'rgba(255,255,255,0.3)' }} />

          <div className="mb-3">
            <h6 className="fw-bold">Port Harcourt Office</h6>
            <p className="mb-1">
              Suite EW8, Lulli Shopping Mall, 20 Rumuola Road, Port Harcourt, Rivers
            </p>
            <p className="mb-0">
              Mobile: +2348035035036278, +2347041082894
            </p>
          </div>

          <hr style={{ borderColor: 'rgba(255,255,255,0.3)' }} />

          <div>
            <p className="mb-1">Email: vidsongroup@gmail.com</p>
            <p className="mb-1">Email: info@vidsongroup.net</p>
            <p className="mb-0">Website: www.vidsongroup.com.ng</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Abstract separator */}
      <div className="abstract-sep my-4" data-aos="fade-up" data-aos-delay="50" />

    {/* Partners Section */}
<section className="py-5 bg-light" data-aos="fade-up">
  <div className="container text-center">
    <h2 className="fw-bold mb-4">Our Trusted Partners</h2>
    <p className="text-muted mb-5 fs-5">
      At Vidson Group, collaboration drives innovation. We proudly partner with leading organizations 
      to deliver top-tier products, technologies, and development solutions.
    </p>

    <div className="row g-4 justify-content-center">
      {/* Partner 1 - Reynaers Aluminium */}
      <div
        className="col-md-5 col-sm-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="card border-0 shadow-sm h-100 p-4 text-center">
          <img
            src="/images/reynaers.jpg"
            alt="Reynaers Aluminium"
            className="img-fluid mx-auto mb-3"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <h5 className="fw-bold mb-2">Reynaers Aluminium</h5>
          <p className="text-muted">
            A global leader in aluminium window and facade systems, Reynaers provides 
            advanced technology and sustainability-driven designs for modern architecture.
          </p>
          <a
            href="https://www.reynaers.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none fw-bold"
            style={{ color: "#FF7A00" }}
          >
            Visit Partner →
          </a>
        </div>
      </div>

      {/* Partner 2 - APDC */}
      <div
        className="col-md-5 col-sm-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="card border-0 shadow-sm h-100 p-4 text-center">
          <img
            src="/images/apdc.jpg"
            alt="APDC"
            className="img-fluid mx-auto mb-3"
            style={{ maxHeight: "80px", objectFit: "contain" }}
          />
          <h5 className="fw-bold mb-2">Abuja Property Development Company (APDC)</h5>
          <p className="text-muted">
            A leading real estate developer in Nigeria focused on sustainable urban development, 
            housing, and infrastructure projects in the FCT and beyond.
          </p>
          <a
            href="https://apdc.com.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none fw-bold"
            style={{ color: "#FF7A00" }}
          >
            Visit Partner →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default Home;
