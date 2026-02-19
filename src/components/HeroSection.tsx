import { useEffect } from 'react';
import gsap from 'gsap';

interface HeroSectionProps {
  onOpenModal: (modalId: string) => void;
}

export const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  useEffect(() => {
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .to(".live-indicator", { duration: 1, opacity: 1, y: -10, delay: 0.5 })
      .to(".hero-title", { duration: 1.5, opacity: 1, y: 0 }, "-=0.8")
      .to(".hero-subtitle", { duration: 1.2, opacity: 1, y: 0 }, "-=1")
      .to(".neon-btn-hero", { duration: 1, opacity: 1, y: 0 }, "-=0.8")
      .to(".scroll-down", { duration: 1, opacity: 1 }, "-=0.5");
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535378437323-9555841f3d21?q=80&w=2560')", filter: 'brightness(0.25) contrast(1.1)' }}
      />

      <div className="absolute top-7 left-10 z-20">
        <img src="https://z-cdn-media.chatglm.cn/files/06a4129f-1fc5-45f3-90eb-28c9501455c3.jpeg?auth_key=1871087271-4f79e1dd884e4828b3981e9c2617d04d-0-2a84e517a7e924eac5e6403c491370b9" alt="Velogrow IA Logo" className="h-20 w-auto drop-shadow-lg" />
      </div>

      <div className="relative z-20 text-center max-w-3xl px-5">
        <div className="live-indicator inline-flex items-center gap-2.5 text-neon-green font-tech text-sm mb-5 border border-neon-green/30 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur opacity-0">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-lg shadow-neon-green" />
          <span>SYSTEM ONLINE // V.2.0.4</span>
        </div>

        <h1 className="hero-title text-5xl md:text-7xl font-display font-black mb-2.5 opacity-0 bg-gradient-to-b from-white to-yellow-600 bg-clip-text text-transparent">
          VELOGROW IA
        </h1>

        <p className="hero-subtitle font-display text-xl md:text-3xl text-gray-300 mb-10 uppercase tracking-widest font-semibold opacity-0">
          Dominando el Mercado Como un Ecosistema Multicanalidad
        </p>

        <button
          onClick={() => onOpenModal('modal-audit')}
          className="neon-btn-hero inline-flex items-center justify-center px-12 py-5 font-display text-lg font-bold text-neon-green border-2 border-neon-green bg-black/50 backdrop-blur cursor-pointer transition-all opacity-0 uppercase tracking-widest hover:text-black hover:bg-neon-green hover:shadow-lg hover:shadow-neon-green"
        >
          SOLICITAR AUDITORÍA
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2.5 opacity-0 scroll-down">
        <div className="w-7 h-12 border-2 border-gray-500 rounded-full relative">
          <div className="w-1 h-2 bg-gold absolute top-2.5 left-1/2 transform -translate-x-1/2 rounded animate-scrollWheel" />
        </div>
        <span className="text-gray-500 text-sm">Scroll</span>
      </div>
    </section>
  );
};
