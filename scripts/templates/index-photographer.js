export default function createPhotographerCard(photographer) {
    return {
        createPhotographerCard() {
            const article = document.createElement('article');
            const photographerCard = `
                <a href="photographer.html?id=${photographer.id}" role="link" aria-label="Voir le profil de ${photographer.name}">
                    <img src="./assets/photographers/${photographer.portrait}" alt="${photographer.name}">
                    <h2>${photographer.name}</h2>
                </a>
                <p class="location">${photographer.city}, ${photographer.country}</p>
                <p class="tagline">${photographer.tagline}</p>
                <span>${photographer.price}€/jour</span>
            `;
            article.innerHTML = photographerCard;
            return article;
        }
    };
}
