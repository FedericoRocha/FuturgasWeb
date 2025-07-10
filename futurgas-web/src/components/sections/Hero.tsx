import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Configuración del canvas
    canvas.width = window.innerWidth;
    canvas.height = 600;
    
    // Partículas
    const particles: {x: number, y: number, size: number, speedX: number, speedY: number}[] = [];
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }
    
    // Animación de partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Dibujar partícula
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Manejar redimensionamiento
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e40af 100%)',
      color: '#ffffff',
      overflow: 'hidden',
      padding: '8rem 0 10rem',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      boxShadow: 'inset 0 -60px 100px -50px rgba(0,0,0,0.5)'
    }}>
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5
        }}
      />
      
      <div style={{
        position: 'relative',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        zIndex: 1,
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...(window.innerWidth >= 1024 ? {
            flexDirection: 'row',
            alignItems: 'center'
          } : {})
        }}>
          <div style={{
            width: '100%',
            marginBottom: '3rem',
            ...(window.innerWidth >= 1024 ? {
              width: '50%',
              marginBottom: 0,
              paddingRight: '2rem'
            } : {})
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 style={{
                fontSize: window.innerWidth >= 1024 ? '4rem' : window.innerWidth >= 768 ? '3.5rem' : '2.5rem',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '1.5rem',
                background: 'linear-gradient(90deg, #fff, #a5b4fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0,
                padding: 0
              }}>
                Tu solución integral en servicios de <span style={{ color: '#60a5fa' }}>gas</span> y electricidad
              </h1>
            </motion.div>
            
            <motion.p 
              style={{
                fontSize: '1.25rem',
                color: '#e2e8f0',
                marginBottom: '2.5rem',
                lineHeight: 1.6,
                maxWidth: '600px',
                opacity: 0.9
              }}
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
              style={{
                display: 'flex',
                flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
                gap: window.innerWidth >= 640 ? '1.5rem' : '1rem'
              }}
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1,
                  borderRadius: '0.5rem'
                }} className="btn-hover-effect" />
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
                    zIndex: 2,
                    border: 'none',
                    cursor: 'pointer'
                  }}
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
              <div style={{ position: 'relative', display: 'inline-block' }}>
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
                    position: 'relative',
                    zIndex: 2,
                    cursor: 'pointer'
                  }}
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
