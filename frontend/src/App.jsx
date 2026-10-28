import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutHotel from './components/AboutHotel';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutHotel />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;