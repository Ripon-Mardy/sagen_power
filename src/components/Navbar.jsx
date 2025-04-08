import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import sagenLogo from "../../public/images/logo/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    {name : "Our Services", path : "/services"},
    { name: "Blogs", path: "/blogs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 transition-all backdrop-blur-md duration-300 z-50 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="xl:container xl:mx-auto px-2 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={sagenLogo} alt="sagenpower" className="w-12" />
          <div className="flex flex-col">
          <span className="text-headingColor font-semibold leading-6 text-2xl -tracking-tighter">
            SAGEN POWER
          </span>
          <span className="text-xs text-textColor -tracking-tighter">Quality service to our commitment</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-[#333333] hover:text-blue-600 text-base font-normal transition duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-buttonBgHover transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="https://wa.me/8801854667543"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-buttonBg font-normal text-base text-white px-5 py-2 rounded-full shadow hover:bg-buttonBgHover transition duration-300">
              Contact Me
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[70%] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
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
            <a
              key={index}
              href={link.path}
              className="text-[#333333] font-normal hover:text-blue-600 text-sm transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-4 text-sm py-2 rounded-full shadow hover:bg-blue-700 transition">
            Contact Me
          </button>
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
