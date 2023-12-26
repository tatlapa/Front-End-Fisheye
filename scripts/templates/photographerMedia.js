export default function PhotographerMedia(photographer, medias) {
  const photographerObj = {
    photographer: photographer,
    medias: medias,
    createPhotographerMedia: function () {
      const mediaPhotographer = document.querySelector(".photograph-media");
      let mediaHTML = '';
      
      photographerObj.medias.forEach(media => {
        mediaHTML += `
        <div class="gallery-media">
        <a>
        <img src="./assets/media/${photographer.name}/${media.image}" alt="${name}"></img>
        </a>
        <div class="info-container">
          <h2>${media.title}</h2>
          <div class="like-container">
            <span class="like">${media.likes}</span>
            <button class="btn_like" type="button" aria-label="Like" data-id="${media.id}">
              <span class="fas fa-heart" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        
      </div>
      
        `;
      });
      
      mediaPhotographer.innerHTML = mediaHTML;
      return mediaHTML;
    }
  };
  
  return photographerObj;
}
