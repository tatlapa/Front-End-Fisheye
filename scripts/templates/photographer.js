function photographerTemplate(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `../../assets/photographers/${portrait}`;

  function getUserCardDOM() {
 
    // Création des balises html
    const article = document.createElement("article");
    const link = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const location = document.createElement("p");
    const description = document.createElement("p");
    const dayPrice = document.createElement("span");

    // Attribution des labels et des classes
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Image du photographe");
    h2.textContent = name;
    h2.setAttribute("aria-label", "Nom du photographe");
    location.textContent = `${city}, ${country}`;
    location.setAttribute("aria-label", "Ville et pays du photographe");
    location.classList.add("location");
    description.textContent = tagline;
    description.setAttribute("aria-label", "Description du photographe");
    description.classList.add("description");
    dayPrice.textContent = price + "€/jour";
    dayPrice.setAttribute("aria-label", "Prix du photographe");
    link.setAttribute("aria-role", "lien vers page du photographe");
    link.setAttribute("aria-label", `lien vers page du photographe + ${name}`);

    // Ordre des balises html
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(location);
    article.appendChild(description);
    article.appendChild(dayPrice);

    // Gestionnaire d'événements au lien
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Pour éviter que le lien ne change directement l'URL

      // Mise à jour de l'URL avec l'ID du photographe
      const newUrl = window.location.origin + `/photographer.html?id=${id}`;
      window.location.href = newUrl;
    });

    return article;
  }
  return { name, picture, getUserCardDOM };
}
