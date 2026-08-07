import { motion } from 'motion/react';
import { Globe, Phone, Share2, ChevronLeft, ChevronRight, Quote, User, Stethoscope } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Links secundários mantidos usando o design criado anteriormente
const LINKS = [
  {
    id: 'site',
    title: 'Visite nosso Site',
    url: 'https://desertmooncbd.com/pt',
    icon: Globe,
    primary: false,
  },
  {
    id: 'appstore',
    title: 'Acesso ao Paciente',
    url: 'https://wa.me/17603300145?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20acolhimento%20da%20Desert%20Moon',
    icon: User,
    primary: false,
  },
  {
    id: 'googleplay',
    title: 'Acesso ao Prescritor',
    url: 'https://wa.me/17603300145?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20acolhimento%20da%20Desert%20Moon',
    icon: Stethoscope,
    primary: false,
    black: true,
  },
  {
    id: 'whatsapp',
    title: 'Fale com o Acolhimento',
    url: 'https://wa.me/17603300145?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20acolhimento%20da%20Desert%20Moon',
    icon: Phone,
    primary: true,
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "Mais um avanço da Ayla! Ela começou a fazer aula de natação, ontem foi o segundo dia 💚 Estou compartilhando com vocês que sempre me ajudaram!",
    name: "Ayla da Conceição dos Santos - Mãe Jéssica",
    role: "Paciente Desertmoon",
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    id: 2,
    text: "Comprar meus medicamentos naturais ficou muito mais fácil e seguro. O acompanhamento é perfeito.",
    name: "Carlos Mendes",
    role: "Paciente Desertmoon",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 3,
    text: "Nunca vi um atendimento tão atencioso e completo para a saúde. As orientações são ótimas.",
    name: "Mariana Silva",
    role: "Paciente Desertmoon",
    avatar: "https://i.pravatar.cc/150?img=35"
  },
  {
    id: 4,
    text: "Vivia com muita ansiedade e instabilidade. Ao longo do tratamento, percebi uma melhora gradual e hoje me sinto muito mais equilibrado, calmo e no controle do meu dia a dia!",
    name: "Brunno Martinelli",
    role: "Paciente Desertmoon",
    avatar: "https://i.pravatar.cc/150?img=68"
  },
  {
    id: 5,
    text: "Agora tenho todo o meu histórico e tratamento organizados. Facilitou demais a minha vida!",
    name: "Camila Ribeiro",
    role: "Paciente Desertmoon",
    avatar: "https://i.pravatar.cc/150?img=43"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-[360px] flex flex-col items-center mt-6 mb-16 z-20"
    >
      <div className="w-full bg-white rounded-[28px] overflow-hidden relative shadow-sm border border-slate-100">
        
        {/* Background Texture inside the testimonial card as requested */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.25] mix-blend-multiply pointer-events-none" 
          style={{ backgroundImage: `url('https://quraapp.com.br/wp-content/uploads/2025/04/background-qura1.png')` }}
        />

        <div className="w-full relative z-10 p-8">
          <Quote className="w-10 h-10 text-[#7c3aed] mb-6 transform scale-x-[-1] stroke-[1.5]" fill="none" />

          {/* Inner wrapper to strictly clip content to padding area without bleed */}
          <div className="w-full overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                width: `${TESTIMONIALS.length * 100}%`, 
                transform: `translateX(-${(currentIndex * 100) / TESTIMONIALS.length}%)` 
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} style={{ width: `${100 / TESTIMONIALS.length}%` }} className="flex-shrink-0">
                  <p className="text-slate-700 font-medium text-[17px] leading-[1.6] mb-8 pr-1">"{t.text}"</p>
                  
                  <div className="flex items-center gap-4 border-slate-200/50">
                    <img src={t.avatar} alt={t.name} className="w-[52px] h-[52px] rounded-full object-cover shadow-sm bg-slate-100 border border-slate-200/50" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-[17px] leading-tight">{t.name}</h4>
                      <p className="text-slate-600 font-medium text-[15px] leading-tight mt-1 pt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-3 mt-6">
        <button onClick={prev} className="p-3 rounded-full bg-white/70 hover:bg-white text-qura-dark shadow-sm backdrop-blur-md transition-all border border-slate-200/50">
          <ChevronLeft className="w-5 h-5"/>
        </button>
        <button onClick={next} className="p-3 rounded-full bg-white/70 hover:bg-white text-qura-dark shadow-sm backdrop-blur-md transition-all border border-slate-200/50">
          <ChevronRight className="w-5 h-5"/>
        </button>
      </div>
    </motion.div>
  );
};

