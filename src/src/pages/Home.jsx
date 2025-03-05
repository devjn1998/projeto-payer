import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Carousel from "../components/home/Carousel";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import ClientsSection from "../icons/components/home/ClientsSection";
import WhatsAppButton from "../icons/components/common/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Header activePage="inicio" />
      <div
        data-bs-spy="scroll"
        data-bs-target="#cabecalho"
        data-bs-scroll="true"
      >
        <Carousel />
        <ServicesSection />
        <AboutSection />
        {/* Novo componente de clientes */}
        <ClientsSection />
      </div>
      <Footer />
      {/* Botão de WhatsApp flutuante */}
      <WhatsAppButton />
    </>
  );
};

export default Home;
