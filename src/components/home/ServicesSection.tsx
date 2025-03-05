import React from "react";
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
  return (
    <section id="nossos-servicos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-carousel font-bold text-center text-primary mb-2">
            NOSSOS SERVIÇOS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            A FN Agenciamentos Marítimos oferece soluções completas para o seu
            negócio, com excelência e eficiência em cada operação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Agenciamento */}
          <div className="bg-white rounded-lg shadow-elegant p-6 text-center transform transition-transform hover:-translate-y-2">
            <div className="bg-blue-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <img
                src="/source/img/icons/cargo-ship.png"
                alt="Agenciamento Marítimo"
                className="h-10 w-10"
              />
            </div>
            <h4 className="text-xl font-carousel font-bold text-primary mb-3">
              Agenciamento Marítimo
            </h4>
            <p className="text-gray-600 mb-4">
              Oferecemos todos os serviços necessários para a estadia de
              embarcações em portos brasileiros.
            </p>
            <Link
              to="/servicos#agenciamento-maritimo"
              className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors"
            >
              Saiba mais
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Gerenciamento */}
          <div className="bg-white rounded-lg shadow-elegant p-6 text-center transform transition-transform hover:-translate-y-2">
            <div className="bg-blue-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <img
                src="/source/img/icons/enterprise-architecture.png"
                alt="Gerenciamento de Operações"
                className="h-10 w-10"
              />
            </div>
            <h4 className="text-xl font-carousel font-bold text-primary mb-3">
              Gerenciamento de Operações
            </h4>
            <p className="text-gray-600 mb-4">
              Coordenação completa de operações portuárias com eficiência e
              segurança.
            </p>
            <Link
              to="/servicos#gerenciamento"
              className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors"
            >
              Saiba mais
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Gerenciamento de Projetos */}
          <div className="bg-white rounded-lg shadow-elegant p-6 text-center transform transition-transform hover:-translate-y-2">
            <div className="bg-blue-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <img
                src="/source/img/icons/planning.png"
                alt="Gerenciamento de Projetos"
                className="h-10 w-10"
              />
            </div>
            <h4 className="text-xl font-carousel font-bold text-primary mb-3">
              Gerenciamento de Projetos
            </h4>
            <p className="text-gray-600 mb-4">
              Planejamento e execução de projetos marítimos com metodologias
              eficientes.
            </p>
            <Link
              to="/servicos#gerenciamento-projetos"
              className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors"
            >
              Saiba mais
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Assessoria */}
          <div className="bg-white rounded-lg shadow-elegant p-6 text-center transform transition-transform hover:-translate-y-2">
            <div className="bg-blue-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <img
                src="/source/img/icons/strategy.png"
                alt="Assessoria e Suporte"
                className="h-10 w-10"
              />
            </div>
            <h4 className="text-xl font-carousel font-bold text-primary mb-3">
              Assessoria e Suporte
            </h4>
            <p className="text-gray-600 mb-4">
              Consultoria especializada em assuntos marítimos e portuários.
            </p>
            <Link
              to="/servicos#assessoria"
              className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors"
            >
              Saiba mais
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
