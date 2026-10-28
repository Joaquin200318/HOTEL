import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-hotel-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl font-bold tracking-wider text-hotel-gold">HOTEL</span>
            <span className="text-xl font-light tracking-widest text-white">SALTA</span>
          </div>
          <p className="text-xs text-slate-500">
            Av. Libertador 4500 · Recepción 24 Horas · Tel: +54 (011) 4555-0199
          </p>
        </div>

        <div className="text-xs text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Hotel Salta. Todos los derechos reservados.</p>
          <p className="text-slate-600 mt-1">Arquitectura Monorepo: React + Tailwind CSS | Node.js + SQLite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;