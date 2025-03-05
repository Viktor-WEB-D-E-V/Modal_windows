"use strict";
const modalWind = document.querySelector(".modal"),
  modalBtn = document.querySelectorAll("[data-modal]");

function toggleModal() {
  modalWind.classList.toggle("active");
  if (modalWind.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  }
  document.body.style.overflow = "";
}

modalBtn.forEach((e) => {
  e.addEventListener("click", toggleModal);
});

modalWind.addEventListener("click", (e) => {
  if (e.target === modalWind) {
    toggleModal();
  }
});
