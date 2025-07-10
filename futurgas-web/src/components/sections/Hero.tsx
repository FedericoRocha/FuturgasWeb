import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const animationFrameId = useRef<number | null>(null);

  // Efecto para manejar el estado de móvil/escritorio
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    
    // Usar debounce para evitar múltiples actualizaciones durante el redimensionamiento
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        checkIfMobile();
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Efecto para el canvas y partículas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    

    let width = window.innerWidth;
    let height = 600;
    
    const handleResize = () => {
      width = window.innerWidth;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    
    // Configuración inicial
    handleResize();
    
    // Partículas
    const particles: {x: number, y: number, size: number, speedX: number, speedY: number}[] = [];
    const particleCount = isMobile ? 30 : 60;
    
    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }
    
    // Función de animación de partículas
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
        
        // Dibujar partícula
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    // Iniciar animación
    const animateParticles = () => {
      if (canvas && ctx) {
        animate();
        const id = requestAnimationFrame(animateParticles);
        animationFrameId.current = id;
      }
    };
    
    const initialId = requestAnimationFrame(animateParticles);
    animationFrameId.current = initialId;
    
    // Limpieza
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden py-20 md:py-32 lg:py-0 lg:min-h-screen flex items-center shadow-[inset_0_-60px_100px_-50px_rgba(0,0,0,0.5)]">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center lg:flex-row lg:items-center">
          <div className="w-full mb-8 sm:mb-12 lg:mb-0 lg:w-1/2 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent m-0 p-0">
                Tu solución integral en servicios de <span className="text-blue-400">gas</span> y electricidad
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Profesionales calificados para resolver todas tus necesidades de instalación, mantenimiento y reparación con la más alta calidad y seguridad.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <div className="w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 transition-opacity duration-300 rounded-lg z-10" />
                <a
                  href="#contacto"
                  className="relative z-20 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  onMouseOver={(e) => {
                    const hoverEffect = e.currentTarget.previousElementSibling as HTMLElement;
                    if (hoverEffect) hoverEffect.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    const hoverEffect = e.currentTarget.previousElementSibling as HTMLElement;
                    if (hoverEffect) hoverEffect.style.opacity = '0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                  }}
                  onMouseDown={() => {
                    // Efecto al hacer clic
                  }}
                  onMouseUp={() => {
                    // Restaurar después del clic
                  }}
                >
                  Solicitar presupuesto
                  <svg style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="w-full sm:w-auto">
                <a
                  href="#servicios"
                  className="relative z-20 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-900"
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onMouseDown={() => {
                    // Efecto al hacer clic
                  }}
                  onMouseUp={() => {
                    // Restaurar después del clic
                  }}
                >
                  Nuestros servicios
                  <svg style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '3rem',
                flexWrap: 'wrap',
                gap: '1.5rem'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '50%',
                  background: '#4ade80',
                  marginRight: '0.5rem',
                  boxShadow: '0 0 10px #4ade80'
                }} />
                <span style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>Disponibilidad 24/7</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '50%',
                  background: '#60a5fa',
                  marginRight: '0.5rem',
                  boxShadow: '0 0 10px #60a5fa'
                }} />
                <span style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>Profesionales certificados</span>
              </div>
            </motion.div>
          </div>
            
          <div style={{
            width: '100%',
            position: 'relative',
            ...(window.innerWidth >= 1024 ? {
              width: '50%',
              paddingLeft: '2rem'
            } : {})
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              style={{
                position: 'relative',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'
              }}
              whileHover={{
                transform: 'perspective(1000px) rotateY(0) rotateX(0)',
                transition: { duration: 0.5 }
              }}
            >
              <div style={{
                position: 'relative',
                zIndex: 10,
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2)'
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '66.67%', // 3:2 aspect ratio
                  overflow: 'hidden'
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1600891964099-5a5d8a7a6e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Técnico trabajando en instalación"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      transform: 'scale(1.05)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.2) 50%, rgba(15, 23, 42, 0.1) 100%)',
                    zIndex: 1
                  }} />
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.5rem',
                  zIndex: 2
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      background: 'rgba(96, 165, 250, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.75rem',
                      border: '1px solid rgba(96, 165, 250, 0.3)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.4 15C19.2663 15.3016 19.1699 15.6247 19.1 16C19.1 16 18 16.5 18 17C18 17.5 19 18 19 18.5C19 19 18 19 18 20H6C6 19 5 19 5 18.5C5 18 6 17.5 6 17C6 16.5 4.9 16 4.9 16C4.83014 15.6247 4.73375 15.3016 4.6 15C4.41092 14.5509 4.2 14.1 4 13.7C3.9 13.5 4 13.2 4 13C4 11 6 9 12 9C18 9 20 11 20 13C20 13.2 20.1 13.5 20 13.7C19.8 14.1 19.6 14.6 19.4 15Z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        lineHeight: 1.2
                      }}>Técnicos Certificados</div>
                      <div style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.875rem',
                        marginTop: '0.125rem'
                      }}>Garantía de calidad</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(96, 165, 250, 0) 70%)',
                borderRadius: '50%',
                top: '-50px',
                right: '-50px',
                zIndex: 0
              }} />
              <div style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 70%)',
                borderRadius: '50%',
                bottom: '-100px',
                left: '-100px',
                zIndex: 0
              }} />
            </motion.div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '2rem',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '1rem',
                flex: '1',
                minWidth: '120px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.25rem'
                }}>10+</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>Años de experiencia</div>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '1rem',
                flex: '1',
                minWidth: '120px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.25rem'
                }}>500+</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>Clientes satisfechos</div>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '1rem',
                flex: '1',
                minWidth: '120px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.25rem'
                }}>24/7</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>Soporte disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '8rem',
        background: 'linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0) 100%)',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
        cursor: 'pointer',
        zIndex: 10
      }}
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }}>
        <div style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          ...(window.innerWidth >= 1024 ? {
            ':hover': {
              background: 'rgba(255, 255, 255, 0.2)',
              transform: 'translateY(-5px)'
            }
          } : {})
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 14L12 21M12 21L5 14M12 21L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
