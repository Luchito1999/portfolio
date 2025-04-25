import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import './NavBar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // cambia al scrollear 10px o más
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-10 py-2 flex justify-between items-center transition-colors duration-300 ${
        scrolled
          ? "bg-[#141514]/80 backdrop-blur-md shadow-md"
          : "bg-[#141514]"
      }`}
    >
      {/* Logo + Nombre */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="h-8 w-8 object-contain"
            style={{ maxWidth: "8rem", maxHeight: "8rem" }}
          />
          <span className="font-medium transition-colors duration-300">
            Luciano Portfolio
          </span>
        </Link>
      </div>

      {/* Links */}
      <ul className="flex gap-10 list-none">
        <li>
          <a
            href="#biografia"
            className="text-[#F8F9F8] hover:text-white font-medium transition-colors duration-300"
          >
            Acerca de mí
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-[#F8F9F8] hover:text-white font-medium transition-colors duration-300"
          >
            Proyectos
          </a>
        </li>
        <li>
        <a
            href="#contact"
            className="text-[#F8F9F8] hover:text-white font-medium transition-colors duration-300"
          >
            Contactame
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
