import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/vidson-logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      } transition-all`}
      style={{
        transition: "all 0.3s ease-in-out",
        padding: scrolled ? "8px 0" : "15px 0",
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-dark d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Vidson Group Logo"
            style={{
              height: scrolled ? "48px" : "80px",
              transition: "height 0.3s ease-in-out",
            }}
          />
        </a>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">About</a>
            </li>

            {/* Services with dropdown */}
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle"
                href="#services"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#subsidiaries">Subsidiaries</a></li>
                <li><a className="dropdown-item" href="#engineering">Engineering</a></li>
                <li><a className="dropdown-item" href="#construction">Construction</a></li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#news">News</a>
            </li>

            <li className="nav-item ms-3">
              <a
                className="btn"
                href="#contact"
                style={{
                  backgroundColor: "#FF7A00",
                  color: "white",
                  borderRadius: "25px",
                  padding: "8px 18px",
                  fontWeight: "500",
                }}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
