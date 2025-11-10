import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/vidson-logo.png";
import { Link, useNavigate } from "react-router-dom";
import scrollToId from '../utils/scrollToId';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "shadow-sm" : "bg-transparent"
      } transition-all`}
      style={{
        transition: "all 0.3s ease-in-out",
        padding: scrolled ? "8px 0" : "15px 0",
        background: scrolled
          ? "linear-gradient(135deg, #FFD54F 5%, #4A4A4A 40%, #FF7A00 80%)"
          : "transparent",
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={logo}
            alt="Vidson Group Logo"
            style={{
              height: scrolled ? "68px" : "120px",
              transition: "height 0.3s ease-in-out",
              cursor: "pointer",
            }}
          />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <a
                className="nav-link active"
                href="/"
                style={{
                  color: scrolled ? "#fff" : "#1A1A1A",
                  transition: "color 0.3s ease",
                }}
              >
                Home
              </a>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown mx-2">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: scrolled ? "#fff" : "#1A1A1A",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Subsidiaries
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/aluminium">Vidson Aluminium</Link></li>
                <li><Link className="dropdown-item" to="/solar">Vidson Solar</Link></li>
                <li><Link className="dropdown-item" to="/realestate">Vidson Real Estate</Link></li>
                <li><Link className="dropdown-item" to="/academy">Vidson Academy</Link></li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <Link
                className="nav-link btn btn-link"
                to="/about"
                style={{
                  color: scrolled ? "#fff" : "#1A1A1A",
                  transition: "color 0.3s ease",
                }}
              >
                About
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className="nav-link btn btn-link"
                to="/projects"
                style={{
                  color: scrolled ? "#fff" : "#1A1A1A",
                  transition: "color 0.3s ease",
                }}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className="nav-link btn btn-link"
                to="/news"
                style={{
                  color: scrolled ? "#fff" : "#1A1A1A",
                  transition: "color 0.3s ease",
                }}
              >
                News
              </Link>
            </li>

            {/* CTA Button */}
            <li className="nav-item ms-3">
              <button
                onClick={() => {
                  // Navigate to home, then scroll after it loads
                  navigate("/");
                  setTimeout(() => {
                    const section = document.getElementById("contact");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
                className="btn"
                style={{
                  backgroundColor: scrolled ? "#1A1A1A" : "#FF7A00",
                  color: "white",
                  borderRadius: "25px",
                  padding: "8px 18px",
                  fontWeight: "500",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                Get in Touch
              </button>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
