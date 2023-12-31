export const displayNumberOfLike = (medias) => {
  let totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
  const nbOfLikeTotal = document.querySelector(".nb_like");
  nbOfLikeTotal.innerHTML = totalLikes;

  const nbOfLikeElements = document.querySelectorAll(".like");

  const btnLikes = document.querySelectorAll(".btn_like");
  btnLikes.forEach((btnLike, index) => {
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
