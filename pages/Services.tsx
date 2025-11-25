import React from 'react';
import { Smartphone, Shirt, BookOpen, Package } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const categories: ServiceItem[] = [
    {
      title: "Matériel Électronique",
      description: "Ordinateurs portables, accessoires téléphoniques, écouteurs, câbles et chargeurs.",
      icon: <Smartphone className="h-10 w-10 text-white" />
    },
    {
      title: "Vêtements et Mode",
      description: "T-shirts stylés, casquettes tendances, baskets confortables et sacs à dos résistants.",
      icon: <Shirt className="h-10 w-10 text-white" />
    },
    {
      title: "Fournitures Scolaires",
      description: "Cahiers, stylos de qualité, blocs-notes pour vos cours et calculatrices scientifiques.",
      icon: <BookOpen className="h-10 w-10 text-white" />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Nos Services & Offres</h1>
          <p className="text-xl text-gray-500">Tout ce dont vous avez besoin pour réussir votre année.</p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="bg-brand-orange p-6 flex justify-center items-center">
                {cat.icon}
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-8 w-8 text-brand-green" />
                <h2 className="text-3xl font-bold text-gray-900">Offres Spéciales de Lancement</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Profitez de nos réductions exclusives et bonus pour vos premiers achats. 
                Nous proposons des <strong>Packs Étudiants</strong> combinant ordinateur et accessoires pour maximiser vos économies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 font-medium">
                <li>Livraison prioritaire gratuite</li>
                <li>Réductions sur les achats groupés</li>
                <li>Cadeau de bienvenue pour les 100 premières commandes</li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-orange rounded-full opacity-20 animate-pulse"></div>
                <img 
                    src="https://picsum.photos/seed/pack/300/300" 
                    alt="Pack Etudiant" 
                    className="relative rounded-lg shadow-md transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;