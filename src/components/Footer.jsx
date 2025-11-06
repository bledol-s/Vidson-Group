import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import logo from "../assets/vidson-logo.png";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A1A", color: "#f1f1f1", paddingTop: "50px" }}>
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <img
              src={logo}
              alt="Vidson Group Logo"
              style={{ height: "60px", marginBottom: "15px" }}
            />
            <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
              Building excellence through innovation and quality craftsmanship.
              Vidson Group continues to deliver value-driven engineering,
              construction, and manufacturing services across Nigeria.
            </p>

            {/* Social Media */}
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <a href="https://facebook.com" className="text-light me-3 fs-4">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="text-light me-3 fs-4">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-light me-3 fs-4">
                <FaLinkedin />
              </a>
              <a href="https://tiktok.com" className="text-light fs-4">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none ml-4">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#news" className="text-light text-decoration-none">News</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="#careers" className="text-light text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Subscribe to Our Newsletter</h5>
            <p>Stay updated with the latest from Vidson Group.</p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2"
                style={{
                  borderRadius: "25px",
                  border: "none",
                  padding: "10px 15px",
                  fontSize: "14px",
                }}
              />
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#FF7A00",
                  color: "#fff",
                  borderRadius: "25px",
                  padding: "10px 20px",
                  fontWeight: "500",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

        <div className="text-center pb-3">
          <small>
            &copy; {new Date().getFullYear()} Vidson Group. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
