import { useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Establecer estilos globales directamente
    document.body.style.backgroundColor = '#0f172a'; // Color azul oscuro
    document.body.style.color = '#f8fafc'; // Color de texto claro
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, sans-serif';
    
    // Limpiar al desmontar
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      backgroundImage: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)'
    }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      
      {/* Botón de WhatsApp flotante */}
      <a 
        href="https://wa.me/5491123456789" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          backgroundColor: '#22c55e',
          color: 'white',
          padding: '1rem',
          borderRadius: '9999px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          transition: 'background-color 0.3s',
          zIndex: 50
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#16a34a'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#22c55e'}
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.498 14.382v-.002c-.301-.15-1.767-.867-2.04-.966-.274-.1-.473-.15-.673.149-.2.3-.771.964-.944 1.162-.175.195-.35.222-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.298-.352.446-.527.146-.181.194-.3.296-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.517-.172-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.489 1.704.625.714.227 1.365.195 1.879.118.571-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.79 11.79 0 01-1.819-6.287c0-6.5 5.3-11.7 11.77-11.7 3.14 0 6.11 1.2 8.34 3.43 2.23 2.25 3.45 5.25 3.45 8.4-.01 6.5-5.3 11.8-11.7 11.8"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
