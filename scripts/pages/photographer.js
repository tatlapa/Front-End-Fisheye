import Api from "../api/api.js"; // Import du module API
import PhotographerHeader from "../templates/photographerHeader.js"; // Import du template de l'en-tête du photographe
import Photographer from "../models/Photographer.js"; // Import du modèle de photographe
import PhotographerMedia from "../templates/photographerMedia.js"; // Import du template des médias du photographe
import Media from "../models/Media.js"; // Import du modèle de média
import FactoryMedia from "../factory/factoryMedia.js"; // Import du factory pour les médias

const photographersApi = new Api("./data/photographers.json"); // Initialisation de l'API des photographes
const photographerId = new URLSearchParams(window.location.search).get("id"); // Récupération de l'ID du photographe depuis l'URL

const getPhotographerById = async () => {
  const { photographers, media } = await photographersApi.get(); // Récupération des données des photographes et des médias depuis l'API

  const photographer = photographers
    .map((photographer) => new Photographer(photographer)) // Création des instances des photographes
    .find((photographer) => photographer.id == photographerId); // Recherche du photographe par son ID

  const medias = media
    .map((media) => new FactoryMedia(media)) // Création des instances des médias
    .filter((media) => media.photographerId == photographerId); // Filtrage des médias par l'ID du photographe

  return { photographer, medias }; // Retourne le photographe et ses médias correspondants
};

const displayProfilePage = async () => {
  const { photographer, medias } = await getPhotographerById(); // Récupération des données du photographe et de ses médias via la fonction asynchrone

  const headerTemplate = new PhotographerHeader(photographer); // Création de l'en-tête du photographe
  headerTemplate.createPhotographerHeader(); // Appel de la méthode pour créer l'en-tête du photographe

  const mediasTemplate = new PhotographerMedia(photographer, medias); // Affichage des médias du photographe
  mediasTemplate.createPhotographerMedia(); // Appel de la méthode pour créer les médias du photographe
};

displayProfilePage(); // Appel initial pour afficher la page
