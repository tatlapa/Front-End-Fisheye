export const displayLightBox = (medias, photographer) => {
    const lightBoxContainer = document.getElementById('lightbox');
    let currentMediaIndex = 0; 

    // Sélectionne tous les éléments ayant la classe '.open-light-box'
    const openLightBoxes = document.querySelectorAll('.open-light-box');
    openLightBoxes.forEach((openLightBox, index) => {
        // Ajoute un écouteur de clic à chaque élément '.open-light-box'
        openLightBox.addEventListener("click", () => {
            // Lorsqu'un élément est cliqué, affiche la lightbox et met à jour l'index du média actuel
            lightBoxContainer.style.display = "flex";
            currentMediaIndex = index; 
            // Appelle la fonction pour afficher le média correspondant à l'index actuel
            displayCurrentMedia(currentMediaIndex, medias, photographer); 
        });
    });

    // Ferme la lightbox lorsqu'on clique sur le bouton de fermeture
    const btnClose = document.querySelector(".btn_lightBox_close");
    btnClose.addEventListener("click", () => {
        lightBoxContainer.style.display = "none";
    });


    // Fonction pour afficher le média correspondant à l'index donné
    const displayCurrentMedia = (index, medias, photographer) => {
        const lightBoxMedia = document.querySelector('.lightBox_media');
        const currentMedia = medias[index]; // Récupère le média correspondant à l'index
    
        // Vérifie si currentMedia est défini et s'il a la propriété 'image'
        if (currentMedia && currentMedia.image || currentMedia.video) {
            // Nettoie le contenu précédent de la lightbox
            while (lightBoxMedia.firstChild) {
                lightBoxMedia.removeChild(lightBoxMedia.firstChild);
            }
    
            // Ajoute le contenu du média à la lightbox en fonction de son type (image ou vidéo)
            if (currentMedia.image) {
                const imageElement = document.createElement('img');
                imageElement.src = `./assets/media/${photographer.name}/${currentMedia.image}`;
                imageElement.alt = currentMedia.title;
                lightBoxMedia.appendChild(imageElement);
            } else if (currentMedia.video) {
                const videoElement = document.createElement('video');
                videoElement.src = `./assets/media/${photographer.name}/${currentMedia.video}`;
                videoElement.setAttribute('controls', true);
                videoElement.setAttribute('type', 'video/mp4');
                videoElement.innerHTML = "Your browser does not support the video tag.";
                lightBoxMedia.appendChild(videoElement);
            }
    
            const caption = document.createElement('figcaption');
            caption.innerHTML = `${currentMedia.title}`;
            lightBoxMedia.appendChild(caption);
        }
    };
    


    //slider 

    const lightBoxPreviousBtn = document.querySelector(".btn_lightBox_previous");
    const lightBoxNextBtn = document.querySelector(".btn_lightBox_next");

    lightBoxPreviousBtn.addEventListener("click", () => {
        currentMediaIndex = (currentMediaIndex - 1 + medias.length) % medias.length;
        displayCurrentMedia(currentMediaIndex, medias, photographer);
    });

    lightBoxNextBtn.addEventListener("click", () => {
        currentMediaIndex = (currentMediaIndex + 1) % medias.length;
        displayCurrentMedia(currentMediaIndex, medias, photographer);
    });
};