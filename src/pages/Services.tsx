import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Carousel from "../components/home/Carousel";
import AcessoriaSection from "../components/services/AcessoriaSection";
import AgenciamentoMaritimoSection from "../components/services/AgenciamentoMaritimoSection";
import GerenciamentoSection from "../components/services/GerenciamentoSection";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Carousel />

        <section id="nossos-servicos" className="py-8 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 md:mb-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary pb-2 border-b-2 border-primary text-center md:text-left">
                NOSSOS SERVIÇOS
              </h1>
              <img
                src="/source/img/slide/foto_1.jpg"
                alt="foto-1"
                className="w-full md:w-96 h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8 md:space-y-12">
              <AgenciamentoMaritimoSection />
              <GerenciamentoSection />
              <AcessoriaSection />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
