import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import './Portfolio.css';

const ProjectCard = ({ project, index }) => {
  const isVideo = project.video !== null;
  const isCarousel = project.images && project.images.length > 0;
  const { vOffset } = project;

  const [currentImg, setCurrentImg] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isZoom, setIsZoom] = useState(false);

  // Autoplay para el carrusel
  useEffect(() => {
    if (!isCarousel || isZoom) return; // Pausar autoplay si hay zoom
    const timer = setInterval(() => {
      moveStep(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImg, isCarousel, isZoom]);

  const moveStep = (step) => {
    setDirection(step);
    const next = (currentImg + step + project.images.length) % project.images.length;
    setCurrentImg(next);
  };

  const videoStyle = isVideo ? {
    '--v-top': vOffset?.top || '12%',
    '--v-left': vOffset?.left || '52%',
    '--v-width': vOffset?.width || '38%',
    '--v-height': vOffset?.height || '76%',
  } : {};

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <>
      <motion.div
        className="portfolio-item-full"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="portfolio-content-grid">
          {/* Media Side */}
          <div className="portfolio-media-side" style={videoStyle}>
            <div
              className="media-container-full glass-card clickable-media"
              onClick={() => setIsZoom(true)}
            >
              <div className="zoom-indicator">
                <Maximize2 size={24} />
                <span>VER DETALLE</span>
              </div>

              {!isCarousel ? (
                <img src={project.image} alt={project.title} className="main-project-img" />
              ) : (
                <div className="carousel-wrapper">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.img
                      key={currentImg}
                      src={project.images[currentImg]}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                      }}
                      className="main-project-img carousel-img"
                    />
                  </AnimatePresence>

                  {/* Controles del Carrusel (Burbuja aparte para que no interfiera con el click de zoom) */}
                  <div className="carousel-controls-no-click" onClick={(e) => e.stopPropagation()}>
                    <button className="carousel-btn prev" onClick={() => moveStep(-1)}>
                      <ChevronLeft size={24} />
                    </button>
                    <button className="carousel-btn next" onClick={() => moveStep(1)}>
                      <ChevronRight size={24} />
                    </button>

                    <div className="carousel-dots">
                      {project.images.map((_, i) => (
                        <div
                          key={i}
                          className={`dot ${i === currentImg ? 'active' : ''}`}
                          onClick={() => {
                            setDirection(i > currentImg ? 1 : -1);
                            setCurrentImg(i);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {isVideo && (
                <div className="phone-video-overlay">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="project-video-element"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </div>

          {/* Info Side */}
          <div className="portfolio-info-side">
            <motion.div
              className="info-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="project-category">{project.category}</span>
              <h2 className="project-title-large">{project.title}</h2>
              <div className="divider"></div>
              <p className="project-description-large">
                {project.description}
              </p>

              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}><CheckCircle2 size={16} /> {feature}</li>
                ))}
              </ul>

              <div className="project-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="canva-big-btn"
                >
                  <span>Explorar en Canva</span>
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* LIGHTBOX / ZOOM OVERLAY */}
      <AnimatePresence>
        {isZoom && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoom(false)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Evita cerrar al tocar la imagen
            >
              <img
                src={isCarousel ? project.images[currentImg] : project.image}
                alt="Zoom"
                className="zoom-img-full"
              />

              {isCarousel && (
                <div className="zoom-nav-overlay">
                  <button className="zoom-btn prev" onClick={() => moveStep(-1)}>
                    <ChevronLeft size={40} />
                  </button>
                  <button className="zoom-btn next" onClick={() => moveStep(1)}>
                    <ChevronRight size={40} />
                  </button>
                </div>
              )}
            </motion.div>

            {/* El botón de cierre al final para que siempre esté por encima en el DOM */}
            <button className="close-lightbox" onClick={() => setIsZoom(false)}>
              <X size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Portfolio = () => {
  const canvaLink = "https://www.canva.com/design/DAHDe1n9fL4/opAJHkDVqseQqSHNAI6FZw/edit";

  const projects = [
    {
      id: 1,
      title: "LA FRIDA CAFÉ",
      category: "SOCIAL MEDIA STRATEGY",
      description: "Desarrollo de una identidad visual cálida y acogedora para la cafetería 'La Frida'. Implementamos una estrategia de contenido enfocada en el storytelling y la conexión emocional con el cliente habitual.",
      features: ["Diseño de Feed Estético", "Estrategia de Reels", "Gestión de Comunidad"],
      image: "/4.png",
      video: "/video-4.mp4",
      vOffset: { top: '22%', left: '32%', width: '23%', height: '58%' },
      link: canvaLink
    },
    {
      id: 2,
      title: "GUSTO PASTELERÍA",
      category: "CONTENT CREATION",
      description: "Producción audiovisual y fotográfica para 'Gusto Pastelería'. El objetivo fue resaltar la calidad artesanal de cada producto a través de contenido dinámico y tentador.",
      features: ["Fotografía de Producto", "Edición de Video", "Planificación Semanal"],
      image: "/5.png",
      video: "/video-5.mp4",
      vOffset: { top: '25%', left: '29%', width: '25%', height: '55%' },
      link: canvaLink
    },
    {
      id: 3,
      title: "GEEK HOUSE",
      category: "COMMUNITY MANAGEMENT",
      description: "Lideramos la comunidad de 'Geek House' en plataformas digitales. Creamos un espacio de intercambio fluido para aficionados de la tecnología y la cultura pop.",
      features: ["Interacción 24/7", "Moderación de Comentarios", "Campañas de Engagement"],
      images: [
        "/GeekHouse/9.png", "/GeekHouse/10.png", "/GeekHouse/11.png",
        "/GeekHouse/12.png", "/GeekHouse/13.png", "/GeekHouse/14.png",
        "/GeekHouse/15.png", "/GeekHouse/16.png", "/GeekHouse/17.png",
        "/GeekHouse/18.png", "/GeekHouse/19.png"
      ],
      video: null,
      link: canvaLink
    }
  ];

  return (
    <section id="proyectos" className="portfolio-vertical-section">
      <div className="container">
        <motion.div
          className="portfolio-header-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text-large">PORTAFOLIO</h2>
          <div className="subtitle-reveal">
            <span>•</span> TRABAJO ESTRATÉGICO <span>•</span>
          </div>
        </motion.div>

        <div className="portfolio-items-stack">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
