import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <p className="Footer-title">Merch Store</p>
      <p className="Footer-copy">
        Hecho con amor por <a href="https://github.com/ItsDavidHdez">David.</a>
      </p>
      <p className="Footer-copy">Todos los izquierdos reservados.</p>
    </div>
  );
};

export default Footer;
