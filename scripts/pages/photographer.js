import Api from "../api/api.js"; // Module gérant les requêtes API
import PhotographerHeader from "../templates/photographerHeader.js"; // Template pour l'en-tête du photographe
import Photographer from "../models/Photographer.js"; // Modèle de données pour un photographe
import PhotographerMedia from "../templates/photographerMedia.js"; // Template pour les médias du photographe
import FactoryMedia from "../factory/factoryMedia.js"; // Factory pour les médias
import { openCloseFormContact, validateForm } from "../utils/contactForm.js"; // Fonctions pour le formulaire de contact
import { displayLightBox } from "../utils/lightBox.js"; // Fonction pour afficher la lightbox
import { displayNumberOfLike } from "../utils/likeContainer.js"; // Fonction pour afficher le nombre de "likes"
import { movementFilter, displayMediaFilter } from "../utils/filter.js"; // Fonctions pour les filtres

// Crée une nouvelle instance de l'API pour les photographes en utilisant le fichier photographers.json
const photographersApi =  Api("./data/photographers.json");

// Récupère l'ID du photographe depuis l'URL actuelle
const photographerId = new URLSearchParams(window.location.search).get("id");

// Fonction asynchrone pour obtenir les données du photographe en fonction de son ID
const getPhotographerById = async () => {
  const { photographers, media } = await photographersApi.get(); // Récupère les données des photographes et des médias depuis l'API

  // Recherche le photographe correspondant à l'ID spécifié dans l'URL
  const photographer = photographers
    .map((photographer) => Photographer(photographer)) // Crée des instances des photographes
    .find((photographer) => photographer.id == photographerId); // Recherche du photographe par son ID

  // Filtrage des médias pour obtenir ceux liés au photographe spécifique via son ID
  const medias = media
    .map((media) => FactoryMedia(media)) // Crée des instances des médias
    .filter((media) => media.photographerId == photographerId); // Filtrage des médias par l'ID du photographe
  return { photographer, medias }; // Retourne le photographe et ses médias

};

// Fonction pour afficher la page de profil du photographe
const displayProfilePage = async () => {
  const { photographer, medias } = await getPhotographerById(); // Récupère les données du photographe et de ses médias via la fonction asynchrone

  const headerTemplate = PhotographerHeader(photographer); 
  headerTemplate.createPhotographerHeader(); 

  const mediasTemplate = PhotographerMedia(photographer, medias); 
  mediasTemplate.createPhotographerMedia(); 

  // Appels aux différentes fonctions/utilitaires pour gérer des fonctionnalités spécifiques
  openCloseFormContact(photographer); 
  validateForm(); 
  displayLightBox(medias, photographer); 
  displayNumberOfLike(medias); 
  movementFilter(); 
  displayMediaFilter(mediasTemplate); 
};

displayProfilePage(); 
