import React from "react";

const AcessoriaSection: React.FC = () => {
  return (
    <section id="assessoria" className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="bg-blue-50 p-3 rounded-full mr-5 hidden sm:flex items-center justify-center">
              <img
                src="/source/img/icons/planning.png"
                alt="assessoria"
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary border-primary pb-2 relative">
              Assessoria e Suporte
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
                <span className="text-lg">Consultoria especializada</span>
              </span>
              <p className="text-gray-700 leading-relaxed ml-11">
                Oferecemos assessoria técnica especializada para empresas e
                profissionais do setor marítimo. Nossa equipe de especialistas
                está preparada para fornecer orientações precisas sobre
                regulamentações, procedimentos e melhores práticas operacionais.
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
                <span className="text-lg">Áreas de atuação</span>
              </span>
              <ul className="text-gray-700 space-y-3 ml-11">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="leading-relaxed">
                    Orientação sobre legislação marítima nacional e
                    internacional
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="leading-relaxed">
                    Suporte para certificações e documentações
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="leading-relaxed">
                    Análise de viabilidade para novos projetos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="leading-relaxed">
                    Treinamento e capacitação de equipes
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

export default AcessoriaSection;
