"use client";

import { useState, useEffect } from "react";
import { AnimatedFadeIn } from "./animated-section";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: "Benefícios", href: "#beneficios" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Lista de Espera", href: "#lista-espera" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <AnimatedFadeIn>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-primary/10 py-3 shadow-sm shadow-primary/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-2xl font-bold"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-tertiary to-destructive">
                Core Define
              </span>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium relative group"
                whileHover={{ y: -2 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white relative overflow-hidden group"
                onClick={() => {
                  const form = document.getElementById("wait-list-form");
                  if (form) {
                    form.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="relative z-10">Garantir Vaga</span>
                <span className="absolute inset-0 h-full w-0 bg-gradient-to-r from-tertiary to-destructive opacity-50 group-hover:w-full transition-all duration-300"></span>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/10"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium py-2 px-3 rounded-md hover:bg-primary/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: index * 0.05
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: menuItems.length * 0.05
                  }}
                >
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 w-full mt-2"
                    onClick={() => {
                      const form = document.getElementById("wait-list-form");
                      if (form) {
                        form.scrollIntoView({ behavior: "smooth" });
                        setMobileMenuOpen(false);
                      }
                    }}
                  >
                    Garantir Vaga
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </AnimatedFadeIn>
  );
} 