export default function App() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Qura App',
          text: 'Conheça o Qura App - Consulta e Importação',
          url: window.location.href,
        });
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-qura-bg flex flex-col relative font-sans overflow-x-hidden">
      {/* Header Oficial Minimalista */}
      <header className="w-full bg-white h-[72px] shadow-sm z-50 sticky top-0 flex justify-center items-center">
        {/* Social Media Icons - Left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {/* Instagram */}
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-qura-dark hover:bg-slate-50 rounded-full transition-all"
            aria-label="Instagram">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-qura-dark hover:bg-slate-50 rounded-full transition-all"
            aria-label="TikTok">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-qura-dark hover:bg-slate-50 rounded-full transition-all"
            aria-label="Facebook">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        <button 
          onClick={handleShare} 
          className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-qura-dark hover:bg-slate-50 rounded-full transition-all"
          aria-label="Compartilhar"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </header>


      {/* Main Content with Background */}
      <div className="flex-1 w-full flex flex-col items-center relative overflow-hidden">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-90"
          style={{ backgroundImage: `url('/assets/banckground--qura.webp')` }}
        />
        {/* Overlay subtlely frosted for text legibility */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 via-white/40 to-qura-bg/90 pointer-events-none" />

        <main className="w-full max-w-md z-10 flex flex-col items-center px-6 pt-6 pb-10 relative h-full">
          
          {/* Logo */}
          <img
            src="/assets/logo-2.png"
            alt="Qura Logo"
            className="w-[110px] object-contain logo-float mb-4"
          />

          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-6 py-1.5 rounded-full border border-qura-dark text-qura-dark text-sm font-semibold tracking-wide mb-8 backdrop-blur-sm bg-white/20"
          >
            Bem-vindos à Desertmoon!
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[34px] sm:text-4xl text-center font-black text-qura-dark leading-[1.1] mb-5 tracking-tight w-full drop-shadow-sm"
          >
            Sua Jornada para o<br />
            Equilíbrio de Vida<br />
            e Saúde!
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-qura-dark font-medium text-[15px] sm:text-base leading-relaxed mb-8 px-1 max-w-[340px] drop-shadow-sm"
          >
            Conheça nossos produtos premium à base de cannabis. Testados em laboratório, certificados e desenvolvidos para o seu bem-estar e qualidade de vida.
          </motion.p>


          {/* Regular Buttons (Mix Part) - Mantendo o layout linktree das secundárias */}
          <div className="w-full space-y-4 mb-4 z-20">
            {LINKS.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5 + (index * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative flex items-center justify-center w-full min-h-[76px] rounded-[28px] font-bold shadow-sm overflow-hidden group
                    ${link.black
                      ? 'bg-[#1a1c1e] text-white border border-white/5'
                      : link.primary 
                        ? 'bg-qura-light text-white' 
                        : 'bg-[#d8dadf] text-qura-dark border border-[#d0d3d8]'
                    }
                    transition-all duration-300 hover:shadow-md
                  `}
                >
                  {link.black ? (
                    <div 
                      className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.25] mix-blend-luminosity grayscale pointer-events-none" 
                      style={{ backgroundImage: `url('https://quraapp.com.br/wp-content/uploads/2025/04/background-qura1.png')` }}
                    />
                  ) : link.primary ? (
                    <div 
                      className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.45] mix-blend-multiply pointer-events-none" 
                      style={{ backgroundImage: `url('https://quraapp.com.br/wp-content/uploads/2025/04/background-qura1.png')` }}
                    />
                  ) : (
                    <div 
                      className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.45] mix-blend-multiply pointer-events-none" 
                      style={{ backgroundImage: `url('https://quraapp.com.br/wp-content/uploads/2025/04/background-qura1.png')` }}
                    />
                  )}
                  
                  {/* Subtle dark hover overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="flex items-center justify-center gap-2 z-10 w-full px-6">
                    <Icon className={`w-5 h-5 flex-shrink-0 ${link.black || link.primary ? 'text-white' : 'text-qura-dark'}`} />
                    <span className="text-[17px] tracking-wide text-center">{link.title}</span>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Real-time Tracking Black Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="w-full flex justify-center mt-6 sm:mt-10"
          >
            <div className="w-full max-w-[360px] border border-white/5 rounded-[32px] min-h-[700px] px-6 pt-10 flex flex-col items-center justify-start relative overflow-hidden shadow-2xl z-20">
              
              {/* Background topological texture with low opacity */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-100 pointer-events-none" 
                style={{ backgroundImage: `url('/assets/background-linktree-desert.png')` }}
              />

              <h2 className="text-qura-dark text-[32px] sm:text-[34px] font-bold leading-[1.05] tracking-tight relative z-10 w-full text-center drop-shadow-md">
                Seu Bem-Estar<br />
                começa aqui!
              </h2>

            </div>
          </motion.div>

          <TestimonialCarousel />

          <div className="w-full text-center mt-2 pb-6 z-20 flex flex-col items-center">
            <img 
              src="/assets/logo-2.png" 
              alt="Qura Logo" 
              className="h-28 w-auto object-contain mb-3 opacity-80" 
            />
            <p className="text-[13px] text-slate-500 font-medium">
              &copy; {new Date().getFullYear()} Desertmoon. Todos os direitos reservados.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}
