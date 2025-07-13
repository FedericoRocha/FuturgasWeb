import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
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
      <Analytics />
    </div>
  );
}

export default App;
