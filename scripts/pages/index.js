//fonction pour récupérer les data du json et vérifier les erreurs
async function getPhotographers() {
  const photographer = await fetch("../../data/photographers.json")
    // promesse => réponse
    .then((data) => data.json());
  return photographer;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
