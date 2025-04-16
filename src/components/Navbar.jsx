import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import sagenLogo from "../../public/images/logo/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Our Services", path: "/services" },
    { name: "Gallery ", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <nav
      className={`w-full fixed transition-all bg-white shadow-md duration-300 z-50 `}
    >
      <div className="xl:container xl:mx-auto px-2 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={sagenLogo} alt="sagenpower" className="w-12" />
          <div className="flex flex-col">
            <span
              className={`text-headingColor font-bold leading-6 text-2xl -tracking-tighter `}
            >
              Sagen Power
            </span>
            <span
              className={`text-xs text-textColor font-semibold -tracking-tighter  `}
            >
              Quality service to our commitment
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-[#333333] hover:text-blue-600 text-base font-semibold transition duration-300 relative group `}
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-buttonBgHover transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="tel:+8801832359227"
            className="bg-buttonBg font-normal text-base text-white px-5 py-2 rounded-full shadow hover:bg-buttonBgHover transition duration-300"
          >
            Call Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-screen w-[70%] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-5 flex justify-between items-center border-b">
          <a href="/">
            <img src={sagenLogo} alt="sagenpower" className="w-14" />
          </a>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-[#333333] font-semibold hover:text-blue-600 text-sm transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+8801832359227"
            className="bg-buttonBg font-normal text-base text-white px-5 py-2 rounded-full shadow hover:bg-buttonBgHover transition duration-300"
          >
            Call Us
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 h-screen"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
