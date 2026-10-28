import React from 'react';

const RoomCard = ({ titulo, precio, imagen, capacidad, descripcion }) => {
  const handleSelectRoom = () => {
    alert(`Has seleccionado: ${titulo} ($${precio} USD / noche). Dirígete al formulario inferior para confirmar disponibilidad.`);
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imagen} 
          alt={titulo} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 right-3 bg-hotel-dark/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {capacidad}
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-hotel-dark mb-2">{titulo}</h3>
          <p className="text-slate-500 text-sm mb-4 line-clamp-2">
            {descripcion}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block uppercase">Tarifa por noche</span>
            <span className="text-2xl font-extrabold text-hotel-gold">${precio}</span>
            <span className="text-xs text-slate-500"> USD</span>
          </div>

          <button 
            onClick={handleSelectRoom}
            className="bg-hotel-dark hover:bg-slate-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
          >
            Reservar
          </button>
        </div>
      </div>
    </article>
  );
};

export default RoomCard;