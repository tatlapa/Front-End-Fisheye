export const displayNumberOfLike = (medias) => {
  const nbOfLike = document.querySelector(".nb_like");
  let countNbOfLike = medias.reduce((acc, media) => acc + media.likes, 0);
  nbOfLike.innerHTML = `${countNbOfLike}`;

  const mediaStates = medias.map(() => ({
    isLiked: false,
  }));

  const btnLikes = document.querySelectorAll(".btn_like");
  btnLikes.forEach((btnLike, index) => {
    btnLike.addEventListener("click", () => {
      mediaStates[index].isLiked = !mediaStates[index].isLiked;

      if (mediaStates[index].isLiked) {
        btnLike.classList.add("btn_liked");
        countNbOfLike++;
      } else {
        btnLike.classList.remove("btn_liked");
        countNbOfLike--;
      }

      nbOfLike.innerHTML = countNbOfLike;
    });
  });
};
