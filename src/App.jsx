import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}