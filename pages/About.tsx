import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">À Propos de Nous</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Campus Market révolutionne la façon dont les étudiants ivoiriens consomment.
          </p>
        </div>

        {/* Executive Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="prose prose-lg text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h2>
            <p className="mb-4">
              CAMPUS MARKET est une boutique en ligne innovante destinée exclusivement aux étudiants des universités et grandes écoles en Côte d'Ivoire.
            </p>
            <p className="mb-4">
              L’objectif principal est de fournir des produits essentiels (électronique, vêtements, et fournitures scolaires) à des prix compétitifs, avec une livraison gratuite directement sur le campus, afin de répondre aux besoins spécifiques des étudiants.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
             <img src="https://picsum.photos/seed/abidjan/800/600" alt="University Campus" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-brand-orange" />
              <h3 className="text-xl font-bold text-gray-900">Objectif Principal</h3>
            </div>
            <p className="text-gray-700">
              Faciliter l’accès des étudiants à des produits indispensables, via un service rapide, économique et pratique, réduisant ainsi le temps et les frais liés aux déplacements hors campus.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
             <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Notre Cible</h3>
            </div>
            <p className="text-gray-700">
              Étudiants inscrits dans les universités et grandes écoles ivoiriennes, recherchant une solution simple et fiable pour se procurer leurs articles du quotidien.
            </p>
          </div>

           <div className="bg-green-50 p-8 rounded-xl border border-green-100">
             <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-brand-green" />
              <h3 className="text-xl font-bold text-gray-900">Perspectives</h3>
            </div>
            <p className="text-gray-700">
               Mise en place d’un programme de fidélité et développement futur d’une application mobile pour améliorer l’expérience client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;