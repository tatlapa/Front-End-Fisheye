export const displayFilter = () => {

    //Ouverture/fermeture dropdown
const dropDownContent = document.querySelector(".dropdown_content");
const btnDropDown = document.querySelector(".btn_drop");

let isOpen = false;

btnDropDown.addEventListener("click", () => {
    if (isOpen) {
        dropDownContent.style.display = "none";
        isOpen=false;
    } else {
        dropDownContent.style.display = "flex";
        isOpen=true;
    }
});


    //Cacher l'élément actuel de la liste du dropdown

};
