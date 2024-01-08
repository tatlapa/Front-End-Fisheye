import Media from "./Media.js";

// Définit et exporte la classe Image qui étend la classe Media
export default class Image extends Media {
    // Constructeur de la classe Image prenant un objet "data" en paramètre
    constructor(data) {
        // Appelle le constructeur de la classe parente (Media) avec les données "data"
        super(data);

        // Initialise la propriété spécifique "image" de cette instance avec la valeur de "data.image"
        this.image = data.image;
    }
}; 
