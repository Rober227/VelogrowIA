import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface AuditFormProps {
  onSuccess?: () => void;
}

export const AuditForm = ({ onSuccess }: AuditFormProps) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const fieldName = id.replace('audit-', '');
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const webhookUrl = 'https://roberfigueroa.app.n8n.cloud/webhook/form-webhook';

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Error al enviar:', err);
      setError('Error de conexión. Intenta de nuevo.');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={64} className="text-neon-green mx-auto mb-5" />
        <h3 className="text-2xl font-bold text-white mb-3">¡Solicitud Recibida!</h3>
        <p className="text-white mt-3">Gracias por tu interés. Nos pondremos en contacto contigo muy pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-center mb-7 text-gray-300">Completa el formulario para comenzar tu transformación digital.</p>

      <div className="mb-5">
        <label className="font-tech text-neon-green mb-2 block text-sm uppercase tracking-widest">Nombre Completo</label>
        <input
          type="text"
          id="audit-nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full px-4 py-4 bg-black/30 border border-gray-700 text-white font-body text-base rounded transition-all outline-none focus:border-neon-green focus:shadow-lg focus:shadow-neon-green/30 focus:bg-black/50"
          placeholder="Ej. Juan Pérez"
          required
        />
      </div>

      <div className="mb-5">
        <label className="font-tech text-neon-green mb-2 block text-sm uppercase tracking-widest">Correo Electrónico</label>
        <input
          type="email"
          id="audit-email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-4 bg-black/30 border border-gray-700 text-white font-body text-base rounded transition-all outline-none focus:border-neon-green focus:shadow-lg focus:shadow-neon-green/30 focus:bg-black/50"
          placeholder="juan@empresa.com"
          required
        />
      </div>

      <div className="mb-5">
        <label className="font-tech text-neon-green mb-2 block text-sm uppercase tracking-widest">Número de Teléfono</label>
        <input
          type="tel"
          id="audit-telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full px-4 py-4 bg-black/30 border border-gray-700 text-white font-body text-base rounded transition-all outline-none focus:border-neon-green focus:shadow-lg focus:shadow-neon-green/30 focus:bg-black/50"
          placeholder="+34 600 123 4567"
          required
        />
      </div>

      <div className="mb-5">
        <label className="font-tech text-neon-green mb-2 block text-sm uppercase tracking-widest">Empresa a Automatizar</label>
        <input
          type="text"
          id="audit-empresa"
          value={formData.empresa}
          onChange={handleChange}
          className="w-full px-4 py-4 bg-black/30 border border-gray-700 text-white font-body text-base rounded transition-all outline-none focus:border-neon-green focus:shadow-lg focus:shadow-neon-green/30 focus:bg-black/50"
          placeholder="Nombre de tu empresa"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-5">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-4 bg-transparent border-2 border-neon-green text-neon-green font-display text-lg font-bold uppercase cursor-pointer transition-all tracking-widest rounded disabled:opacity-50 hover:bg-neon-green hover:text-black hover:shadow-lg hover:shadow-neon-green"
      >
        {loading ? 'ENVIANDO...' : 'Enviar Solicitud'}
      </button>
    </form>
  );
};
