import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel intelligent de "CAMPUS MARKET", une boutique en ligne pour les étudiants en Côte d'Ivoire.
Ta mission est d'aider les étudiants à trouver des produits, expliquer nos services et répondre aux questions basées sur le Business Plan suivant :

- **Résumé** : Boutique en ligne pour étudiants (universités/grandes écoles CI). Produits essentiels (électronique, vêtements, fournitures).
- **Localisation** : Zone de livraison principale à UTT LOKO et environs.
- **Avantages** : Prix compétitifs, livraison gratuite sur le campus, paiement à la livraison.
- **Produits** :
    - Électronique : Ordinateurs portables, accessoires téléphone, écouteurs, câbles.
    - Mode : T-shirts, casquettes, baskets, sacs.
    - Scolaire : Cahiers, stylos, blocs-notes, calculatrices.
- **Logistique** : Commandes via WhatsApp au 01 53 70 71 87, livraison horaires fixes sur campus.
- **Ton** : Jeune, dynamique, serviable, et professionnel.
- **Devise** : FCFA.

Si on te demande comment commander, explique qu'il suffit de cliquer sur les boutons "Commander" pour nous écrire directement sur WhatsApp au 01 53 70 71 87.
Réponds toujours de manière concise et utile pour un étudiant pressé.
`;

let aiClient: GoogleGenAI | null = null;

export const getAiClient = (): GoogleGenAI => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], message: string): Promise<string> => {
  try {
    const ai = getAiClient();
    
    // Using generateContent with systemInstruction for a single turn or managing chat state manually is robust
    // Here we act as a chat by providing context + history if needed, but for simplicity in this stateless service wrapper:
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })), // Previous context
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Désolé, je n'ai pas pu traiter votre demande pour le moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec le serveur. Veuillez réessayer plus tard.";
  }
};