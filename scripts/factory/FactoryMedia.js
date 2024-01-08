import Image from '../models/Image.js';
import Video from '../models/Video.js';

function createMedia(data) {
    // Vérifie le type de données dans l'objet "data" pour déterminer s'il s'agit d'une image ou d'une vidéo
    if (data.image) {
        // S'il y a une propriété "image" dans les données, crée une instance de la classe Image avec ces données
        return new Image(data);
    } else if (data.video) {
        // Sinon, s'il y a une propriété "video" dans les données, crée une instance de la classe Video avec ces données
        return new Video(data);
    } else {
        // Si ni "image" ni "video" n'est présent, lance une erreur indiquant un type de données inconnu
        throw new Error('Unknown data type');
    }
}

export default createMedia;
