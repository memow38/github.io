import React from 'react';

const services = [
  {
    title: 'Service 1',
    description: 'Professionele dienstverlening op maat'
  },
  {
    title: 'Service 2',
    description: 'Betrouwbare en snelle service'
  },
  {
    title: 'Service 3',
    description: 'Kwaliteit en expertise'
  }
];

export default function Services() {
  return (
    <section id="diensten" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Onze Diensten</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}