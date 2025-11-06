import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/vidson-logo.png";
import { Link } from 'react-router-dom';

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
    // Always navigate to home first
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300); // wait for Home to load
  };

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
              <a className="nav-link active" href="#home">Home</a>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown mx-2">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/aluminium">Vidson Aluminium</Link></li>
                <li><Link className="dropdown-item" to="solar">Vidson Solar</Link></li>
                <li><Link className="dropdown-item" to="realestate">Vidson Real Estate</Link></li>
                <li><Link className="dropdown-item" to="academy">Vidson Academy</Link></li>
              </ul>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link btn btn-link" to="about">About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link btn btn-link" to="projects">Projects</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link btn btn-link" to="news">News</Link>
            </li>

            {/* CTA Button */}
            <li className="nav-item ms-3">
              <button
                className="btn"
                onClick={() => handleScrollTo("contact")}
                style={{
                  backgroundColor: "#FF7A00",
                  color: "white",
                  borderRadius: "25px",
                  padding: "8px 18px",
                  fontWeight: "500",
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
