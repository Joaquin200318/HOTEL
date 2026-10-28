import React from 'react';
import RoomCard from './RoomCard';

const Booking = () => {
  const habitaciones = [
    {
      id: 1,
      titulo: "Habitación Standard King",
      precio: 120,
      capacidad: "2 Huéspedes",
      imagen: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
      descripcion: "Espacio funcional e insonorizado con cama King Size, escritorio ergonómico y Smart TV 55\"."
    },
    {
      id: 2,
      titulo: "Suite Ejecutiva Deluxe",
      precio: 195,
      capacidad: "2 Huéspedes",
      imagen: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      descripcion: "Vista panorámica a la ciudad, sala de estar independiente, cafetera espresso e hidromasaje."
    },
    {
      id: 3,
      titulo: "Family Terrace Suite",
      precio: 260,
      capacidad: "4 Huéspedes",
      imagen: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      descripcion: "Dos ambientes conectados con terraza privada, desayuno buffet incluido y acceso directo al área de piscina."
    },
    {
      id: 4,
      titulo: "Penthouse Presidencial",
      precio: 450,
      capacidad: "Hasta 4 Huéspedes",
      imagen: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
      descripcion: "Máximo lujo en el último piso. Jacuzzi climatizado en terraza privada, cava seleccionada y atención 24/7."
    }
  ];

  return (
    <section id="habitaciones" className="py-20 bg-hotel-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-hotel-gold font-bold uppercase tracking-widest text-xs">
            Alojamiento Exclusivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-hotel-dark mt-2 mb-4">
            Nuestras Habitaciones y Suites
          </h2>
          <p className="text-slate-600">
            Selecciona la categoría que mejor se adapte a tu viaje. Todas las tarifas incluyen desayuno continental y acceso al Spa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RoomCard 
            titulo={habitaciones[0].titulo}
            precio={habitaciones[0].precio}
            imagen={habitaciones[0].imagen}
            capacidad={habitaciones[0].capacidad}
            descripcion={habitaciones[0].descripcion}
          />
          <RoomCard 
            titulo={habitaciones[1].titulo}
            precio={habitaciones[1].precio}
            imagen={habitaciones[1].imagen}
            capacidad={habitaciones[1].capacidad}
            descripcion={habitaciones[1].descripcion}
          />
          <RoomCard 
            titulo={habitaciones[2].titulo}
            precio={habitaciones[2].precio}
            imagen={habitaciones[2].imagen}
            capacidad={habitaciones[2].capacidad}
            descripcion={habitaciones[2].descripcion}
          />
          <RoomCard 
            titulo={habitaciones[3].titulo}
            precio={habitaciones[3].precio}
            imagen={habitaciones[3].imagen}
            capacidad={habitaciones[3].capacidad}
            descripcion={habitaciones[3].descripcion}
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;