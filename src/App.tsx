import { Sparkles, Zap, Brain, MessageSquare, TrendingUp, Users, Layout, BarChart3, Target, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { useState } from 'react';
import Calendar from './components/Calendar';

function App() {
  const [showCalendar, setShowCalendar] = useState(false);

  if (showCalendar) {
    return <Calendar onBack={() => setShowCalendar(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/diseno_sin_titulo_(12).png" alt="VelogrowIA" className="h-20" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors">Características</a>
            <a href="#benefits" className="text-gray-300 hover:text-yellow-400 transition-colors">Beneficios</a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contacto</a>
            <a href="tel:3512600722" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">351-260-0722</span>
            </a>
          </div>
          <button
            onClick={() => setShowCalendar(true)}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105">
            Comenzar Ahora
          </button>
        </nav>
      </header>

      <main>
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent"></div>

          <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -z-0"></div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left lg:text-left order-2 lg:order-1 animate-slide-in-left">
                <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-8">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-medium">Potenciado por IA Avanzada</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Toda Tu Identidad Visual
                  <br />
                  en Una Sola Plataforma
                </h1>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  Transforma tu negocio con la plataforma todo-en-uno potenciada por IA.
                  Desde páginas web hasta agentes inteligentes, todo lo que necesitas para crecer.
                </p>
                <button
                  onClick={() => setShowCalendar(true)}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Agendar Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="order-1 lg:order-2 animate-slide-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-2xl"></div>
                  <img
                    src="https://thumbs.dreamstime.com/z/futuristic-android-high-tech-urban-environment-sleek-yellow-android-stands-confidently-high-tech-urban-setting-331968402.jpg?w=576"
                    alt="AI Robot Technology"
                    className="relative rounded-3xl shadow-2xl w-full h-auto object-cover animate-glow"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-sm border border-yellow-500/50 rounded-2xl p-6 w-48 animate-float">
                    <div className="flex items-center space-x-3 mb-4">
                      <Brain className="w-8 h-8 text-yellow-400" />
                      <span className="font-bold text-white">IA Activa</span>
                    </div>
                    <p className="text-sm text-gray-300">Procesando datos en tiempo real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Todo Lo Que Necesitas, <span className="text-yellow-400">En Un Solo Lugar</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Herramientas profesionales integradas para llevar tu negocio al siguiente nivel
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Layout className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Páginas Web</h3>
                <p className="text-gray-400 leading-relaxed">
                  Crea páginas web profesionales y responsivas con nuestro constructor inteligente potenciado por IA.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Embudos de Ventas</h3>
                <p className="text-gray-400 leading-relaxed">
                  Diseña embudos de conversión optimizados que convierten visitantes en clientes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Redes Sociales</h3>
                <p className="text-gray-400 leading-relaxed">
                  Gestiona todas tus redes sociales desde un solo panel con programación inteligente.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Publicidad (Ads)</h3>
                <p className="text-gray-400 leading-relaxed">
                  Crea y optimiza campañas publicitarias con asistencia de inteligencia artificial.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">CRM Inteligente</h3>
                <p className="text-gray-400 leading-relaxed">
                  Gestiona tus clientes y prospectos con un CRM potenciado por IA que predice oportunidades.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Automatizaciones IA</h3>
                <p className="text-gray-400 leading-relaxed">
                  Automatiza tareas repetitivas con flujos de trabajo inteligentes que aprenden de tu negocio.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Agentes de IA (Mensajes)</h3>
                <p className="text-gray-400 leading-relaxed">
                  Asistentes virtuales que responden a tus clientes 24/7 por chat y redes sociales.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Agentes de IA (Voz)</h3>
                <p className="text-gray-400 leading-relaxed">
                  Agentes conversacionales por voz que atienden llamadas y gestionan consultas automáticamente.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <div className="bg-yellow-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Analytics Avanzado</h3>
                <p className="text-gray-400 leading-relaxed">
                  Visualiza métricas en tiempo real y obtén insights accionables para tu negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-0"></div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  ¿Por Qué Elegir <span className="text-yellow-400">VelogrowIA</span>?
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  No es solo una herramienta más. Es la plataforma definitiva que unifica todo lo que necesitas
                  para construir y escalar tu presencia digital con el poder de la inteligencia artificial.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Todo Integrado</h4>
                      <p className="text-gray-400">No más herramientas dispersas. Todo funciona perfectamente en conjunto.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Potenciado por IA</h4>
                      <p className="text-gray-400">Inteligencia artificial en cada función para maximizar resultados.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Ahorra Tiempo y Dinero</h4>
                      <p className="text-gray-400">Una sola plataforma, un solo precio. Ahorra hasta 70% vs herramientas separadas.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Escala Sin Límites</h4>
                      <p className="text-gray-400">Desde startup hasta enterprise, crece sin cambiar de plataforma.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-slide-in-right">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-2xl"></div>
                  <img
                    src="https://img.freepik.com/fotos-premium/robot-amarillo_926887-1529.jpg"
                    alt="AI Robot Assistant"
                    className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-yellow-500/10 via-yellow-400/5 to-yellow-500/10 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-0"></div>

          <div className="container mx-auto text-center relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
                Comienza a Crecer Hoy
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Únete a miles de empresas que ya están transformando su presencia digital con VelogrowIA
              </p>
              <button
                onClick={() => setShowCalendar(true)}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-5 rounded-lg font-bold text-xl hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 inline-flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span>Agendar Demo</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-gray-500 text-sm mt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Descubre cómo podemos ayudarte</p>
            </div>

            <div className="mt-12 animate-slide-in-left">
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://t4.ftcdn.net/jpg/05/65/21/77/360_F_565217748_I0UTdJzdgRdc00w0ML5HIEahl7ktzHVt.jpg"
                  alt="AI Technology in Action"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover max-h-96"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-black border-t border-yellow-500/20 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <img src="/diseno_sin_titulo_(12).png" alt="VelogrowIA" className="h-16 mb-4" />
              <p className="text-gray-400 leading-relaxed mb-4">
                La plataforma más potente del mercado para gestionar toda tu identidad visual
                y presencia digital, potenciada por inteligencia artificial.
              </p>
              <a href="tel:3512600722" className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold">
                <Phone className="w-5 h-5" />
                <span>351-260-0722</span>
              </a>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Casos de Uso</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Testimonios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Acerca de</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Soporte</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 VelogrowIA. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Privacidad</a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Términos</a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
