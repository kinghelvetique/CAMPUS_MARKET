import React, { useState } from 'react';
import { Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const WHATSAPP_NUMBER = "2250758002777";

  const handleWhatsAppRedirect = (text?: string) => {
      const message = text ? encodeURIComponent(text) : "";
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour, je m'appelle ${formData.name}. ${formData.message}`;
    handleWhatsAppRedirect(text);
    setFormData({ name: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-500">
            Une question ? Une commande ? Écrivez-nous directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-brand-orange">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nos Coordonnées</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">WhatsApp & Appels</h3>
                  <p className="mt-1 text-gray-500">
                    Pour une réponse rapide et passer commande.
                  </p>
                  <p className="mt-1 font-bold text-brand-orange text-lg">01 53 70 71 87</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Zone de Livraison</h3>
                  <p className="mt-1 text-gray-500">
                    UTT LOKO et environs.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
                <button 
                    onClick={() => handleWhatsAppRedirect("Bonjour, je souhaite avoir des informations.")}
                    className="w-full flex justify-center items-center gap-2 px-6 py-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                    <MessageCircle className="h-6 w-6" />
                    Discuter sur WhatsApp
                </button>
            </div>
          </div>

          {/* Contact Form - Linked to WhatsApp */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez un message rapide</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-orange focus:border-brand-orange"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-orange focus:border-brand-orange"
                  placeholder="Bonjour, je voudrais commander..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
              >
                <Send className="h-5 w-5" />
                Envoyer sur WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;