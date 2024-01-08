export default function createMedia(data) {
    // Renvoie un nouvel objet avec certaines propriétés extraites de l'objet "data"
    return {
        id: data.id, 
        photographerId: data.photographerId, 
        title: data.title, 
        image: data.image, 
        likes: data.likes, 
        date: data.date, 
        price: data.price 
    };
}
