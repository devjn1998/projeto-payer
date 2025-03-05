import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Estendendo a interface Window para incluir scrollTimer
declare global {
  interface Window {
    scrollTimer: ReturnType<typeof setTimeout>;
  }
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();

  // Função simplificada para determinar a página ativa
  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  // Função para detectar se está rolando a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setIsScrolling(true);

      // Timer para detectar quando parou de rolar
      clearTimeout(window.scrollTimer);
      window.scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(window.scrollTimer);
    };
  }, []);

  // Menu links para facilitar manutenção
  const menuLinks = [
    { path: "/", label: "Início" },
    { path: "/servicos", label: "Serviços" },
    { path: "/sobrenos", label: "Sobre Nós" },
    { path: "/contato", label: "Contato" },
    { path: "/trabalheconosco", label: "Trabalhe Conosco" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${
          isScrolling
            ? "bg-gradient-to-b from-primary/95 to-transparent"
            : "bg-gradient-to-b from-primary/95 via-primary/80 to-primary/5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center py-2">
          <img
            src="/source/img/logo/logo_fnnova.png"
            alt="FN Agenciamentos Marítimos"
            className={`transition-all duration-300 max-w-[140px] sm:max-w-[160px] md:max-w-[180px] w-full ml-3 md:ml-6 lg:ml-12 ${
              scrolled ? "py-1" : "py-2"
            }`}
          />
        </Link>

        <button
          className="md:hidden bg-accent text-white p-2 rounded-md mr-4 shadow-lg hover:bg-accent/80 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu mobile */}
        <div
          className={`fixed inset-0 bg-primary/95 z-50 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-accent"
            aria-label="Fechar menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {menuLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl ${
                isActive(link.path)
                  ? "text-accent"
                  : "text-white hover:text-accent"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 mr-4 md:mr-6 lg:mr-12">
          {menuLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-2 lg:px-3 py-4 text-sm lg:text-base ${
                isActive(link.path)
                  ? "text-accent font-bold"
                  : "text-white hover:text-accent"
              }`}
            >
              <span className="uppercase tracking-wide">{link.label}</span>
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-t"></span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
