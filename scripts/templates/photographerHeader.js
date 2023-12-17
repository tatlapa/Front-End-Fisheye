export default function PhotographerHeader(photographer) {
  return {
    createPhotographerHeader: function() {
      const profilePageHeader = document.querySelector(".photograph-header ");
      const formName = document.querySelector(".modal");
      formName.textContent = photographer.name;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.content = `Découvrez ${photographer.name}, photographe professionnel basé à ${photographer.city}, ${photographer.country} offrant ses services à partir de ${photographer.price} € / jour.`;
      }
      const about = `
        <div class="container">
          <h1 class="name">${photographer.name}</h1>
          <p class="location">${photographer.city}, ${photographer.country}</p>
          <p class="tagline">${photographer.tagline}</p>    
        </div>
        <button class="btn btn_cta" type="button" aria-label="Open contact form">Contactez-moi</button>
        <img src="./assets/photographers/${photographer.portrait}" alt="${photographer.name}">
      `;
      profilePageHeader.innerHTML = about;
      return about;
    }
  };
}
