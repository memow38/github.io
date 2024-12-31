import React from 'react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          MGR Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Uw betrouwbare partner voor professionele dienstverlening
        </p>
        <Link
          to="contact"
          smooth={true}
          offset={-64}
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
        >
          Neem contact op
        </Link>
      </div>
    </section>
  );
}