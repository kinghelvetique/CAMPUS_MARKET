import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';

const Gallery: React.FC = () => {
  // Products updated with images relevant to the description
  // Using loremflickr with locks to ensure stability and relevance
  const products: Product[] = [
    { 
        id: 1, 
        name: "HP Laptop 15", 
        category: "Électronique", 
        price: "150,000 FCFA", 
        image: "https://loremflickr.com/400/300/laptop,computer?lock=1", 
        description: "Idéal pour les projets académiques et recherches." 
    },
    { 
        id: 2, 
        name: "Casque Bluetooth", 
        category: "Électronique", 
        price: "15,000 FCFA", 
        image: "https://loremflickr.com/400/300/headphones,audio?lock=2", 
        description: "Concentration maximale pour vos révisions." 
    },
    { 
        id: 3, 
        name: "Sac à dos Campus", 
        category: "Mode", 
        price: "10,000 FCFA", 
        image: "https://loremflickr.com/400/300/backpack,student?lock=3", 
        description: "Robuste, spacieux et stylé pour les cours." 
    },
    { 
        id: 4, 
        name: "Pack Cahiers (x5)", 
        category: "Scolaire", 
        price: "5,000 FCFA", 
        image: "https://loremflickr.com/400/300/notebook,paper?lock=4", 
        description: "Le nécessaire pour toutes vos matières." 
    },
    { 
        id: 5, 
        name: "Sneakers Urban", 
        category: "Mode", 
        price: "25,000 FCFA", 
        image: "https://loremflickr.com/400/300/sneakers,shoes?lock=5", 
        description: "Confort pour la marche quotidienne sur le campus." 
    },
    { 
        id: 6, 
        name: "Clé USB 64GB", 
        category: "Électronique", 
        price: "7,000 FCFA", 
        image: "https://loremflickr.com/400/300/usb,flashdrive?lock=6", 
        description: "Sauvegardez vos thèses et exposés en sécurité." 
    },
  ];

  const handleOrder = (product: Product) => {
    const message = `Bonjour, je suis intéressé par le produit : ${product.name} à ${product.price}. Est-il disponible ?`;
    const url = `https://wa.me/2250153707187?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Galerie de Produits</h1>
          <p className="text-gray-500">Commandez directement via WhatsApp en cliquant sur les articles.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden relative h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                    {product.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xl font-bold text-brand-orange">{product.price}</span>
                  <button 
                    onClick={() => handleOrder(product)}
                    className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 shadow-md transform active:scale-95"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl shadow-inner">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Vous ne trouvez pas ce que vous cherchez ?</h3>
            <p className="text-gray-600 mb-6">
                Nous avons accès à un large stock. Contactez-nous pour une commande personnalisée.
            </p>
            <button 
                onClick={() => window.open(`https://wa.me/2250153707187?text=${encodeURIComponent("Bonjour, je recherche un produit spécifique...")}`, '_blank')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-orange bg-orange-100 hover:bg-orange-200 transition-colors"
            >
                Demande Spécifique
            </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;