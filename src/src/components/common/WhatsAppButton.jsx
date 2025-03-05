import React from 'react';
import '../../styles/components/WhatsAppButton.scss';

const WhatsAppButton = () => {
  const phoneNumber = '5522996069270'; // Formato internacional
  const message = 'Olá, gostaria de mais informações sobre os serviços da FN Agenciamentos Marítimos.';
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <img src="/source/img/icons/whatsapp-icon.png" alt="WhatsApp" />
    </div>
  );
};

export default WhatsAppButton; 