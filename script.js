"use strict";
const openBtn = document.querySelector(".open"),
  modalWind = document.querySelector(".modal"),
  closebtn = document.querySelector(".close");

console.log(openBtn, modalWind, closebtn);

function toggleModal() {
  modalWind.classList.toggle("active");
}

closebtn.addEventListener("click", toggleModal);
openBtn.addEventListener("click", toggleModal);
