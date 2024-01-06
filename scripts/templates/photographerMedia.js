export default function PhotographerMedia(photographer, medias) {
  const photographerObj = {
    photographer: photographer,
    medias: medias,
    createPhotographerMedia: function () {
      const mediaPhotographer = document.querySelector(".photograph-media");
      let mediaHTML = '';
      
      photographerObj.medias.forEach(media => {

        const mediaElement = media.image 
        ? 
        `<img src="./assets/media/${photographer.name}/${media.image}" class="lightbox-trigger" alt="${media.title}">`
        :
        `<video class="lightbox-trigger">
              <source src="./assets/media/${photographer.name}/${media.video}" type="video/mp4">
              Your browser does not support the video tag.
          </video>
        `
        mediaHTML += `
        <div class="gallery-media">
        <a href="#" class="open-light-box">
        ${mediaElement}
        </a>
        <div class="info-container">
          <h2>${media.title}</h2>
          <div class="like-container">
            <span class="like">${media.likes}</span>
            <button class="btn_like" type="button" aria-label="Like"">
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
