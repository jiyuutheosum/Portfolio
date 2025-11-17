import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Navigation component with smooth scroll, active section tracking, and mobile menu
export default function Navigation() {
  // State for mobile menu open/closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for tracking which section is currently active
  const [activeSection, setActiveSection] = useState("home");
  // State for navbar background when scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation links configuration
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  // Handle smooth scroll to section when nav link is clicked
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll to the section with offset for fixed navbar
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      // Add backdrop blur when scrolled down
      setIsScrolled(window.scrollY > 20);

      // Determine which section is currently in view
      const sections = navLinks.map(link => link.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if it's in the top half of the viewport
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      // Update active section state
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);
    // Initial check on mount
    handleScroll();

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed navigation bar with backdrop blur when scrolled */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo / Name */}
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md"
              data-testid="link-logo"
            >
              Portfolio
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                  data-testid={`link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Framer Motion animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background pt-20"
          >
            <div className="flex flex-col items-center gap-4 p-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-2xl font-semibold w-full py-4 rounded-md hover-elevate active-elevate-2 ${
                    activeSection === link.id ? "text-primary" : "text-foreground"
                  }`}
                  data-testid={`link-mobile-${link.id}`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
