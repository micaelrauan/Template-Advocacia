"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta scroll para alterar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/areas-atuacao", label: "Áreas de Atuação" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <>
      {/* Top Bar - Informações de contato */}
      <div className="bg-primary text-white py-2 text-sm hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a
                href="tel:+558532234567"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <FiPhone size={14} />
                <span>(85) 3223-4567</span>
              </a>
              <a
                href="mailto:contato@cavalcantiadvocacia.com.br"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <FiMail size={14} />
                <span>contato@cavalcantiadvocacia.com.br</span>
              </a>
            </div>
            <div className="text-secondary-light">Fortaleza - CE</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-4"
            : "bg-white/95 backdrop-blur-sm py-6"
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary">
                Cavalcanti & Associados
              </span>
              <span className="text-xs md:text-sm text-secondary tracking-widest">
                ADVOCACIA DE EXCELÊNCIA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-700 hover:text-primary font-medium transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contato" className="btn-primary">
                  Fale Conosco
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-neutral-200 pt-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-neutral-700 hover:text-primary font-medium transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Link
                    href="/contato"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center block"
                  >
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
