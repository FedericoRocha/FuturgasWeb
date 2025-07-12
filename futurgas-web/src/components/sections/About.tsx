import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    // Usar un debounce para evitar múltiples actualizaciones durante el redimensionamiento
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

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
      className="py-24 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
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
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-16">
          {/* Columna de imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full mb-12 lg:mb-0 lg:w-5/12"
          >
            <div style={{
              position: 'relative',
              borderRadius: '1rem',
              overflow: 'hidden',
            }}>
              <img 
                src="/Futurgas-01.jpeg" 
                alt="Equipo de Futurgas"
                className="w-full h-auto block rounded-xl object-contain mx-auto mb-6"
                style={{
                  maxHeight: '340px',
                  objectFit: 'contain',
                  transform: 'none',
                  background: 'rgba(30, 41, 59, 0.15)',
                  padding: '0.5rem'
                }}
              />
              <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                mixBlendMode: 'multiply',
                borderRadius: '1rem',
                height: '100%'
              }} />
              {/* Bloque de técnicos autorizados Orbis y seguros - SOLO DESKTOP */}
              <div className="flex flex-col gap-0 mt-2 w-full">
                {/* Cards independientes, sin fondo de contenedor */}
                {/* Card Orbis */}
                <div className="flex flex-col md:flex-row items-center gap-4 rounded-xl bg-[#23345c] border border-blue-700/30 shadow-lg p-4 w-full mb-6" style={{minWidth:'0'}}>
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-base md:text-lg font-semibold text-blue-200 mb-1">
                      Técnicos autorizados de <span className="text-blue-400 font-bold">Orbis</span>
                    </div>
                    <div className="text-sm text-slate-200 opacity-90">
                      Especialistas certificados en productos Orbis.<br/>
                      Garantía de calidad, respaldo directo de fábrica y atención a instalaciones y reparaciones complejas.
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {/* Aquí va el logo de Orbis si lo hay */}
                    {/* Logo Orbis */}
                    <img src="/logo_orbis.png" alt="Logo Orbis" className="h-12 md:h-16 w-auto object-contain" style={{filter:'drop-shadow(0 2px 8px #2563eb55)'}} />
                  </div>
                </div>
                {/* Card Seguros Hogareños */}
                <div className="flex flex-col md:flex-row items-center gap-4 rounded-xl bg-[#23345c] border border-blue-700/30 shadow-lg p-4 w-full mb-6" style={{minWidth:'0'}}>
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-base md:text-lg font-semibold text-blue-200 mb-1">
                      Técnicos autorizados de <span className="text-blue-400 font-bold">seguros hogareños</span>
                    </div>
                    <div className="text-sm text-slate-200 opacity-90">
                      Atención a pólizas de hogar y asistencia para compañías de seguros.<br/>
                      Experiencia, respaldo y gestión directa con aseguradoras.
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {/* Ícono de seguro/hogar */}
                    <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#38bdf8" fillOpacity="0.15"/><path d="M24 10L10 20v14a2 2 0 002 2h24a2 2 0 002-2V20L24 10z" stroke="#38bdf8" strokeWidth="2.5"/><path d="M20 34v-6a4 4 0 018 0v6" stroke="#38bdf8" strokeWidth="2.5"/></svg>
                  </div>
                </div>
                {/* Card Industrias/Instituciones */}
                <div className="flex flex-col md:flex-row items-center gap-4 rounded-xl bg-[#23345c] border border-blue-700/30 shadow-lg p-4 w-full mb-6" style={{minWidth:'0'}}>
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-base md:text-lg font-semibold text-blue-200 mb-1">
                      Servicio para <span className="text-blue-400 font-bold">industrias e instituciones</span>
                    </div>
                    <div className="text-sm text-slate-200 opacity-90">
                      Soluciones técnicas y mantenimiento para empresas, fábricas, colegios y consorcios.<br/>
                      Adaptados a las necesidades del sector industrial e institucional.
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {/* Ícono de industria o edificio */}
                    <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#fbbf24" fillOpacity="0.15"/><path d="M12 36V22l8-6v6l8-6v20" stroke="#fbbf24" strokeWidth="2.5"/><rect x="28" y="28" width="8" height="8" rx="2" stroke="#fbbf24" strokeWidth="2.5"/></svg>
                  </div>
                </div>
              </div>
            {/* Imagen de equipo de plomería trabajando (solo escritorio, debajo de la principal y del bloque Orbis) */}
            {/* Imagen de plomería oculta temporalmente */}
            {/* <div className="hidden lg:block mt-6">
              <img 
                src="/equipo-plomeria.jpg" 
                alt="Equipo de plomería trabajando"
                className="w-full max-w-md rounded-2xl shadow-xl border border-blue-900/20 object-cover mx-auto"
                style={{minHeight:'180px', maxHeight:'260px'}}
              />
            </div> */}
          </div>
        </motion.div>

          {/* Columna de contenido */}
          <div className="w-full lg:w-7/12 lg:pt-4 flex flex-col gap-8">
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
              
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2 mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Expertos en soluciones de gas y electricidad
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                En <strong style={{ color: '#60a5fa' }}>Futurgas</strong>, nos enorgullece ofrecer soluciones integrales en instalaciones de gas y electricidad para hogares y empresas. Con más de una década de experiencia en el sector, nos hemos consolidado como líderes en el mercado gracias a nuestro compromiso con la calidad, seguridad y satisfacción del cliente.
              </p>



              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">


                {[
                  {
                    icon: '🔧',
                    title: 'Experiencia',
                    description: 'Más de 3 años brindando soluciones de calidad'
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
                

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
