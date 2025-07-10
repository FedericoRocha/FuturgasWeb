import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar al cargar
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="about"
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Elementos decorativos */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56, 182, 255, 0.1) 0%, rgba(15, 23, 42, 0) 70%)',
        zIndex: 0
      }} />
      
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...(window.innerWidth >= 1024 ? {
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '4rem'
          } : {})
        }}>
          {/* Columna de imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              width: '100%',
              marginBottom: '2rem',
              ...(window.innerWidth >= 1024 ? {
                width: '45%',
                marginBottom: 0
              } : {})
            }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
            }}>
              <img 
                src="/images/about-image.jpg" 
                alt="Equipo de Futurgas"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  borderRadius: '1rem',
                  transform: window.innerWidth >= 1024 ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseOver={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }
                }}
                onMouseOut={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.3) 100%)',
                mixBlendMode: 'multiply',
                borderRadius: '1rem'
              }} />
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                background: 'rgba(15, 23, 42, 0.8)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(4px)'
              }}>
                Desde 2010
              </div>
            </div>
          </motion.div>

          {/* Columna de contenido */}
          <div style={{
            width: '100%',
            ...(window.innerWidth >= 1024 ? {
              width: '55%',
              paddingTop: '1rem'
            } : {})
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <span style={{
                display: 'inline-block',
                color: '#60a5fa',
                fontWeight: 600,
                marginBottom: '1rem',
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Sobre Nosotros
              </span>
              
              <h2 style={{
                fontSize: window.innerWidth >= 1024 ? '2.5rem' : '2rem',
                fontWeight: 800,
                lineHeight: 1.2,
                margin: '0.5rem 0 1.5rem',
                color: 'white',
                background: 'linear-gradient(90deg, #fff, #a5b4fc)', 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Expertos en soluciones de gas y electricidad
              </h2>

              <p style={{
                color: '#cbd5e1',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}>
                En <strong style={{ color: '#60a5fa' }}>Futurgas</strong>, nos enorgullece ofrecer soluciones integrales en instalaciones de gas y electricidad para hogares y empresas. Con más de una década de experiencia en el sector, nos hemos consolidado como líderes en el mercado gracias a nuestro compromiso con la calidad, seguridad y satisfacción del cliente.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gap: '1.5rem',
                marginBottom: '2.5rem',
                ...(window.innerWidth >= 640 ? {
                  gridTemplateColumns: 'repeat(2, 1fr)'
                } : {})
              }}>
                {[
                  {
                    icon: '🔧',
                    title: 'Experiencia',
                    description: 'Más de 10 años brindando soluciones de calidad'
                  },
                  {
                    icon: '🏆',
                    title: 'Certificaciones',
                    description: 'Profesionales certificados y altamente calificados'
                  },
                  {
                    icon: '⚡',
                    title: 'Rapidez',
                    description: 'Servicio rápido y eficiente cuando más lo necesitas'
                  },
                  {
                    icon: '💯',
                    title: 'Garantía',
                    description: 'Trabajos con garantía de satisfacción'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '0.75rem',
                      padding: '1.5rem',
                      transition: 'all 0.3s ease',
                      transform: 'translateY(0)',
                      boxShadow: 'none'
                    }}
                    onMouseOver={(e) => {
                      if (window.innerWidth >= 1024) {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (window.innerWidth >= 1024) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      }
                    }}
                  >
                    <div style={{
                      fontSize: '2rem',
                      marginBottom: '0.75rem',
                      lineHeight: 1
                    }}>
                      {item.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '0.5rem'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: '#94a3b8',
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                ...(window.innerWidth >= 640 ? {
                  flexDirection: 'row',
                  alignItems: 'center'
                } : {})
              }}>
                <a
                  href="#contacto"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.875rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 1,
                    border: 'none',
                    cursor: 'pointer',
                    transform: 'translateY(0)'
                  }}
                  onMouseOver={(e) => {
                    if (window.innerWidth >= 1024) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (window.innerWidth >= 1024) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                    }
                  }}
                >
                  Contáctanos
                  <svg style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="#servicios"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.875rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }}
                  onMouseOver={(e) => {
                    if (window.innerWidth >= 1024) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (window.innerWidth >= 1024) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  Nuestros servicios
                  <svg style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
