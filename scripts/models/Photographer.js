export default function createPhotographer(data) {
    // Renvoie un nouvel objet avec certaines propriétés extraites de l'objet "data"
    return {
        name: data.name, 
        id: data.id, 
        city: data.city, 
        country: data.country, 
        tagline: data.tagline, 
        price: data.price, 
        portrait: data.portrait 
    };
}
