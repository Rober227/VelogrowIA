import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '../components/HeroSection';
import { Modal } from '../components/Modal';
import { ProductCard } from '../components/ProductCard';
import { AuditForm } from '../components/AuditForm';
import { ParticleBackground } from '../components/ParticleBackground';
import { initializeAllEffects, initializeParallaxScroll, initializeScrollReveal, initializeGlowOnScroll } from '../utils/effects';
import { Box, Cpu, Network, Brain, Zap, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 'morpho',
    icon: <Box size={32} />,
    title: 'MORPHO: Infraestructura',
    description: 'Infraestructura digital de alto rendimiento. Diseñamos landing pages de conversión masiva y funnels de venta optimizados para transformar visitantes en clientes.',
    image: 'https://z-cdn-media.chatglm.cn/files/b013a863-ecc0-4055-86b2-3338a4493c6a.png?auth_key=1871098464-5136a4c9e90e452ab5715c07d6f868d8-0-f4aa12908642efc689438dfa7bf3b966',
    details: {
      title: 'MORPHO: INFRAESTRUCTURA',
      content: 'MORPHO es el cimiento físico de tu presencia digital. No nos limitamos a crear sitios web; diseñamos ecosistemas de conversión completos. Transformamos el tráfico anónimo en oportunidades cualificadas mediante una arquitectura web optimizada para la velocidad, el SEO y la conversión.',
      subContent: 'Desde Landing Pages de alta velocidad hasta funnels de venta complejos con múltiples escalonamientos, Morpho asegura que cada clic tenga el potencial de convertirse en un negocio.',
      capabilities: [
        'Diseño Web Responsive y de Alto Impacto Visual.',
        'Desarrollo de Funnels de Venta Multi-paso.',
        'Optimización SEO Técnica y de Velocidad (Core Web Vitals).',
        'Hosting Seguro y Certificados SSL de Grado Empresarial.',
        'Integración Nativa con Sistemas de Pago y CRM.',
        'Testing A/B Automatizado para Landing Pages.',
      ]
    }
  },
  {
    id: 'nucleus',
    icon: <Cpu size={32} />,
    title: 'NUCLEUS: Inteligencia IA',
    description: 'Fuerza laboral autónoma de IA. Despliega agentes inteligentes que atienden, cualifican y cierran ventas mediante voz y texto las 24 horas del día.',
    image: 'https://z-cdn-media.chatglm.cn/files/2a60f731-95d2-4a36-a139-a5783369f544.png?auth_key=1871099816-59607823e2dc4a70a55be999afbe3868-0-8ec431a6e5bb4af7cb5b995d5c22f939',
    details: {
      title: 'NUCLEUS: INTELIGENCIA IA',
      content: 'El cerebro cognitivo de Velogrow. Nucleus despliega una fuerza laboral digital autónoma capaz de razonar, conversar y ejecutar objetivos comerciales. Utilizamos los modelos de lenguaje más avanzados (LLMs) entrenados específicamente con los datos, el tono y los procesos de tu empresa.',
      subContent: 'Nuestros agentes de IA no son simples chatbots; son asesores virtuales que atienden llamadas, responden mensajes en redes sociales y cualifican prospectos con una precisión humana, operando 24/7 sin fatiga.',
      capabilities: [
        'Agentes de Voz IA (Entrantes y Salientes) con tono natural.',
        'Chatbots de WhatsApp e Instagram con memoria de contexto.',
        'Base de Conocimiento Dinámica (Entrenada con tus PDFs y Web).',
        'Cualificación Automática de Leads (Lead Scoring Conversacional).',
        'Cierre de Ventas y Agendamiento de Citas Autónomo.',
        'Transferencia Híbrida Inteligente a Humanos cuando es necesario.',
      ]
    }
  },
  {
    id: 'nexus',
    icon: <Network size={32} />,
    title: 'NEXUS: Omnicanalidad',
    description: 'Centralización total de canales. Unifica WhatsApp, Redes Sociales, Email y Telefonía en una sola bandeja de entrada inteligente y sincronizada.',
    image: 'https://z-cdn-media.chatglm.cn/files/83467913-d834-4b0c-bd4e-121cdead687b.png?auth_key=1871100284-4e66ba42eacd46de948a01a71018a084-0-1fef43ac8ed7abfd18be31c094645c2a',
    details: {
      title: 'NEXUS: OMNICANALIDAD',
      content: 'Fin de las aplicaciones dispersas y la falta de contexto. NEXUS conecta todos tus canales de comunicación en un "Hub" único e inteligente. Ya sea que un cliente te escriba por WhatsApp, te llame por teléfono o te envíe un email, toda la interacción se centraliza en un solo lugar, accesible para todo tu equipo.',
      subContent: 'Esta unificación permite ver el historial completo del cliente en tiempo real, asegurando que nadie repita información y que cada interacción sea personalizada y efectiva.',
      capabilities: [
        'Bandeja de Entrada Unificada (WhatsApp, Instagram, Facebook, Email, SMS).',
        'Telefonía VoIP Integrada con Grabación y Transcripción.',
        'Webchat en Vivo para captura directa en tu sitio web.',
        'Gestión de Tareas y Notas Internas por conversación.',
        'Envío Masivo de Campañas (SMS y Email Marketing).',
        'Recuperación Automática de Llamadas Perdidas y Mensajes No Leídos.',
      ]
    }
  },
  {
    id: 'cortex',
    icon: <Brain size={32} />,
    title: 'CORTEX: CRM & Datos',
    description: 'El cerebro operativo de tu empresa. Un CRM visual que organiza, segmenta y gestiona tu base de clientes con precisión basada en datos en tiempo real.',
    image: 'https://z-cdn-media.chatglm.cn/files/97423c24-fbb5-44d3-b6ae-1fa3bae19406.png?auth_key=1871100664-45fcdfcf2c304378afe1e2c83156961f-0-107c02f53ee398d8a99f0232fe6d3fcc',
    details: {
      title: 'CORTEX: CRM & DATOS',
      content: 'CORTEX es el repositorio de inteligencia de tu empresa. Un CRM visual e intuitivo que pone los datos al servicio de la venta, no al revés. Organiza, segmenta y gestiona tu base de clientes con precisión quirúrgica, permitiendo a tus equipos de ventas saber exactamente a quién contactar y cuándo.',
      subContent: 'Visualiza el estado de cada oportunidad en un Pipeline de arrastrar y soltar, automatiza el seguimiento de clientes fríos y mide el retorno de inversión de cada campaña en tiempo real.',
      capabilities: [
        'Gestión Visual de Pipeline de Ventas (Kanban).',
        'Segmentación Avanzada de Audiencias por Comportamiento.',
        'Lead Scoring Automático basado en interacciones.',
        'Analítica de ROI y Reportes de Rendimiento en Tiempo Real.',
        'Gestión y Monitoreo de KPIs de Equipos de Venta.',
        'Historial Completo de Interacciones (360° del Cliente).',
      ]
    }
  },
  {
    id: 'synapse',
    icon: <Zap size={32} />,
    title: 'SYNAPSE: Automatización',
    description: 'El motor de ejecución ininterrumpida. Diseña flujos de trabajo que realizan seguimiento, nutrición y tareas repetitivas sin intervención humana.',
    image: 'https://z-cdn-media.chatglm.cn/files/425c9c1e-e525-4c2a-b161-a15664607219.png?auth_key=1871101947-b89823a8ba54464b89bc436dd2448761-0-7e61063d6b610d6c9b1bb15da0452dd0',
    details: {
      title: 'SYNAPSE: AUTOMATIZACIÓN',
      content: 'Synapse elimina la fricción operativa y el error humano. Diseña caminos lógicos (Workflows) para que tus leads y clientes avancen por el embudo de forma automática. Si un cliente visita una página específica, descarga un PDF o abandona un carrito, Synapse reacciona instantáneamente.',
      subContent: 'Desde recordatorios de citas automáticos hasta nutrición de leads a largo plazo (Drip Campaigns), Synapse asegura que ninguna oportunidad se pierda por olvido o falta de tiempo.',
      capabilities: [
        'Constructor Visual de Flujos de Trabajo (Drag & Drop).',
        'Disparadores (Triggers) basados en Comportamiento, Tiempo o Eventos.',
        'Nutrición de Leads (Email Marketing Secuencial).',
        'Recordatorios Automáticos de Citas por SMS y Email.',
        'Reactivación de Base de Datos Dormida.',
        'Asistente IA de Respuesta Inmediata fuera de horario laboral.',
      ]
    }
  },
  {
    id: 'aura',
    icon: <Star size={32} />,
    title: 'AURA: Reputación',
    description: 'Gestión integral de autoridad de marca. Fideliza clientes, gestiona reseñas automáticamente y expande tu alcance mediante comunidades de valor.',
    image: 'https://z-cdn-media.chatglm.cn/files/17f289ff-1aff-4abb-908c-ce197c3e3dc6.png?auth_key=1871102417-27976b96d6184c5989f310257a99270f-0-3c476d12b4ea34961d998d1042b8e8fe',
    details: {
      title: 'AURA: REPUTACIÓN',
      content: 'Aura se encarga de la percepción externa y la lealtad interna de tu marca. En la era digital, tu reputación es tu activo más valioso. Automatizamos la solicitud de reseñas a clientes satisfechos y gestionamos la respuesta a críticas de forma proactiva.',
      subContent: 'Además, potenciamos la retención mediante la creación de comunidades privadas y áreas de miembros, donde entregas valor continuo y conviertes clientes en embajadores de la marca.',
      capabilities: [
        'Gestión Automatizada de Reseñas (Google, Facebook, Trustpilot).',
        'Detección y Respuesta Inmediata a Reseñas Negativas.',
        'Área de Miembros para Cursos, Formaciones y Contenido Premium.',
        'Planificador y Publicador de Contenido en Redes Sociales.',
        'Creación y Gestión de Comunidades Privadas.',
        'Sistema de Gestión de Afiliados y Programas de Referidos.',
      ]
    }
  },
];

