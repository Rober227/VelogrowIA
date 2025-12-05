import { Calendar as CalendarIcon, Clock, ArrowLeft, Phone } from 'lucide-react';
import { useState } from 'react';

interface CalendarProps {
  onBack: () => void;
}

function Calendar({ onBack }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo agendado:', { ...formData, date: selectedDate, time: selectedTime });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/diseno_sin_titulo_(12).png" alt="VelogrowIA" className="h-20" />
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:3512600722" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">351-260-0722</span>
            </a>
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 rounded-full mb-6">
              <CalendarIcon className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Agenda Tu Demo
            </h1>
            <p className="text-gray-400 text-lg">
              Selecciona el día y hora que mejor te convenga
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-yellow-500/20 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Fecha de la Demo
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-black/40 border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Hora de la Demo
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                            : 'bg-black/40 border border-yellow-500/30 text-gray-300 hover:border-yellow-500/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/40 border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black/40 border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Tu número de teléfono"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Mensaje (Opcional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Clock className="w-5 h-5" />
                  <span>Confirmar Demo</span>
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">¿Prefieres hablar con nosotros ahora?</p>
            <a
              href="tel:3512600722"
              className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>351-260-0722</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Calendar;
