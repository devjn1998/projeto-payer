import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Carousel from "../components/home/Carousel";
import AgenciamentoMaritimoSection from "../components/services/AgenciamentoMaritimoSection";
import GerenciamentoSection from "../components/services/GerenciamentoSection";
import AcessoriaSection from "../components/services/AcessoriaSection";
import WhatsAppButton from "../components/common/WhatsAppButton";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Carousel />

        <section id="nossos-servicos" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-around items-center mb-12">
              <h1 className="text-3xl font-bold text-primary pb-2 border-b-2 border-primary">
                NOSSOS SERVIÇOS
              </h1>
              <img
                src="/source/img/slide/foto_1.jpg"
                alt="foto-1"
                className="w-96 h-auto rounded-lg"
              />
            </div>

            <AgenciamentoMaritimoSection />
            <GerenciamentoSection />
            <AcessoriaSection />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
