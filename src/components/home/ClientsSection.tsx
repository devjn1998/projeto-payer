import React, { useState, useRef, useEffect } from "react";

const ClientsSection: React.FC = () => {
  const clients = [
    {
      id: 1,
      name: "Ambipar",
      logo: "/source/img/logo/ambipar.png",
      feedback:
        "A FN Agenciamentos Marítimos demonstrou excelência no suporte às nossas operações de logística ambiental, superando expectativas em eficiência e segurança dos processos.",
    },
    {
      id: 2,
      name: "Petrobras",
      logo: "/source/img/logo/petrobras.png",
      feedback:
        "Parceria estratégica de longo prazo. A FN Agenciamentos oferece soluções personalizadas e ágeis para nossas complexas operações no setor de óleo e gás.",
    },
    {
      id: 3,
      name: "Bravante",
      logo: "/source/img/logo/bravante.png",
      feedback:
        "Equipe altamente qualificada com conhecimento profundo do setor marítimo. Sempre disponíveis, mesmo em situações emergenciais, garantindo operações sem interrupções.",
    },
    {
      id: 4,
      name: "Locar",
      logo: "/source/img/logo/locar.png",
      feedback:
        "Comunicação transparente e atendimento personalizado. A FN otimizou nossa cadeia logística, reduzindo custos e melhorando a qualidade dos nossos serviços.",
    },
    {
      id: 5,
      name: "Gavea Logística",
      logo: "/source/img/logo/gavea.png",
      feedback:
        "Experiência excepcional em documentação e despacho aduaneiro. Processos agilizados e conformidade total com as regulamentações do setor marítimo e portuário.",
    },
    {
      id: 6,
      name: "Imz Navegação",
      logo: "/source/img/logo/navegacao.png",
      feedback:
        "Atendimento 24/7 que faz toda diferença em nossas operações internacionais. Gestão eficiente de escalas e imprevistos com soluções rápidas e eficazes.",
    },
    {
      id: 7,
      name: "Camorim",
      logo: "/source/img/logo/camorim.png",
      feedback:
        "Desde que começamos a trabalhar com a FN, nossa eficiência operacional aumentou significativamente. Profissionais que realmente entendem as necessidades específicas do nosso negócio.",
    },
    {
      id: 8,
      name: "Superbraço",
      logo: "/source/img/logo/superbraco.png",
      feedback:
        "Agilidade na resolução de problemas e capacidade técnica impressionante. A equipe da FN Agenciamentos transformou nossa experiência com serviços marítimos.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Detecta dispositivos móveis e ajusta a quantidade de itens
  useEffect(() => {
    const updateItemsToShow = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      if (window.innerWidth < 480) {
        setItemsToShow(1);
      } else if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Ajusta o startIndex quando itemsToShow muda
  useEffect(() => {
    if (startIndex > clients.length - itemsToShow) {
      setStartIndex(Math.max(0, clients.length - itemsToShow));
    }
  }, [itemsToShow, clients.length, startIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIndex((prev) => Math.min(prev + 1, clients.length - itemsToShow));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Reduzido o threshold para melhor resposta
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      // Reduzido o threshold para melhor resposta
      handlePrev();
    }
  };

  // Cálculo de visibilidade dos botões
  const showPrevButton = startIndex > 0;
  const showNextButton = startIndex < clients.length - itemsToShow;

  return (
    <section
      className="py-8 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50"
      id="nossos-clientes"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 md:mb-10 pb-2 border-primary inline-block relative">
          NOSSOS CLIENTES
          <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-primary"></span>
        </h2>

        {/* Layout específico para mobile (menos de 640px) */}
        {isMobile ? (
          <div className="grid grid-cols-2 gap-3">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-lg p-3 shadow-md border border-gray-100 flex flex-col items-center"
              >
                <div className="h-16 w-full flex items-center justify-center mb-2">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="max-h-12 max-w-[90%] object-contain"
                  />
                </div>
                <h3 className="text-center font-medium text-primary text-sm">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          // Layout para tablets e desktop (carousel normal)
          <div className="relative px-2 md:px-8">
            {/* Botões de navegação */}
            <button
              onClick={handlePrev}
              disabled={!showPrevButton || isAnimating}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md transition-all ${
                showPrevButton ? "opacity-100" : "opacity-0 pointer-events-none"
              } hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary`}
              aria-label="Ver clientes anteriores"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Carrossel */}
            <div
              className="overflow-hidden"
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    startIndex * (100 / itemsToShow)
                  }%)`,
                  width: `${(clients.length / itemsToShow) * 100}%`,
                }}
              >
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                    style={{ width: `${100 / itemsToShow}%` }}
                  >
                    <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100">
                      <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center mb-4 bg-white rounded-lg p-3 border border-gray-100">
                        <img
                          src={client.logo}
                          alt={`Logo ${client.name}`}
                          className="max-h-16 sm:max-h-18 md:max-h-20 max-w-[90%] object-contain mx-auto"
                        />
                      </div>

                      <h3 className="text-center font-semibold text-primary mb-3 text-lg sm:text-xl px-2">
                        {client.name}
                      </h3>

                      <div className="mt-auto">
                        <p className="text-gray-700 text-sm md:text-base italic leading-relaxed border-t border-gray-100 pt-2 sm:pt-3">
                          <span className="line-clamp-3 md:line-clamp-4">
                            "{client.feedback}"
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!showNextButton || isAnimating}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md transition-all ${
                showNextButton ? "opacity-100" : "opacity-0 pointer-events-none"
              } hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary`}
              aria-label="Ver mais clientes"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({
                length: Math.ceil(clients.length / itemsToShow),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setStartIndex(index * itemsToShow);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    Math.floor(startIndex / itemsToShow) === index
                      ? "bg-primary w-6 sm:w-8"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Ir para grupo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsSection;
