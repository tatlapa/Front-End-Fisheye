import Api from "../api/api.js";
import Photographer from "../models/Photographer.js";
import PhotographerCard from "../templates/index-photographer.js";

const photographersApi = new Api("./data/photographers.json");
const photographersSection = document.querySelector(".photographer_section");

const displayPhotographers = async () => {
  const photographersData = await photographersApi.get();
  const photographers = photographersData.photographers;

  photographers
    .map((photographer) => new Photographer(photographer))
    .forEach((photographer) => {
      const template = new PhotographerCard(photographer);
      const photographerCard = template.createPhotographerCard();
      photographersSection.appendChild(photographerCard);
    });
};

displayPhotographers();
