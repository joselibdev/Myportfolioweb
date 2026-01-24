import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <div className="text-sm font-medium tracking-wide">JLRN</div>
        
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#profile" className="text-gray-600 hover:text-gray-900 transition-colors">
            Profile
          </a>
          <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
            Experience
          </a>
          <a href="#education" className="text-gray-600 hover:text-gray-900 transition-colors">
            Education
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}