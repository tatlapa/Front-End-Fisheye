export const displayNumberOfLike = (medias) => {
  // Calcul du nombre total de likes à partir du tableau de médias
  let totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);

  // Sélection de l'élément HTML pour afficher le nombre total de likes
  const nbOfLikeTotal = document.querySelector(".nb_like");
  // Mise à jour de l'affichage du nombre total de likes
  nbOfLikeTotal.innerHTML = totalLikes;

  const nbOfLikeElements = document.querySelectorAll(".like");

  const btnLikes = document.querySelectorAll(".btn_like");

  btnLikes.forEach((btnLike, index) => {
    // Initialisation du compteur de likes pour chaque média
    let countNbOfLike = medias[index].likes;

    btnLike.addEventListener("click", () => {
      const isLiked = btnLike.classList.contains("btn_liked");

      if (isLiked) {
        countNbOfLike--;
        btnLike.classList.remove("btn_liked");
        totalLikes--;
      } else {
        countNbOfLike++;
        btnLike.classList.add("btn_liked");
        totalLikes++;
      }

      nbOfLikeElements[index].innerHTML = countNbOfLike;
  
      nbOfLikeTotal.innerHTML = totalLikes;
    });
  });
};
