export default function PhotographerHeader(photographer) {
  return {
    createPhotographerHeader: function () {
      const profilePageHeader = document.querySelector(".photograph-header ");
      const about = `
        <div class="container">
          <h1 class="name">${photographer.name}</h1>
          <p class="location">${photographer.city}, ${photographer.country}</p>
          <p class="tagline">${photographer.tagline}</p>    
        </div>
        <button class="btn contact_button" type="button" aria-label="Open contact form">Contactez-moi</button>
        <img src="./assets/photographers/${photographer.portrait}" alt="${photographer.name}">
      `;
      profilePageHeader.innerHTML = about;
      return about;
    },
  };
}

