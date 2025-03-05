import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: "/source/img/slide/slide_1.png",
      title: "Agenciamento Marítimo Especializado",
      subtitle: "Soluções completas para operações marítimas",
    },
    {
      id: 2,
      image: "/source/img/slide/slide_2.png",
      title: "Gerenciamento de Operações",
      subtitle: "Coordenação eficiente para suas necessidades navais",
    },
    {
      id: 3,
      image: "/source/img/slide/slide_3.png",
      title: "Assessoria e Suporte Técnico",
      subtitle: "Consultoria especializada para o setor marítimo",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative overflow-hidden h-[90vh] w-full border-b-3 border-accent">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Slide anterior"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Próximo slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 -z-10"
          }`}
        >
          {/* Container da imagem ocupando 100% do espaço */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />

            {/* Sobreposição leve para melhorar contraste do texto */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>

          {/* Gradiente duplo: superior e inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent h-[150px]"></div>

          {/* Conteúdo do slide com padding-top para ficar abaixo do header */}
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="h-[90px]"></div> {/* Espaçador para o header */}
            <div className="text-center px-4 md:px-8 pb-16 md:pb-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-carousel font-bold text-white mb-2 shadow-text">
                  {slide.title}
                </h2>

                <p className="text-base md:text-lg text-white/90 mb-6 max-w-3xl mx-auto shadow-text">
                  {slide.subtitle}
                </p>

                <a
                  href="#nossos-servicos"
                  className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-md shadow-md transform transition-all duration-300 hover:scale-105"
                >
                  CONHEÇA NOSSOS SERVIÇOS
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicadores de Slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-white/70 w-2 hover:bg-white"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
