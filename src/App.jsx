import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
