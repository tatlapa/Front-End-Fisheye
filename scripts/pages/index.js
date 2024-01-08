// Importe les différents modules ou fichiers nécessaires
import Api from "../api/api.js"; // Module gérant les requêtes API
import Photographer from "../models/Photographer.js"; // Modèle de données pour les photographes
import PhotographerCard from "../templates/index-photographer.js"; // Template pour la carte d'un photographe

// Crée une nouvelle instance de l'API pour les photographes en utilisant le fichier photographers.json
const photographersApi = new Api("./data/photographers.json");

// Sélectionne la section HTML où seront affichés les photographes
const photographersSection = document.querySelector(".photographer_section");

// Fonction asynchrone pour afficher les photographes
const displayPhotographers = async () => {
  // Récupère les données des photographes depuis l'API
  const photographersData = await photographersApi.get();
  const photographers = photographersData.photographers;

  // Pour chaque photographe dans les données récupérées, crée un objet "Photographer"
  photographers
    .map((photographer) => Photographer(photographer)) // Crée un objet Photographer pour chaque élément de "photographers"
    .forEach((photographer) => {
      // Pour chaque photographe, crée une nouvelle carte de photographe en utilisant le template
      const template = PhotographerCard(photographer);
      const photographerCard = template.createPhotographerCard();

      // Ajoute la carte du photographe à la section HTML dédiée
      photographersSection.appendChild(photographerCard);
    });
};

// Appelle la fonction pour afficher les photographes au chargement de la page
displayPhotographers();
