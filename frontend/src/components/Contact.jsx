import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg('Enviando consulta...');

    try {
      const response = await fetch('http://localhost:3001/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatusMsg('¡Consulta recibida y guardada en SQLite con éxito!');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        setStatusMsg('Hubo un problema al enviar los datos.');
      }
    } catch (error) {
      setStatusMsg('No se pudo conectar con el servidor Backend (Puerto 3001).');
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-hotel-gold font-bold uppercase tracking-widest text-xs">
            Atención Personalizada
          </span>
          <h2 className="text-3xl font-bold text-hotel-dark mt-2">
            Contáctanos o Solicita una Reserva Especial
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-hotel-sand p-8 rounded-xl shadow-sm border border-slate-200 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre Completo</label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-hotel-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-hotel-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Mensaje o Fechas de Estadía</label>
            <textarea
              name="mensaje"
              rows="4"
              required
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Indícanos las fechas deseadas o cualquier requerimiento especial..."
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-hotel-gold"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-hotel-gold hover:bg-hotel-goldLight text-white font-bold py-3.5 rounded-lg transition-colors shadow-md"
          >
            Enviar Consulta
          </button>

          {statusMsg && (
            <p className="text-center text-sm font-medium text-hotel-dark bg-amber-50 p-3 rounded-lg border border-amber-200">
              {statusMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;