import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          JULIETA<span>CASTILLO</span>
        </div>
        <p>© {new Date().getFullYear()} Julieta Castillo. Desarrollado por el pito grande de su macho.</p>
        <div className="footer-social">
          <a href="https://www.instagram.com/julieta_castillo_/?hl=es" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/5492612451593" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
