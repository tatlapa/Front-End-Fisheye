import { displayNumberOfLike } from "../utils/likeContainer.js";
import { displayLightBox } from "../utils/lightBox.js";

export const movementFilter = () => {
  const dropDownContent = document.querySelector(".dropdown_content");
  const btnDropDown = document.querySelector(".btn_drop");

  let isOpen = false;

  btnDropDown.addEventListener("click", () => {
    if (isOpen) {
      dropDownContent.style.display = "none";
      isOpen = false;
    } else {
      dropDownContent.style.display = "flex";
      isOpen = true;
    }
  });
};

// Fonction pour afficher et filtrer les médias en fonction du critère de tri sélectionné
export const displayMediaFilter = (mediasTemplate) => {
  const currentFilter = document.querySelector("#current_filter");
  const allFilters = Array.from(
    document.querySelectorAll(".dropdown_content li button")
  );

  let filterAlreadySelected = allFilters.find(
    (filter) => filter.textContent == currentFilter.textContent
  ); // Recherche du filtre actuel parmi tous les filtres disponibles
  if (filterAlreadySelected) {
    filterAlreadySelected.style.display = "none"; // Masque le filtre déjà sélectionné s'il existe
  }

  allFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      currentFilter.textContent = filter.textContent; // Met à jour le texte du filtre actuel avec celui du filtre sélectionné
      if (filterAlreadySelected) {
        filterAlreadySelected.style.display = "flex"; // Affiche le filtre précédemment sélectionné s'il existe
      }

      filterAlreadySelected = filter; // Met à jour le filtre déjà sélectionné avec le filtre actuel
      filterAlreadySelected.style.display = "none"; // Masque le filtre actuellement sélectionné

      sortByFilter(filter.textContent); // Appelle la fonction de tri en fonction du texte du filtre sélectionné
    });
  });

  const sortByFilter = (filterValue) => {
    switch (filterValue) {
      case "Titre":
        mediasTemplate.medias.sort((a, b) => a.title.localeCompare(b.title)); // Trie les médias par titre
        break;
      case "Popularité":
        mediasTemplate.medias.sort((a, b) => b.likes - a.likes); // Trie les médias par popularité (likes)
        break;
      case "Date":
        mediasTemplate.medias.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ); // Trie les médias par date
        break;
    }

    mediasTemplate.createPhotographerMedia();
    const mediasfiltered = mediasTemplate;
    displayLightBox(mediasfiltered.medias, mediasfiltered.photographer);

    // Ajoutez une vérification avant d'appeler displayNumberOfLike
    if (mediasfiltered.medias && mediasfiltered.medias.length > 0) {
      displayNumberOfLike(mediasfiltered.medias);
    } else {
      console.error("Les données medias sont absentes ou vides.");
    }
  };
};
