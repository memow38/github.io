import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} MGR Services. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}