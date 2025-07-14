import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    message: '',
  });

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 text-white">
      {/* Elemento decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIwLjQiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Contacto
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            ¿En qué podemos ayudarte?
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Completa el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad para brindarte la mejor solución a tus necesidades.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 md:p-10 shadow-2xl"
          >
            {/* NUEVO BLOQUE DE WHATSAPP DIRECTO */}
            <div className="flex flex-col items-center gap-6">
              <textarea
                className="w-full max-w-xl min-h-[120px] rounded-xl bg-gray-700/60 border border-gray-600 text-white p-4 text-lg focus:outline-none focus:border-blue-500 shadow-lg"
                placeholder="Escribe tu mensaje para WhatsApp..."
                value={formData.message}
                onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />
              <a
                href={`https://wa.me/5491136250298?text=${encodeURIComponent(formData.message || 'Hola, quiero hacer una consulta desde la web de Futurgas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                style={{ minWidth: 220, justifyContent: 'center' }}
              >
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.664 4.605 1.926 6.551L4 29l7.742-1.893A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.07 0-4.093-.545-5.844-1.576l-.418-.247-4.599 1.126 1.23-4.466-.272-.436A10.93 10.93 0 015.083 15c0-6.032 4.885-10.917 10.917-10.917S26.917 8.968 26.917 15 22.032 25.917 16 25.917zm6.127-7.214c-.337-.169-2.003-.988-2.312-1.102-.31-.113-.536-.169-.762.169-.225.337-.87 1.102-1.067 1.327-.197.225-.394.253-.731.084-.337-.169-1.425-.525-2.715-1.672-1.004-.897-1.682-2.004-1.88-2.341-.197-.337-.021-.519.148-.688.152-.151.337-.394.506-.591.169-.197.225-.338.337-.563.113-.225.056-.422-.028-.591-.084-.169-.75-1.81-1.027-2.48-.271-.652-.546-.563-.762-.574-.197-.009-.422-.011-.648-.011-.225 0-.591.084-.9.394-.31.31-1.18 1.142-1.18 2.788 0 1.646 1.208 3.236 1.377 3.461.169.225 2.387 3.82 5.795 5.21.81.349 1.441.557 1.934.713.813.259 1.552.222 2.136.135.649-.092 2.008-.823 2.29-1.619.282-.797.282-1.457.197-1.611-.084-.155-.31-.244-.648-.413z"/>
                </svg>
                Enviar por WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto md:mx-0 mb-4 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-1">Llámanos (Técnico jefe)</h4>
                <p className="text-gray-400">+54 9 11 3625-0298</p>
                <p className="text-sm text-gray-500 mt-1">Consultas técnicas y urgencias<br/>Lun-Vie: 8:00 - 20:00</p>
              </div>

               {/* Teléfono de contabilidad/presupuestos */}
               <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto md:mx-0 mb-4 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-1">Contabilidad / Presupuestos</h4>
                <p className="text-gray-400">+54 9 11 6304-6138</p>
                <p className="text-sm text-gray-500 mt-1">Consultas administrativas, facturación y presupuestos</p>
              </div>

              <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto md:mx-0 mb-4 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-1">Escríbenos</h4>
                <p className="text-gray-400">futurgas30@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">Respondemos en 24h</p>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
