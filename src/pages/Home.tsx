import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Carousel from "../components/home/Carousel";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ClientsSection from "../components/home/ClientsSection";
import PresentationTabs from "../components/home/PresentationTabs";
import WhatsAppButton from "../components/common/WhatsAppButton";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Carousel />
        <AboutSection />
        <ServicesSection />
        <PresentationTabs />
        <ClientsSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
