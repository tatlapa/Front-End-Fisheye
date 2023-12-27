export const displayLightBox = () => {

    const btnClose = document.querySelector(".btn_lightBox_close");
    const lightBoxContainer = document.querySelector(".lightBox_container");

    btnClose.addEventListener("click", () => lightBoxContainer.style.display = "none");
}