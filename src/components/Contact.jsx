import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MessageCircle, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'WhatsApp',
      value: '261 245 1593',
      href: 'https://wa.me/5492612451593'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'castilloponcejulieta23@gmail.com',
      href: 'mailto:castilloponcejulieta23@gmail.com'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      value: '@julieta_castillo_',
      href: 'https://instagram.com/julieta_castillo_'
    }
  ];

  return (
    <section id="contacto" className="contact section container">
      <div className="contact-grid">
        <motion.div 
          className="contact-text glass-panel"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="contact-accent-text">HABLEMOS</span>
          <h2 className="contact-main-title">¿Trabajamos Juntos?</h2>
          <p className="contact-p">
            Estoy lista para llevar la comunicación de tu marca al siguiente nivel. 
            Contáctame por cualquiera de estos medios y empecemos a crear algo increíble.
          </p>

          <div className="info-list">
            <div className="info-item">
              <MapPin className="icon" />
              <div>
                <h4>Ubicación</h4>
                <p>Mendoza, Argentina (Remoto a todo el mundo)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-methods"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((item, i) => (
            <motion.a 
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card glass-card"
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-detail">
                <span>{item.label}</span>
                <h4>{item.value}</h4>
              </div>
              <MessageCircle className="chevron" size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
