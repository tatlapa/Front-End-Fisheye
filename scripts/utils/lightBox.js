export const displayLightBox = (medias, photographer) => {
    const lightBoxContainer = document.getElementById('lightbox');
    let currentMediaIndex = 0; 

    const openLightBoxes = document.querySelectorAll('.open-light-box');
    openLightBoxes.forEach((openLightBox, index) => {
        openLightBox.addEventListener("click", () => {
            lightBoxContainer.style.display = "flex";
            currentMediaIndex = index; 
            displayCurrentMedia(currentMediaIndex, medias, photographer);
            const btnClose = document.querySelector(".btn_lightBox_close");
            btnClose.focus();
        });
    });

    const displayCurrentMedia = (index, medias, photographer) => {
        const lightBoxMedia = document.querySelector('.lightBox_media');
        const currentMedia = medias[index];

        if (currentMedia && (currentMedia.image || currentMedia.video)) {
            while (lightBoxMedia.firstChild) {
                lightBoxMedia.removeChild(lightBoxMedia.firstChild);
            }
    
            if (currentMedia.image) {
                const imageElement = document.createElement('img');
                imageElement.src = `./assets/media/${photographer.name}/${currentMedia.image}`;
                imageElement.alt = currentMedia.title;
                lightBoxMedia.appendChild(imageElement);
            } else if (currentMedia.video) {
                const videoElement = document.createElement('video');
                videoElement.src = `./assets/media/${photographer.name}/${currentMedia.video}`;
                videoElement.alt = currentMedia.title;
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

    const btnClose = document.querySelector(".btn_lightBox_close");
    btnClose.addEventListener("click", () => {
        lightBoxContainer.style.display = "none";
    });
};
