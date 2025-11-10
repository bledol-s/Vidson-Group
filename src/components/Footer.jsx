import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import logo from "../assets/vidson-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const goToContact = () => {
  // Navigate to homepage and scroll to contact section
  navigate("/");
  setTimeout(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 300); // wait for the homepage to load before scrolling
};

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #FFD54F 5%, #4A4A4A 40%, #FF7A00 80%)", // brand gradient
        color: "#fff",
        paddingTop: "50px",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          {/* Company Info */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <img
              src={logo}
              alt="Vidson Group Logo"
              style={{ height: "60px", marginBottom: "15px" }}
            />
            <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#fff" }}>
              Building excellence through innovation and quality craftsmanship.
              Vidson Group continues to deliver value-driven engineering,
              construction, and manufacturing services across Africa.
            </p>
          </div>

          {/* Quick Links - centered */}
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled text-left">
              <li>
                <a
                  href="/"
                  className="text-white text-decoration-none d-block mb-1 fw-medium"
                >
                  Home
                </a>
              </li>
              
              {/* Subsidiaries Dropdown */}
              <li className="dropdown">
                <a
                  href="#"
                  className="text-white text-decoration-none d-block mb-1 dropdown-toggle fw-medium"
                  data-bs-toggle="dropdown"
                >
                  Subsidiaries
                </a>
                <ul className="dropdown-menu text-left shadow-sm">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/aluminium")}
                      style={{ cursor: "pointer" }}
                    >
                      Vidson Aluminium
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/solar")}
                      style={{ cursor: "pointer" }}
                    >
                      Vidson Solar
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/realestate")}
                      style={{ cursor: "pointer" }}
                    >
                      Vidson Real Estate
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/academy")}
                      style={{ cursor: "pointer" }}
                    >
                      Vidson Academy
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  className="text-white text-decoration-none d-block mb-1 fw-medium"
                  onClick={() => navigate("/about")}
                  style={{ cursor: "pointer" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-white text-decoration-none d-block mb-1 fw-medium"
                  onClick={() => navigate("/projects")}
                  style={{ cursor: "pointer" }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-white text-decoration-none d-block mb-1 fw-medium"
                  onClick={() => navigate("/news")}
                  style={{ cursor: "pointer" }}
                >
                  News
                </a>
              </li>
              <li>
                <a
                  onClick={goToContact}
                  style={{ cursor: "pointer" }}
                  className="text-white text-decoration-none d-block mb-1 fw-medium"
                >
                Contact
                </a>
              </li>
              <li>
                <a
                  className="text-white text-decoration-none d-block mb-1 fw-medium"
                  onClick={() => navigate("/careers")}
                  style={{ cursor: "pointer" }}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter + Socials */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Subscribe to Our Newsletter</h5>
            <p className="text-white">
              Stay updated with the latest from Vidson Group.
            </p>
            <form className="d-flex justify-content-center justify-content-md-start mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2"
                style={{
                  borderRadius: "25px",
                  border: "1px solid #ccc",
                  padding: "10px 15px",
                  fontSize: "14px",
                }}
              />
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#1A1A1A",
                  color: "#fff",
                  borderRadius: "25px",
                  padding: "10px 20px",
                  fontWeight: "500",
                }}
              >
                Subscribe
              </button>
            </form>

            {/* Social Media */}
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <a href="https://facebook.com" className="text-white me-3 fs-4">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="text-white me-3 fs-4">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-white me-3 fs-4">
                <FaLinkedin />
              </a>
              <a href="https://tiktok.com" className="text-white fs-4">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Copyright */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0",
          marginTop: "30px",
          width: "100%",
        }}
      >
        <small>
          &copy; {new Date().getFullYear()} Vidson Group. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
