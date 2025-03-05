"use strict";
const openBtn = document.querySelector(".open"),
  modalWind = document.querySelector(".modal"),
  closebtn = document.querySelector(".close");

function toggleModal() {
  modalWind.classList.toggle("active");
  if (modalWind.classList.contains("active")) {
    document.body.style.overflow = "hidden"
  }
  document.body.style.overflow = "";
}

closebtn.addEventListener("click", toggleModal);
openBtn.addEventListener("click", toggleModal);
