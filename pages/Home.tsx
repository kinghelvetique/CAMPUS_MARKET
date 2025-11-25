import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, DollarSign, Clock, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/campus1/1920/1080"
            alt="Students on campus"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Votre Marché <span className="text-brand-orange">Universitaire</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            Électronique, Mode, et Fournitures Scolaires. Livré gratuitement directement sur votre campus en Côte d'Ivoire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="px-8 py-3 rounded-full bg-brand-orange text-white font-bold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Voir les Offres
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 rounded-full bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-gray-900 transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi choisir Campus Market ?</h2>
            <p className="mt-4 text-gray-500">Conçu par des étudiants, pour les étudiants.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Truck className="h-8 w-8 text-brand-orange" />}
              title="Livraison Gratuite"
              description="Directement sur le campus. Plus besoin de vous déplacer."
            />
            <FeatureCard
              icon={<DollarSign className="h-8 w-8 text-brand-orange" />}
              title="Prix Étudiants"
              description="Tarifs négociés pour s'adapter à votre budget."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-8 w-8 text-brand-orange" />}
              title="Paiement à la livraison"
              description="Payez uniquement quand vous recevez votre commande."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-brand-orange" />}
              title="Service Rapide"
              description="Livraison organisée à des horaires fixes adaptés à vos cours."
            />
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Prêt à commander ?</h2>
                <p className="text-gray-600">Rejoignez des centaines d'étudiants satisfaits aujourd'hui.</p>
            </div>
            <Link to="/contact" className="px-8 py-3 rounded-lg bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors">
                Nous Contacter
            </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;