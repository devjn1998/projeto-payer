import React from "react";

const GerenciamentoSection: React.FC = () => {
  return (
    <section id="gerenciamento" className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 md:mb-8 gap-4 sm:gap-5">
            <div className="bg-blue-50 p-2 md:p-3 rounded-full flex items-center justify-center self-start sm:self-center">
              <img
                src="/source/img/icons/enterprise-architecture.png"
                alt="gerenciamento"
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary border-primary pb-2 relative flex-1">
              Gerenciamento de Operações
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-primary"></span>
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 border-l-4 border-primary transition-transform duration-300 hover:scale-[1.01]">
              <span className="inline-flex items-center text-primary font-medium mb-3">
                <div className="bg-primary rounded-full p-1 mr-2 md:mr-3">
                  <img
                    src="/source/img/icons/right-arrow.png"
                    alt=""
                    className="w-4 h-4 md:w-5 md:h-5 filter brightness-0 invert"
                  />
                </div>
                <span className="text-base md:text-lg">
                  Eficiência em cada etapa do processo
                </span>
              </span>
              <p className="text-gray-700 leading-relaxed ml-6 md:ml-8 lg:ml-11 text-sm md:text-base">
                Nosso serviço de gerenciamento de operações garante que todos os
                aspectos logísticos sejam coordenados de forma eficiente,
                otimizando recursos e reduzindo custos operacionais.
                Supervisionamos cada etapa do processo, desde o planejamento
                inicial até a execução final.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 md:p-6 border-l-4 border-primary transition-transform duration-300 hover:scale-[1.01]">
              <span className="inline-flex items-center text-primary font-medium mb-3">
                <div className="bg-primary rounded-full p-1 mr-2 md:mr-3">
                  <img
                    src="/source/img/icons/right-arrow.png"
                    alt=""
                    className="w-4 h-4 md:w-5 md:h-5 filter brightness-0 invert"
                  />
                </div>
                <span className="text-base md:text-lg">
                  Benefícios do nosso gerenciamento de operações
                </span>
              </span>
              <ul className="text-gray-700 space-y-2 md:space-y-3 ml-6 md:ml-8 lg:ml-11 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2 flex-shrink-0">
                    •
                  </span>
                  <span className="leading-relaxed">
                    Otimização de recursos e tempos de operação
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2 flex-shrink-0">
                    •
                  </span>
                  <span className="leading-relaxed">
                    Redução de custos operacionais
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2 flex-shrink-0">
                    •
                  </span>
                  <span className="leading-relaxed">
                    Soluções personalizadas para cada cliente
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2 flex-shrink-0">
                    •
                  </span>
                  <span className="leading-relaxed">
                    Acompanhamento em tempo real de todas as operações
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GerenciamentoSection;
