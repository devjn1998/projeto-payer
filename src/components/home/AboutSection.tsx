import React from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-8 pb-2 border-primary inline-block relative">
              QUEM SOMOS
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-primary"></span>
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                A FN Agenciamentos Marítimos é uma empresa especializada em
                serviços de agenciamento marítimo, gerenciamento de operações e
                assessoria para o setor naval.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Com ampla experiência no mercado e uma equipe de profissionais
                altamente qualificados, oferecemos soluções completas e
                personalizadas para atender às necessidades específicas de cada
                cliente.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Nossa Missão
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Proporcionar serviços de excelência em agenciamento marítimo,
                  contribuindo para a eficiência e segurança das operações de
                  nossos clientes.
                </p>
              </div>

              <Link
                to="/sobrenos"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg mt-4"
              >
                Conheça Nossa História
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/source/img/slide/foto_1.jpg"
                alt="FN Agenciamentos Marítimos"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
