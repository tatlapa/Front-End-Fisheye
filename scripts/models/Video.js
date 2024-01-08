import Media from "./Media.js";

// Définit et exporte la classe Video qui étend la classe Media
export default class Video extends Media {
    // Constructeur de la classe Video prenant un objet "data" en paramètre
    constructor(data) {
        // Appelle le constructeur de la classe parente (Media) avec les données "data"
        super(data);

        // Initialise la propriété spécifique "video" de cette instance avec la valeur de "data.video"
        this.video = data.video;
    }
};
