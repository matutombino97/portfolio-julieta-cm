import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="sobre-mi" className="about section container">
      <div className="about-grid">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img src="/juli-portfolio.jpg" alt="Julieta Castillo" className="juli-photo" />
          <div className="about-image-overlay"></div>
        </motion.div>
        
        <motion.div 
          className="about-info"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="gradient-text">SOBRE MÍ</h3>
          <h2>Estratega de <br /> Comunicación Digital</h2>
          <p>
            Soy estudiante de Comunicación Social con interés en estrategia digital, 
            creación de contenido y gestión de comunidades online.
          </p>
          <p>
            Disfruto trabajando en la planificación de redes, diseño de campañas 
            y storytelling para marcas. Mi enfoque combina la creatividad con 
            el análisis estratégico para lograr resultados reales.
          </p>
          
          <div className="about-stats">
            <div className="stat">
              <h4>+2</h4>
              <span>Años exp.</span>
            </div>
            <div className="stat">
              <h4>Gestión</h4>
              <span>Creativa</span>
            </div>
            <div className="stat">
              <h4>100%</h4>
              <span>Compromiso</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
