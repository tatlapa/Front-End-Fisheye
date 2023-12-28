export const displayLightBox = (medias, photographer) => {
    const lightBoxContainer = document.getElementById('lightbox');

    // Ouverture lightBox
    const openLightBoxes = document.querySelectorAll('.open-light-box');
    openLightBoxes.forEach(openLightBox => {
        openLightBox.addEventListener("click", () => {
            lightBoxContainer.style.display = "flex";
        });
    });

    //Affichage du média correspondant
    

    // Fermeture lightBox
    const btnClose = document.querySelector(".btn_lightBox_close");
    btnClose.addEventListener("click", () => {
        lightBoxContainer.style.display = "none";
    });
};
