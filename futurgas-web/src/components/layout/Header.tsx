import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(71, 85, 105, 0.3)',
      transition: 'all 0.3s ease-in-out'
    }}>
      <nav style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }} aria-label="Global">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a 
            href="#" 
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              const before = e.currentTarget.querySelector('.logo-hover') as HTMLElement;
              if (before) before.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              const before = e.currentTarget.querySelector('.logo-hover') as HTMLElement;
              if (before) before.style.opacity = '0';
            }}
          >
            <div 
              className="logo-hover"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(59, 130, 246, 0.2))',
                borderRadius: '0.5rem',
                zIndex: -1,
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
            />
            <img 
              src="/futurgas.png" 
              alt="FuturGas Logo" 
              style={{
                height: '40px',
                width: 'auto',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 2px 10px rgba(96, 165, 250, 0.3))'
              }}
            />
          </a>
        </div>
        
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '2.5rem'
        }}>
          {navigation.map((item) => (
            <div style={{ position: 'relative' }}>
              <a
                key={item.name}
                href={item.href}
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => { 
                  e.currentTarget.style.color = '#60a5fa';
                  const after = e.currentTarget.nextElementSibling as HTMLElement;
                  if (after) after.style.width = '100%';
                }}
                onMouseOut={(e) => { 
                  e.currentTarget.style.color = '#e2e8f0';
                  const after = e.currentTarget.nextElementSibling as HTMLElement;
                  if (after) after.style.width = '0%';
                }}
              >
                {item.name}
              </a>
              <div style={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0%',
                height: '2px',
                background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
                transition: 'width 0.3s ease',
                borderRadius: '2px'
              }} />
            </div>
          ))}
          <div style={{ position: 'relative' }}>
            <a
              href="#contacto"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: 'white',
                padding: '0.6rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                zIndex: 1,
                display: 'inline-block'
              }}
              onMouseOver={(e) => { 
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                const before = e.currentTarget.querySelector('.btn-hover') as HTMLElement;
                if (before) before.style.opacity = '1';
              }}
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                const before = e.currentTarget.querySelector('.btn-hover') as HTMLElement;
                if (before) before.style.opacity = '0';
              }}
            >
              <div 
                className="btn-hover"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: -1
                }}
              />
              Contacto
            </a>
          </div>
        </div>
        
        <div style={{ display: 'block' }}>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              color: '#e2e8f0',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)' }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            <span style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              padding: 0,
              margin: '-1px',
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              borderWidth: 0
            }}>Abrir menú</span>
            {mobileMenuOpen ? (
              <XMarkIcon style={{ width: '1.5rem', height: '1.5rem' }} aria-hidden="true" />
            ) : (
              <Bars3Icon style={{ width: '1.5rem', height: '1.5rem' }} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
        
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            marginTop: '1rem',
            padding: '0 1.5rem 1rem',
            position: 'absolute',
            width: '100%',
            left: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.98)',
            backdropFilter: 'blur(8px)',
            zIndex: 40,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{
            padding: '0.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, color 0.2s'
                }}
                onMouseOver={(e) => { 
                  e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseOut={(e) => { 
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#e2e8f0';
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                padding: '0.75rem 1rem',
                borderRadius: '0.375rem',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'white',
                backgroundColor: '#3b82f6',
                textDecoration: 'none',
                transition: 'background-color 0.2s, transform 0.2s',
                marginTop: '0.5rem'
              }}
              onMouseOver={(e) => { 
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => { 
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
