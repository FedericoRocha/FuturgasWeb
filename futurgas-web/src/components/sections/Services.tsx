import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { 
  WrenchScrewdriverIcon as WrenchScrewdriverSolid,
  BoltIcon as BoltSolid,
  FireIcon as FireSolid
} from '@heroicons/react/24/solid';

// Eliminamos la importación de styles.module.css ya que usaremos estilos en línea

const services = [
  {
    name: 'Plomería Integral',
    description: 'Soluciones completas en instalación, mantenimiento y reparación de sistemas de plomería residencial y comercial.',
    icon: WrenchScrewdriverSolid,
    features: [
      'Reparación de fugas',
      'Instalación de sanitarios',
      'Destape de cañerías',
      'Mantenimiento preventivo'
    ],
    colorFrom: '#3b82f6',
    colorTo: '#1d4ed8'
  },
  {
    name: 'Instalaciones de Gas',
    description: 'Servicio profesional de instalación y mantenimiento de redes de gas natural y envasado, con personal certificado.',
    icon: FireSolid,
    features: [
      'Instalaciones nuevas',
      'Certificaciones',
      'Detección de fugas',
      'Mantenimiento anual'
    ],
    colorFrom: '#f59e0b',
    colorTo: '#d97706'
  },
  {
    name: 'Electricidad',
    description: 'Servicios eléctricos completos con garantía, desde instalaciones nuevas hasta reparaciones de emergencia 24/7.',
    icon: BoltSolid,
    features: [
      'Instalaciones nuevas',
      'Reparaciones urgentes',
      'Cuadros eléctricos',
      'Iluminación LED'
    ],
    colorFrom: '#8b5cf6',
    colorTo: '#7c3aed'
  },

];


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Services() {
  return (
    <section id="servicios" style={{
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at top, #1e293b 0%, #0f172a 70%)',
      color: '#f8fafc'
    }}>
      {/* Elementos decorativos */}
      <div style={{
        position: 'absolute',
        top: '-300px',
        right: '-150px',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56, 182, 255, 0.08) 0%, rgba(15, 23, 42, 0) 70%)',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'relative',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        zIndex: 1
      }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
            }
          }}
          style={{
            textAlign: 'center',
            marginBottom: '6rem',
            position: 'relative'
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-block',
              color: '#60a5fa',
              fontWeight: 600,
              marginBottom: '1rem',
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            Lo que ofrecemos
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: window.innerWidth >= 1024 ? '3rem' : '2.25rem',
              lineHeight: 1.2,
              fontWeight: 800,
              margin: '0.5rem 0 1.5rem',
              background: 'linear-gradient(90deg, #fff, #a5b4fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Soluciones profesionales a tu medida
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              color: '#94a3b8',
              fontSize: '1.125rem',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto',
              marginBottom: '1.5rem'
            }}
          >
            Ofrecemos servicios profesionales y garantizados en todas las áreas de la construcción, plomería, gas y electricidad. 
            Nuestro equipo de expertos está listo para ayudarte con soluciones personalizadas.
          </motion.p>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              height: '4px',
              width: '80px',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              borderRadius: '2px',
              margin: '2rem auto 0',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
            }}
          />
        </motion.div>
        
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch place-items-center"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="relative rounded-2xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 flex flex-col min-h-full w-full hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 flex-grow hover:scale-105"
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${service.colorFrom}, ${service.colorTo})`
                  }} />
                  
                  <div className="p-6 md:p-8 flex flex-col h-full" style={{ boxSizing: 'border-box' }}>
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white/10"
                      style={{ 
                        background: `linear-gradient(135deg, ${service.colorFrom} 10%, ${service.colorTo} 90%)` 
                      }}
                    >
                      <Icon style={{ 
                        width: '2.5rem', 
                        height: '2.5rem', 
                        color: '#fff', 
                        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.18))'
                      }} />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-white">{service.name}</h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{service.description}</p>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      {service.features && service.features.map((feature, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '0.5rem',
                          color: '#cbd5e1',
                          fontSize: '0.9375rem'
                        }}>
                          <CheckCircleIcon style={{
                            width: '1rem',
                            height: '1rem',
                            marginRight: '0.5rem',
                            color: service.colorFrom,
                            flexShrink: 0
                          }} />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: service.colorFrom,
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      width: '100%',
                      justifyContent: 'space-between'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.paddingRight = '0.5rem';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.paddingRight = '0';
                    }}
                    >
                      Ver más detalles
                      <ArrowRightIcon style={{
                        width: '1.25rem',
                        height: '1.25rem',
                        marginLeft: '0.25rem',
                        transition: 'transform 0.3s ease'
                      }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              marginTop: '5rem',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div style={{
              position: 'relative',
              display: 'inline-block',
              overflow: 'hidden',
              borderRadius: '0.75rem',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)',
                backgroundSize: '300% 100%',
                animation: 'gradient 8s ease infinite',
                borderRadius: '0.75rem',
                zIndex: -1,
                opacity: 0.9,
                filter: 'blur(8px)'
              }} />
              
              <a
                href="#contacto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem 2.5rem',
                  borderRadius: '0.75rem',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  color: 'white',
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Solicitar servicio</span>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                  zIndex: -1,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} />
              </a>
            </div>
            
            <p style={{
              color: '#94a3b8',
              marginTop: '1.5rem',
              fontSize: '0.9375rem'
            }}>
              Más de 1,000 clientes satisfechos en toda la región
            </p>
          </motion.div>
        </div>
        
        <div style={{
          position: 'absolute',
          width: 0,
          height: 0,
          overflow: 'hidden',
          visibility: 'hidden'
        }}>
          <style>{
            `@keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }`
          }</style>
        </div>
        <style>{
          `@keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }`
        }</style>
      </div>
      <style>{
        `@media (max-width: 768px) {
          .service-card {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
