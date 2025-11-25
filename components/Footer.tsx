import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-orange">CAMPUS MARKET</h3>
            <p className="text-gray-400 text-sm">
              La boutique en ligne n°1 pour les étudiants en Côte d'Ivoire. 
              Économisez du temps et de l'argent.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#/" className="hover:text-white">Accueil</a></li>
              <li><a href="#/services" className="hover:text-white">Offres</a></li>
              <li><a href="#/gallery" className="hover:text-white">Galerie</a></li>
              <li><a href="#/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Abidjan, Côte d'Ivoire</li>
              <li>Zone UTT LOKO</li>
              <li>WhatsApp: 01 53 70 71 87</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex justify-center items-center gap-1">
          <p>&copy; {new Date().getFullYear()} Campus Market.</p>
          <span className="hidden sm:inline">Fait avec</span>
          <Heart className="h-3 w-3 text-red-500 hidden sm:inline" />
          <span className="hidden sm:inline">pour les étudiants.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;