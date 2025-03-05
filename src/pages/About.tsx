import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 mt-32">
            <div className="flex flex-row justify-between items-center mx-auto max-w-4xl gap-12">
              <div className="flex flex-col justify-center w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 pb-2 border-b-2 border-primary inline-block transform transition-all duration-300 hover:scale-105">
                  SOBRE NÓS
                </h1>
                <p className="text-gray-600 mb-4">
                  Conheça nossa história e compromisso com a excelência em
                  serviços marítimos
                </p>
              </div>
              <div
                className="overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center w-1/2"
                style={{
                  backgroundImage: "url(/source/img/slide/foto_2.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "17rem",
                  width: "17rem",
                  margin: "0 auto",
                }}
              ></div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2 inline-block">
                A Jornada da F.N Agenciamentos Marítimos
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Nossa História
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A F.N Agenciamentos Marítimos é uma Agência Marítima fundada
                  em 2020, entretanto os seus executivos já atuam no segmento
                  por mais de 15 anos, trazendo vasta experiência e conhecimento
                  para o negócio.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Nossa Missão
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Nossa organização tem como propósito a representação dos
                  interesses do Armador ou Afretador enquanto o navio estiver no
                  porto, oferecendo soluções logísticas inteligentes no apoio
                  marítimo e portuário, prestando-lhe assistência,
                  aconselhamento e procurando sempre atender suas expectativas e
                  objetivos.
                </p>
              </div>

              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Nossa Trajetória
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ao longo dessa jornada, acumulamos vasta experiência, tendo
                  participado de projetos monumentais e colaborativos com
                  empresas dos mais diversos setores. Transformamo-nos em uma
                  referência na prestação de serviços no mercado de petróleo e
                  gás.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
