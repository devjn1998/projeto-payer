import React from 'react';
import '../../styles/components/ClientsSection.scss';

const ClientsSection = () => {
  // Array com dados dos clientes
  const clients = [
    {
      id: 1,
      name: 'Petrobras',
      logo: '/source/img/clients/petrobras-logo.png',
      feedback: 'A FN Agenciamentos Marítimos demonstrou excelência no suporte às nossas operações offshore, com eficiência e profissionalismo.'
    },
    {
      id: 2,
      name: 'Shell',
      logo: '/source/img/clients/shell-logo.png',
      feedback: 'Parceria confiável e estratégica. Recomendamos seus serviços de agenciamento marítimo para operações complexas no setor de óleo e gás.'
    },
    {
      id: 3,
      name: 'BP Energy',
      logo: '/source/img/clients/bp-logo.png',
      feedback: 'Eficiência e qualidade são marcas registradas da FN Agenciamentos. Equipe altamente capacitada para solucionar desafios logísticos.'
    },
    {
      id: 4,
      name: 'Total',
      logo: '/source/img/clients/total-logo.png',
      feedback: 'Excelente suporte em nossa cadeia de logística marítima, com atendimento personalizado e soluções inovadoras.'
    }
  ];

  return (
    <section className="clients-section" id="nossos-clientes">
      <div className="container-md">
        <div className="duas-colunas-servicos-img">
          <h1 className="h1-style borda">NOSSOS CLIENTES</h1>
        </div>
        
        <div className="clients-grid">
          {clients.map(client => (
            <div className="client-card" key={client.id}>
              <div className="client-logo">
                <img src={client.logo} alt={`Logo ${client.name}`} />
              </div>
              <h3 className="client-name">{client.name}</h3>
              <p className="client-feedback">{client.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection; 