import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aluminium from './pages/Aluminium';
import Solar from './pages/Solar';
import Realestate from './pages/Realestate';
import Academy from './pages/Academy';
import Projects from './pages/Projects';
import About from './pages/About';
import News from './pages/News';
import Careers from './pages/Careers';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aluminium" element={<Aluminium />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/realestate" element={<Realestate />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
