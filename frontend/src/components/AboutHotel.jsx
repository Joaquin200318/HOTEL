import React from 'react';

const AboutHotel = () => {
  const features = [
    { title: "Spa & Wellness", desc: "Circuito hidrotermal, saunas secos y tratamientos relajantes." },
    { title: "Gastronomía de Autor", desc: "Restaurante internacional con cava exclusiva y productos orgánicos." },
    { title: "Conectividad Total", desc: "Fibra óptica de alta velocidad y espacios de coworking insonorizados." }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-hotel-gold font-bold uppercase tracking-widest text-xs">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-hotel-dark mt-2 mb-6">
              Hospitalidad de lujo pensada para el viajero moderno
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              En <strong>Hotel Salta</strong> fusionamos la calidez de la hospitalidad clásica con infraestructura de vanguardia. Cada rincón ha sido proyectado para ofrecer privacidad, confort acústico y una experiencia sensorial única.
            </p>
            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="border-l-4 border-hotel-gold pl-4 py-1">
                  <h3 className="font-bold text-hotel-dark text-lg">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
              alt="Piscina del Hotel" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" 
              alt="Interior Suite" 
              className="rounded-lg shadow-md h-64 w-full object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHotel;