import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "History & Legacy", href: "/about#history" },
      { label: "Vision & Mission", href: "/about#mission" },
      { label: "Principal's Message", href: "/about#principal" },
      { label: "Faculty", href: "/about#faculty" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    dropdown: [
      { label: "Primary School", href: "/academics#primary" },
      { label: "Middle School", href: "/academics#middle" },
      { label: "Senior Secondary", href: "/academics#senior" },
      { label: "Curriculum", href: "/academics#curriculum" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-dark text-gray-300 text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="text-gold font-semibold tracking-wider uppercase text-xs">
            Pursuit of Excellence — Est. 1960, Guwahati
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+913612xxxxxx" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={12} />
              <span>+91 361 2XXXXXX</span>
            </a>
            <a href="mailto:info@southpointschool.edu.in" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail size={12} />
              <span>info@southpointschool.edu.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f1e3d]/98 backdrop-blur-md shadow-lg"
            : "bg-[#0f1e3d]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="South Point School Logo"
                className="h-12 w-12 object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
              />
              <div className="leading-tight">
                <div className="text-gold font-bold text-lg md:text-xl tracking-wide">
                  South Point School
                </div>
                <div className="text-gray-400 text-xs tracking-widest uppercase">
                  Guwahati
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded transition-colors ${
                      location === link.href
                        ? "text-gold"
                        : "text-gray-200 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={14} className="opacity-60" />}
                  </Link>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 w-52 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-800 transition-colors border-b border-gray-50 last:border-0"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <Link
                href="/admissions"
                className="ml-3 px-5 py-2 rounded text-sm font-semibold gold-gradient text-[#0f1e3d] hover:opacity-90 transition-opacity shadow-sm"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gold p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-[#0a1228] border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="block px-3 py-2.5 text-gray-200 hover:text-gold font-medium text-sm rounded"
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 border-l border-white/10 pl-3 mb-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block py-1.5 text-gray-400 hover:text-gold text-xs"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/admissions"
                  className="mt-2 px-5 py-2.5 rounded text-sm font-semibold gold-gradient text-[#0f1e3d] text-center"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