export const VelogrowPage = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalDetails, setModalDetails] = useState<any>(null);

  const openModal = (modalId: string, details?: any) => {
    if (details) {
      setModalDetails(details);
    }
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalDetails(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
    initializeAllEffects();
    setTimeout(() => {
      initializeParallaxScroll();
      initializeScrollReveal();
      initializeGlowOnScroll();
    }, 500);
  }, []);

  return (
    <div className="bg-black relative">
      <ParticleBackground />

      <HeroSection onOpenModal={openModal} />

      <section id="integrations" className="relative py-16 px-5 overflow-hidden z-10 border-y border-gray-900 aurora-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/15 via-transparent to-neon-green/15 animate-pulse-orbs" />

        <div className="relative z-20 flex overflow-hidden">
          <div className="flex gap-20 animate-scroll whitespace-nowrap" style={{ animation: 'scroll 40s linear infinite' }}>
            {[
              { name: 'Facebook', icon: '📱' },
              { name: 'Instagram', icon: '📸' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'TikTok', icon: '🎵' },
              { name: 'WhatsApp', icon: '💬' },
              { name: 'ChatGPT', icon: '🤖' },
              { name: 'Claude', icon: '🧠' },
              { name: 'Gemini', icon: '⚛️' },
              { name: 'GLM', icon: '🔧' },
            ].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xl font-display font-black text-white/60 hover:text-neon-green transition-all hover:shadow-lg hover:shadow-neon-green/50 hover:scale-110 flex-shrink-0">
                <span>{brand.icon}</span>
                <span>{brand.name}</span>
              </div>
            ))}
            {[
              { name: 'Facebook', icon: '📱' },
              { name: 'Instagram', icon: '📸' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'TikTok', icon: '🎵' },
              { name: 'WhatsApp', icon: '💬' },
              { name: 'ChatGPT', icon: '🤖' },
              { name: 'Claude', icon: '🧠' },
              { name: 'Gemini', icon: '⚛️' },
              { name: 'GLM', icon: '🔧' },
            ].map((brand, idx) => (
              <div key={`loop-${idx}`} className="flex items-center gap-3 text-xl font-display font-black text-white/60 hover:text-neon-green transition-all hover:shadow-lg hover:shadow-neon-green/50 hover:scale-110 flex-shrink-0">
                <span>{brand.icon}</span>
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="concept" className="relative py-20 px-5 bg-gray-950 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up" data-reveal>
            <h2 className="text-4xl font-display font-black mb-6 text-gold neon-glow-text">LA CONVERGENCIA DE CANALES</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              El mercado digital ya no es una serie de islas desconectadas. El Ecosistema Velogrow IA no es un conjunto de herramientas aisladas; es un <span className="text-white font-semibold border-b border-gold">Centro de Conexión Multicanal</span> que integra cada punto de contacto.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sincronizamos la captación, la venta y la fidelización en una sola plataforma, permitiendo que tu empresa transmita el mensaje correcto, en el canal correcto, en el momento preciso.
            </p>
          </div>

          <div className="animate-fade-in-up" data-parallax="0.3">
            <img src="https://z-cdn-media.chatglm.cn/files/b4ce3fd7-09f8-4261-aa42-09d81351965b.png?auth_key=1871109065-8f7d10c918a4417db397ab42184e9295-0-2c4c5010a4ded9410360b16dec494be4" alt="Convergencia" className="w-full h-96 object-contain hover:scale-105 transition-transform duration-500 chrome-shine" />
          </div>
        </div>
      </section>

      <section id="identity" className="relative py-24 px-5 z-10 cyber-grid" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614728853913-1e221b2c40c3?q=80&w=2600')", backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-gold/40 p-12 rounded-lg shadow-lg chrome-shine" data-glow>
          <h2 className="text-4xl font-display font-black text-gold text-center mb-8 hologram">ARQUITECTOS DE LA CONECTIVIDAD</h2>
          <p className="text-lg text-white text-center leading-relaxed mb-6">
            Somos un equipo de expertos en ventas, programación y estrategia digital. En Velogrow IA, entendemos que las empresas no mueren, se vuelven obsoletas por falta de integración.
          </p>
          <p className="text-lg text-white text-center leading-relaxed">
            Nuestra misión es simple: <strong>Equipar a los negocios con la infraestructura digital necesaria para liderar su sector.</strong> No creamos software; creamos ecosistemas de comunicación inteligentes.
          </p>
        </div>
      </section>

      <section id="history" className="relative py-20 px-5 bg-black border-t border-gray-900 z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-black text-center mb-16 gold-gradient">EVOLUCIÓN: DEL CANAL ÚNICO A LA OMNICANALIDAD</h2>

          <div className="space-y-12">
            {[
              { num: '01', title: 'LA FRICCIÓN', desc: 'Identificamos el dolor de gestionar múltiples plataformas desconectadas, donde los datos se perdían en el silo de cada aplicación.' },
              { num: '02', title: 'LA TEORÍA DE CONECTIVIDAD', desc: 'Desarrollamos un Hub Central capaz de unificar voz, texto y datos, reconociendo que la eficiencia radica en la centralización de la información.' },
              { num: '03', title: 'LA MATERIALIZACIÓN', desc: 'Velogrow IA nace. La fusión definitiva entre automatización de procesos y comunicación inteligente en tiempo real.' },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center flex-shrink-0 bg-black/50 font-display font-black text-gold text-lg shadow-lg shadow-gold/20">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="relative py-24 px-5 z-10 aurora-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2659')", backgroundPosition: 'center bottom' }}>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20" data-reveal>
            <div className="text-sm font-tech text-neon-green uppercase tracking-wider mb-2 shadow-neon-green-glow neon-glow-text">Velogrow System</div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-wider hologram">Módulos Multicanal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                icon={product.icon}
                title={product.title}
                description={product.description}
                image={product.image}
                onViewDetails={() => openModal(`modal-${product.id}`, product.details)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative py-24 px-5 z-10 cyber-grid" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2560')" }}>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-2xl mx-auto">
          <div className="text-center mb-16" data-reveal>
            <div className="text-sm font-tech text-neon-green uppercase tracking-wider mb-2 shadow-neon-green-glow neon-glow-text">Proceso</div>
            <h2 className="text-4xl font-display font-black text-white uppercase tracking-wider hologram">Ruta de Integración</h2>
          </div>

          <div className="space-y-12">
            {[
              { icon: '🔬', title: 'Análisis de Canales', desc: 'Analizamos la estructura de comunicación actual.' },
              { icon: '🧬', title: 'Integración del Hub', desc: 'Conectamos todos los puntos de contacto en el ecosistema.' },
              { icon: '🚀', title: 'Optimización y Escala', desc: 'El sistema aprende y optimiza la conversión automáticamente.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-display font-black text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="relative h-screen min-h-[600px] flex flex-col justify-center items-center text-center z-10 aurora-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2560')", backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/90" />

        <div className="relative z-20 max-w-2xl px-5" data-reveal>
          <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8 uppercase tracking-widest hologram">¿LISTO PARA LA CONVERGENCIA?</h2>

          <button
            onClick={() => openModal('modal-audit')}
            className="inline-block px-16 py-6 text-2xl font-display font-bold text-neon-green border-2 border-neon-green bg-black/50 backdrop-blur uppercase tracking-widest cursor-pointer transition-all hover:bg-neon-green hover:text-black hover:shadow-lg hover:shadow-neon-green magnetic-btn chrome-shine"
          >
            SOLICITAR AUDITORÍA
          </button>
        </div>
      </section>

      <footer className="relative py-10 px-5 border-t border-gray-900 bg-black z-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2560')" }}>
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative text-center">
          <p className="font-display text-2xl text-gold mb-3">VELOGROW IA</p>
          <p className="text-gray-600 text-sm font-tech">© 2024 VELOGROW IA SYSTEMS. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      <Modal isOpen={activeModal === 'modal-audit'} onClose={closeModal} title="SOLICITAR AUDITORÍA" variant="audit">
        <AuditForm onSuccess={closeModal} />
      </Modal>

      {products.map((product) => (
        <Modal key={product.id} isOpen={activeModal === `modal-${product.id}`} onClose={closeModal} title={modalDetails?.title || product.title}>
          <div>
            <p className="text-white mb-4 leading-relaxed">{modalDetails?.content || product.details.content}</p>
            <p className="text-white mb-6 leading-relaxed">{modalDetails?.subContent || product.details.subContent}</p>
            <ul className="space-y-3 border-l-2 border-neon-green pl-5">
              {(modalDetails?.capabilities || product.details.capabilities).map((capability: string, idx: number) => (
                <li key={idx} className="text-gray-300 flex gap-3">
                  <span className="text-neon-green font-bold flex-shrink-0">✓</span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      ))}
    </div>
  );
};
