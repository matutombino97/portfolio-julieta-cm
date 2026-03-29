import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            COMUNICACIÓN DIGITAL ESTRATÉGICA
          </motion.h2>
          <motion.h1 
            className="gradient-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            JULIETA CASTILLO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            MARKETING DIGITAL | COMMUNITY MANAGER
          </motion.p>
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#proyectos" className="btn-primary">
              Ver Proyectos <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="btn-secondary">
              Contactar
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative background element */}
      <div className="hero-bg-accent"></div>
    </section>
  );
};

export default Hero;
