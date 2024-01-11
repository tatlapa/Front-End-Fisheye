export const displayLightBox = (medias, photographer) => {

    const lightBoxContainer = document.getElementById('lightbox'); 
    let currentMediaIndex = 0; 
    console.log(medias)
    // Sélectionne tous les éléments pour ouvrir la lightbox
    const openLightBoxes = document.querySelectorAll('.open-light-box');
    openLightBoxes.forEach((openLightBox, index) => {
        openLightBox.addEventListener("click", (event) => {
            let mediaUrl = event.currentTarget.querySelector('.lightbox-trigger');
            let mediaType = null;

            if (mediaUrl) {
                if (mediaUrl.tagName.toLowerCase() === 'img') {
                  mediaType = "img";
                }
                else if (mediaUrl.tagName.toLowerCase() === 'video') {
                    mediaUrl = event.currentTarget.querySelector('.lightbox-trigger source'); 
                    mediaType = "video";
                }
            }
            const mediaText = openLightBox.dataset.text;
            lightBoxContainer.style.display = "flex"; // Affiche la lightbox
            currentMediaIndex = index; // Met à jour l'index du média actuel avec celui cliqué
            console.log(currentMediaIndex)
            displayCurrentMedia(mediaType, mediaUrl.src, mediaText); // Affiche le média actuel
            const btnClose = document.querySelector(".btn_lightBox_close");
            btnClose.focus(); // Définit le focus sur le bouton de fermeture de la lightbox
        });
    });

    const displayCurrentMedia = (mediaType, mediaUrl, mediaText) => {
        const lightBoxMedia = document.querySelector('.lightBox_media'); // Sélectionne l'élément où afficher les médias

        if (mediaUrl) {
            while (lightBoxMedia.firstChild) {
                lightBoxMedia.removeChild(lightBoxMedia.firstChild); // Vide le conteneur précédent du média
            }
            if (mediaType == "img") {
             
                const imageElement = document.createElement('img'); 
                imageElement.src = mediaUrl; 
                imageElement.alt = mediaText; 
                lightBoxMedia.appendChild(imageElement); // Ajoute l'image à la lightbox
            } else if (mediaType == "video") {
             
                const videoElement = document.createElement('video') 
                videoElement.src = mediaUrl; 
                videoElement.alt = mediaText; 
                videoElement.setAttribute('controls', true); 
                videoElement.setAttribute('type', 'video/mp4');  
                lightBoxMedia.appendChild(videoElement); // Ajoute la vidéo à la lightbox
            }
            const caption = document.createElement('figcaption'); 
            caption.innerHTML = `${mediaText}`; 
            lightBoxMedia.appendChild(caption); // Ajoute la légende à la lightbox
        }
    };

    // Gestion des boutons précédent/suivant dans la lightbox
    const lightBoxPreviousBtn = document.querySelector(".btn_lightBox_previous");
    const lightBoxNextBtn = document.querySelector(".btn_lightBox_next");

    lightBoxPreviousBtn.addEventListener("click", () => {

        currentMediaIndex = (currentMediaIndex - 1 + medias.length) % medias.length; // Met à jour l'index pour afficher le média précédent
        console.log(currentMediaIndex)
        
        if (medias[currentMediaIndex]) {
            const mediaType = medias[currentMediaIndex]?.image ? 'img' : 'video';
            const media = medias[currentMediaIndex]?.image ? medias[currentMediaIndex]?.image : medias[currentMediaIndex]?.video;
            const mediaText = medias[currentMediaIndex]?.title;
            const mediaUrl = `./assets/media/${photographer && photographer.name}/${media}`;
            const currentElementId = medias[currentMediaIndex].id;
            const selector = `.gallery-media[data-id="${currentElementId}"]`;
            const currentElement = document.querySelector(selector);
            const previousOpenLightbox = findPreviousOpenLightbox(currentElement);
            console.log(previousOpenLightbox);
            displayCurrentMedia(mediaType, mediaUrl, mediaText); // Affiche le média précédent
        } 
    });
    

    lightBoxNextBtn.addEventListener("click", () => {

        currentMediaIndex = (currentMediaIndex + 1) % medias.length; // Met à jour l'index pour afficher le média suivant
        console.log(currentMediaIndex)
        
        if (medias[currentMediaIndex]) {
            const mediaType = medias[currentMediaIndex]?.image ? 'img' : 'video';
            const media = medias[currentMediaIndex]?.image ? medias[currentMediaIndex]?.image : medias[currentMediaIndex]?.video;
            const mediaText = medias[currentMediaIndex]?.title;
            const mediaUrl = `./assets/media/${photographer && photographer.name}/${media}`;
            const currentElementId = medias[currentMediaIndex].id;
            const selector = `.gallery-media[data-id="${currentElementId}"]`;
            const currentElement = document.querySelector(selector);
            const nextOpenLightbox = findNextOpenLightbox(currentElement);
            console.log(nextOpenLightbox);
            displayCurrentMedia(mediaType, mediaUrl, mediaText); // Affiche le média suivant
        } 
    });
    

    
    // Fonction pour trouver le prochain élément open-lightbox
    const findNextOpenLightbox = (element) => {
        while (element = element.nextElementSibling) {
            if (element.matches('.gallery-media')) {
                return element;
            }
        }
        return null; // Retourne null si aucun élément trouvé
    };

    // Fonction pour trouver l'élément open-lightbox précédent
    const findPreviousOpenLightbox = (element) => {
        while (element = element.previousElementSibling) {
            if (element.matches('.gallery-media')) {
                return element;
            }
        }
        return null; // Retourne null si aucun élément trouvé
    };
        // Gestion du bouton de fermeture de la lightbox
        const btnClose = document.querySelector(".btn_lightBox_close");
        btnClose.addEventListener("click", () => {
            lightBoxContainer.style.display = "none"; 
        });
    };

