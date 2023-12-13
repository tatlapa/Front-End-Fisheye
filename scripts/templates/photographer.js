function photographerTemplate(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `../../assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    img.setAttribute("src", picture);
    img.setAttribute("alt", "Image du photographe");
    h2.textContent = name;
    h2.setAttribute("aria-label", "Nom du photographe");
    h3.textContent = `${city}, ${country}`;
    h3.setAttribute("aria-label", "Ville et pays du photographe");
    h4.textContent = tagline;
    h4.setAttribute("aria-label", "Description du photographe");
    p.textContent = price + "€/jour";
    p.setAttribute("aria-label", "Prix du photographe");

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
