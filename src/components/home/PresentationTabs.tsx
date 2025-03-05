import React, { useState } from "react";

const PresentationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("missao");

  // Função para determinar qual imagem mostrar com base na aba ativa
  const getBackgroundImage = () => {
    // Alterna entre slide_5 e slide_6 conforme a aba
    switch (activeTab) {
      case "missao":
        return "url('source/img/slide/slide_5.jpg')";
      case "visao":
        return "url('source/img/slide/slide_6.jpg')";
      case "proposito":
        return "url('source/img/slide/slide_7.jpg')";
      case "valores":
        return "url('source/img/slide/slide_8.jpg')";
      default:
        return "url('source/img/slide/slide_9.jpg')";
    }
  };

  return (
    <section
      id="nossa-apresentacao"
      className="bg-background py-8 sm:py-10 mb-8 sm:mb-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar com botões */}
          <aside className="w-full md:w-[30%] lg:w-1/4 mb-6 md:mb-0">
            <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-2 pb-4 md:pb-0">
              <button
                className={`border-none mb-0 md:mb-1 py-2 sm:py-2.5 px-3 rounded-lg font-carousel text-sm sm:text-base font-bold text-primary whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeTab === "missao"
                    ? "bg-accent"
                    : "bg-gray-200 hover:bg-accent/70"
                }`}
                onClick={() => setActiveTab("missao")}
              >
                NOSSA MISSÃO
              </button>
              <button
                className={`border-none mb-0 md:mb-1 py-2 sm:py-2.5 px-3 rounded-lg font-carousel text-sm sm:text-base font-bold text-primary whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeTab === "visao"
                    ? "bg-accent"
                    : "bg-gray-200 hover:bg-accent/70"
                }`}
                onClick={() => setActiveTab("visao")}
              >
                VISÃO
              </button>
              <button
                className={`border-none mb-0 md:mb-1 py-2 sm:py-2.5 px-3 rounded-lg font-carousel text-sm sm:text-base font-bold text-primary whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeTab === "proposito"
                    ? "bg-accent"
                    : "bg-gray-200 hover:bg-accent/70"
                }`}
                onClick={() => setActiveTab("proposito")}
              >
                PROPÓSITO
              </button>
              <button
                className={`border-none mb-0 md:mb-1 py-2 sm:py-2.5 px-3 rounded-lg font-carousel text-sm sm:text-base font-bold text-primary whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeTab === "valores"
                    ? "bg-accent"
                    : "bg-gray-200 hover:bg-accent/70"
                }`}
                onClick={() => setActiveTab("valores")}
              >
                VALORES
              </button>
            </nav>
          </aside>

          {/* Conteúdo das abas */}
          <div className="w-full md:w-[70%] lg:w-3/4">
            {/* Missão */}
            <div className={`${activeTab === "missao" ? "block" : "hidden"}`}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-center items-center text-center h-auto min-h-[300px] sm:min-h-[400px] md:h-[28rem] p-3 md:p-7 border-none rounded-lg md:rounded-l-lg shadow-elegant">
                  <h2 className="font-carousel font-bold text-primary text-xl md:text-2xl border-b-2 border-accent pb-1 mb-4">
                    NOSSA MISSÃO
                  </h2>
                  <p className="font-carousel font-bold text-primary text-sm md:text-base">
                    Fornecer soluções eficientes e confiáveis no segmento de
                    agenciamento e gerenciamento marítimo, atendendo e superando
                    as expectativas dos nossos clientes e parceiros, priorizando
                    a qualidade, eficiência, sustentabilidade e segurança em
                    nossas operações.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 h-[28rem] rounded-r-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: getBackgroundImage(),
                    }}
                    aria-label="imagem-ilustrativa"
                  ></div>
                </div>
              </div>
            </div>

            {/* Visão */}
            <div className={`${activeTab === "visao" ? "block" : "hidden"}`}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-center items-center text-center h-auto min-h-[300px] sm:min-h-[400px] md:h-[28rem] p-3 md:p-7 border-none rounded-lg md:rounded-l-lg shadow-elegant">
                  <h2 className="font-carousel font-bold text-primary text-xl md:text-2xl border-b-2 border-accent pb-1 mb-4">
                    VISÃO
                  </h2>
                  <p className="font-carousel font-bold text-primary text-sm md:text-base">
                    Ser reconhecida como empresa líder no segmento marítimo,
                    destacando-se pela excelência na prestação de serviços e na
                    implementação de soluções inovadoras, estabelecendo
                    parcerias estratégicas e duradouras com nossos clientes e
                    contribuindo para o desenvolvimento sustentável do setor.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 h-[28rem] rounded-r-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: getBackgroundImage(),
                    }}
                    aria-label="imagem-ilustrativa"
                  ></div>
                </div>
              </div>
            </div>

            {/* Propósito */}
            <div
              className={`${activeTab === "proposito" ? "block" : "hidden"}`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-center items-center text-center h-auto min-h-[300px] sm:min-h-[400px] md:h-[28rem] p-3 md:p-7 border-none rounded-lg md:rounded-l-lg shadow-elegant">
                  <h2 className="font-carousel font-bold text-primary text-xl md:text-2xl border-b-2 border-accent pb-1 mb-4">
                    PROPÓSITO
                  </h2>
                  <p className="font-carousel font-bold text-primary text-sm md:text-base">
                    Conectar o mundo marítimo de forma eficiente e sustentável,
                    facilitando operações complexas com soluções inteligentes
                    que impulsionam o crescimento dos nossos clientes e
                    contribuem para um comércio global mais fluido e
                    responsável, sempre com respeito às pessoas e ao meio
                    ambiente.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 h-[28rem] rounded-r-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: getBackgroundImage(),
                    }}
                    aria-label="imagem-ilustrativa"
                  ></div>
                </div>
              </div>
            </div>

            {/* Valores */}
            <div className={`${activeTab === "valores" ? "block" : "hidden"}`}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-center items-center text-center h-auto min-h-[300px] sm:min-h-[400px] md:h-[28rem] p-3 md:p-7 border-none rounded-lg md:rounded-l-lg shadow-elegant overflow-y-auto">
                  <h2 className="font-carousel font-bold text-primary text-xl md:text-2xl border-b-2 border-accent pb-1 mb-4">
                    VALORES
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
                    {/* Integridade */}
                    <div className="group relative flex flex-col items-center">
                      <div className="bg-blue-50 p-2 sm:p-3 rounded-full mb-2">
                        <img
                          src="/source/img/icons/data-integration.png"
                          alt="integridade"
                          className="w-8 h-8 md:w-14 md:h-14"
                        />
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-primary">
                        INTEGRIDADE
                      </h3>
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-20 left-1/2 transform -translate-x-1/2 bg-primary text-background font-bold text-xs rounded py-2 px-3 w-40 md:w-50 text-center z-10">
                        Atuamos com ética, transparência e honestidade em todas
                        as relações comerciais e interpessoais.
                      </div>
                    </div>

                    {/* Confiança */}
                    <div className="group relative flex flex-col items-center">
                      <div className="bg-blue-50 p-2 sm:p-3 rounded-full mb-2">
                        <img
                          src="/source/img/icons/trust.png"
                          alt="confiança"
                          className="w-8 h-8 md:w-14 md:h-14"
                        />
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-primary">
                        CONFIANÇA
                      </h3>
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-20 left-1/2 transform -translate-x-1/2 bg-primary text-background font-bold text-xs rounded py-2 px-3 w-40 md:w-50 text-center z-10">
                        Construímos relacionamentos sólidos baseados em
                        credibilidade e cumprimento consistente de compromissos.
                      </div>
                    </div>

                    <div className="group relative flex flex-col items-center">
                      <div className="bg-blue-50 p-2 sm:p-3 rounded-full mb-2">
                        <img
                          src="/source/img/icons/honesty.png"
                          alt="lealdade"
                          className="w-8 h-8 md:w-14 md:h-14"
                        />
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-primary">
                        LEALDADE
                      </h3>
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-20 left-1/2 transform -translate-x-1/2 bg-primary text-background font-bold text-xs rounded py-2 px-3 w-40 md:w-50 text-center z-10">
                        Mantemos fidelidade aos nossos princípios e compromissos
                        com clientes, parceiros e colaboradores.
                      </div>
                    </div>

                    <div className="group relative flex flex-col items-center">
                      <div className="bg-blue-50 p-2 sm:p-3 rounded-full mb-2">
                        <img
                          src="/source/img/icons/security.png"
                          alt="segurança"
                          className="w-8 h-8 md:w-14 md:h-14"
                        />
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-primary">
                        SEGURANÇA
                      </h3>
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-20 left-1/2 transform -translate-x-1/2 bg-primary text-background font-bold text-xs rounded py-2 px-3 w-40 md:w-50 text-center z-10">
                        Priorizamos a proteção de pessoas, operações e meio
                        ambiente em todas as nossas atividades.
                      </div>
                    </div>

                    <div className="group relative flex flex-col items-center">
                      <div className="bg-blue-50 p-2 sm:p-3 rounded-full mb-2">
                        <img
                          src="/source/img/icons/competition.png"
                          alt="excelência"
                          className="w-8 h-8 md:w-14 md:h-14"
                        />
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-primary">
                        EXCELÊNCIA
                      </h3>
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-20 left-1/2 transform -translate-x-1/2 bg-primary text-background font-bold text-xs rounded py-2 px-3 w-40 md:w-50 text-center z-10">
                        Buscamos constantemente a melhoria contínua e o mais
                        alto padrão de qualidade em nossos serviços.
                      </div>
                    </div>

                    <div className="group relative flex flex-col items-center">
                      <div className="bg-blue-50 p-2 sm:p-3 rounded-full mb-2">
                        <img
                          src="/source/img/icons/diversity.png"
                          alt="diversidade"
                          className="w-8 h-8 md:w-14 md:h-14"
                        />
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-primary">
                        DIVERSIDADE
                      </h3>
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-20 left-1/2 transform -translate-x-1/2 bg-primary text-background font-bold text-xs rounded py-2 px-3 w-40 md:w-50 text-center z-10">
                        Valorizamos diferentes perspectivas e promovemos um
                        ambiente inclusivo e respeitoso para todos.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 h-[28rem] rounded-r-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: getBackgroundImage(),
                    }}
                    aria-label="imagem-ilustrativa"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationTabs;
