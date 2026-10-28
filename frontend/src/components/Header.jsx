import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-hotel-dark/95 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wider text-hotel-gold">HOTEL</span>
          <span className="text-2xl font-light tracking-widest text-white">SALTA</span>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider">
          <a href="#inicio" className="hover:text-hotel-gold transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-hotel-gold transition-colors">El Hotel</a>
          <a href="#habitaciones" className="hover:text-hotel-gold transition-colors">Habitaciones</a>
          <a href="#contacto" className="hover:text-hotel-gold transition-colors">Contacto</a>
        </nav>

        <a 
          href="#habitaciones" 
          className="bg-hotel-gold hover:bg-hotel-goldLight text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-md"
        >
          Reservar Ahora
        </a>
      </div>
    </header>
  );
};

export default Header;