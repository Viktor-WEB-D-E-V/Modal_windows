"use strict";
const modalWind = document.querySelector(".modal"),
  modalBtn = document.querySelectorAll("[data-modal]");

function toggleModal() {
  modalWind.classList.toggle("active");
  if (modalWind.classList.contains("active")) {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", escCloseModal);
  } else {
    document.body.style.overflow = "";
    document.removeEventListener("keydown", escCloseModal);
  }
}

function escCloseModal(e) {
  if (e.code === "Escape") {
    toggleModal();
  }
}

modalBtn.forEach((e) => {
  e.addEventListener("click", toggleModal);
});

modalWind.addEventListener("click", (e) => {
  if (e.target === modalWind) {
    toggleModal();
  }
});
