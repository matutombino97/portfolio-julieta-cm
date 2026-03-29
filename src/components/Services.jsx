import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Edit3, Users, BarChart } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Estrategia Digital',
      desc: 'Planificación integral orientada a objetivos de marca y crecimiento de comunidad.',
      icon: <Settings size={40} />,
      delay: 0.1
    },
    {
      title: 'Creación de Contenido',
      desc: 'Storytelling persuasivo y diseño visual impactante para Reels, Stories y Feed.',
      icon: <Edit3 size={40} />,
      delay: 0.2
    },
    {
      title: 'Community Management',
      desc: 'Gestión activa de comunidades online y fortalecimiento del vínculo marca-usuario.',
      icon: <Users size={40} />,
      delay: 0.3
    },
    {
      title: 'Análisis de Métricas',
      desc: 'Monitoreo y optimización de resultados basados en datos de rendimiento reales.',
      icon: <BarChart size={40} />,
      delay: 0.4
    }
  ];

  return (
    <section id="servicios" className="services section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="gradient-text">QUÉ HAGO</h3>
          <h2>Mis Servicios</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              className="service-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
