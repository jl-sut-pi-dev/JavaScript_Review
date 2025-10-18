function activateButton(name) {
  const activeButton = document.querySelector(name);

  if (!activeButton.classList.contains("is-toggled")) {
    trunOffPrevBtn();
    activeButton.classList.add("is-toggled");
  } else {
    activeButton.classList.remove("is-toggled");
  }
}
function trunOffPrevBtn() {
  const prevButton = document.querySelector(".is-toggled");
  if (prevButton) {
    prevButton.classList.remove("is-toggled");
  }
}
// if (name === "gamming") {
//   gammingButton.classList.add("is-toggled");
//   musicButton.classList.contains("is-toggled") &&
//     musicButton.classList.remove("is-toggled");
//   techButton.classList.contains("is-toggled") &&
//     techButton.classList.remove("is-toggled");
// } else if (name === "music") {
//   musicButton.classList.add("is-toggled");
//   gammingButton.classList.contains("is-toggled") &&
//     gammingButton.classList.remove("is-toggled");
//   techButton.classList.contains("is-toggled") &&
//     techButton.classList.remove("is-toggled");
// } else if (name === "tech") {
//   techButton.classList.add("is-toggled");
//   gammingButton.classList.contains("is-toggled") &&
//     gammingButton.classList.remove("is-toggled");
//   musicButton.classList.contains("is-toggled") &&
//     musicButton.classList.remove("is-toggled");
// }
