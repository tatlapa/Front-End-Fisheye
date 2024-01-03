import { displayNumberOfLike } from "../utils/likeContainer.js";
import { displayLightBox} from "../utils/lightBox.js";


export const movementFilter = () => {
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

};

export const displayMediaFilter = mediasTemplate => {
    const currentFilter = document.querySelector('#current_filter');
    const allFilters = Array.from(document.querySelectorAll('.dropdown_content li button'))

    let filterAlreadySelected = allFilters.find(filter => filter.textContent == currentFilter.textContent);
    filterAlreadySelected.style.display = 'none';

    allFilters.forEach(filter => {
        filter.addEventListener('click', () => {

            currentFilter.textContent = filter.textContent;
            if (filterAlreadySelected) filterAlreadySelected.style.display = 'flex';

            filterAlreadySelected = filter;
            filterAlreadySelected.style.display = 'none';

            sortByFilter(filter.textContent);
        })
    });

    const sortByFilter = filterValue => {
        switch (filterValue) {
            case 'Titre':
                mediasTemplate.medias.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Popularité':
                mediasTemplate.medias.sort((a, b) => b.likes - a.likes);
                break;
            case 'Date':
                mediasTemplate.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }
        
        mediasTemplate.createPhotographerMedia();
        const mediasfiltered = mediasTemplate;
        displayLightBox(mediasfiltered);
        // Ajoutez une vérification avant d'appeler displayNumberOfLike
        if (mediasfiltered.medias && mediasfiltered.medias.length > 0) {
            displayNumberOfLike(mediasfiltered.medias);
        } else {
            console.error("Les données medias sont absentes ou vides.");
        }
 
        const mediaElements = document.querySelectorAll('.gallery_card');
        mediaElements.forEach((media, index) => {
            setTimeout(() => {
                media.classList.add('animeCard');
            }, 100 * index);
        });   
    };
}
    

