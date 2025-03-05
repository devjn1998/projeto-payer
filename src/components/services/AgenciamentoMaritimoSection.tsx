import React from "react";

const AgenciamentoMaritimoSection: React.FC = () => {
  return (
    <section id="agenciamento-maritmo" className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="bg-blue-50 p-3 rounded-full mr-5 hidden sm:flex items-center justify-center">
              <img
                src="/source/img/icons/cargo-ship.png"
                alt="agenciamento-maritimo"
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary border-primary pb-2 relative">
              Agenciamento Marítimo
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-primary"></span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary transition-transform duration-300 hover:scale-[1.01]">
              <span className="inline-flex items-center text-primary font-medium mb-3">
                <div className="bg-primary rounded-full p-1 mr-3">
                  <img
                    src="/source/img/icons/right-arrow.png"
                    alt=""
                    className="w-5 h-5 filter brightness-0 invert"
                  />
                </div>
                <span className="text-lg">
                  O que é o agenciamento marítimo?
                </span>
              </span>
              <p className="text-gray-700 leading-relaxed ml-11">
                O agenciamento marítimo é essencial para a coordenação eficiente
                das atividades portuárias e operações das embarcações. Como
                agentes, atuamos como o elo entre o navio e os diversos serviços
                terrestres, garantindo que todas as operações sejam realizadas
                com eficiência, segurança e em conformidade com as
                regulamentações locais e internacionais.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary transition-transform duration-300 hover:scale-[1.01]">
              <span className="inline-flex items-center text-primary font-medium mb-3">
                <div className="bg-primary rounded-full p-1 mr-3">
                  <img
                    src="/source/img/icons/right-arrow.png"
                    alt=""
                    className="w-5 h-5 filter brightness-0 invert"
                  />
                </div>
                <span className="text-lg">Nossos serviços de agenciamento</span>
              </span>
              <ul className="text-gray-700 space-y-3 ml-11">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="leading-relaxed">
                    Coordenação de chegada e saída de navios
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="leading-relaxed">
                    Documentação e liberação aduaneira
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="leading-relaxed">
                    Provisionamento de suprimentos e combustível
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="leading-relaxed">
                    Troca de tripulantes e assistência médica
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

export default AgenciamentoMaritimoSection;
