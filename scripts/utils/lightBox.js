export const displayLightBox = (medias, photographer) => {
    const lightBoxContainer = document.getElementById('lightbox'); 
    let currentMediaIndex = 0; 

    // Sélectionne tous les éléments pour ouvrir la lightbox
    const openLightBoxes = document.querySelectorAll('.open-light-box');
    openLightBoxes.forEach((openLightBox, index) => {
        openLightBox.addEventListener("click", () => {
            lightBoxContainer.style.display = "flex"; // Affiche la lightbox
            currentMediaIndex = index; // Met à jour l'index du média actuel avec celui cliqué
            displayCurrentMedia(currentMediaIndex, medias, photographer); // Affiche le média actuel
            const btnClose = document.querySelector(".btn_lightBox_close");
            btnClose.focus(); // Définit le focus sur le bouton de fermeture de la lightbox
        });
    });

    const displayCurrentMedia = (index, medias, photographer) => {
        const lightBoxMedia = document.querySelector('.lightBox_media'); // Sélectionne l'élément où afficher les médias
        const currentMedia = medias[index]; // Récupère le média actuel en fonction de l'index
        console.log(medias[index])

        if (currentMedia && (currentMedia.image || currentMedia.video)) {
            while (lightBoxMedia.firstChild) {
                lightBoxMedia.removeChild(lightBoxMedia.firstChild); // Vide le conteneur précédent du média
            }
    
            if (currentMedia.image) {
                const imageElement = document.createElement('img'); 
                imageElement.src = `./assets/media/${photographer.name}/${currentMedia.image}`; 
                imageElement.alt = currentMedia.title; 
                lightBoxMedia.appendChild(imageElement); // Ajoute l'image à la lightbox
            } else if (currentMedia.video) {
                const videoElement = document.createElement('video'); 
                videoElement.src = `./assets/media/${photographer.name}/${currentMedia.video}`; 
                videoElement.alt = currentMedia.title; 
                videoElement.setAttribute('controls', true); 
                videoElement.setAttribute('type', 'video/mp4'); 
                videoElement.innerHTML = "Your browser does not support the video tag."; 
                lightBoxMedia.appendChild(videoElement); // Ajoute la vidéo à la lightbox
            }
    
            const caption = document.createElement('figcaption'); 
            caption.innerHTML = `${currentMedia.title}`; 
            lightBoxMedia.appendChild(caption); // Ajoute la légende à la lightbox
        }
    };

    // Gestion des boutons précédent/suivant dans la lightbox
    const lightBoxPreviousBtn = document.querySelector(".btn_lightBox_previous");
    const lightBoxNextBtn = document.querySelector(".btn_lightBox_next");

    lightBoxPreviousBtn.addEventListener("click", () => {
        currentMediaIndex = (currentMediaIndex - 1 + medias.length) % medias.length; // Met à jour l'index pour afficher le média précédent
        displayCurrentMedia(currentMediaIndex, medias, photographer); // Affiche le média précédent
    });

    lightBoxNextBtn.addEventListener("click", () => {
        currentMediaIndex = (currentMediaIndex + 1) % medias.length; // Met à jour l'index pour afficher le média suivant
        displayCurrentMedia(currentMediaIndex, medias, photographer); // Affiche le média suivant
    });

    // Gestion du bouton de fermeture de la lightbox
    const btnClose = document.querySelector(".btn_lightBox_close");
    btnClose.addEventListener("click", () => {
        lightBoxContainer.style.display = "none"; 
    });
};
