import React from 'react';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative h-[85vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-hotel-dark via-hotel-dark/40 to-transparent" />

      <div className="relative z-10 text-center max-w-4xl px-4">
        <span className="uppercase tracking-[0.3em] text-hotel-goldLight text-sm font-semibold block mb-4">
          Experiencia Cinco Estrellas
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          El arte del descanso y la elegancia en cada detalle
        </h1>
        <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
          Descubre un refugio de arquitectura contemporánea, gastronomía de autor y vistas inigualables diseñado para estadías inolvidables.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#habitaciones" 
            className="bg-hotel-gold hover:bg-hotel-goldLight text-white px-8 py-4 rounded-md font-semibold text-base transition-all shadow-lg"
          >
            Explorar Suites
          </a>
          <a 
            href="#nosotros" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-base transition-all"
          >
            Conocer Servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;