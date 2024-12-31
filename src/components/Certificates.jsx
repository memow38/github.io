import React from 'react';

const certificates = [
  {
    title: 'VCA Gecertificeerd',
    description: 'Veiligheid staat bij ons voorop'
  },
  {
    title: 'Erkend Installateur',
    description: 'Aangesloten bij brancheorganisaties'
  },
  {
    title: 'ISO 9001',
    description: 'Gecertificeerd kwaliteitsmanagementsysteem'
  }
];

export default function Certificates() {
  return (
    <section id="certificaten" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Certificeringen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-4xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}