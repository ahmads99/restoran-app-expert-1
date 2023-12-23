import "regenerator-runtime";
import "../sass/main.scss";
import "./view/navbar.js";
import "./view/show-modal.js";
import generateCard from "./view/generate-card.js";
import "./view/generate-modal-body.js";
import "./view/get-current-year.js"

window.addEventListener("DOMContentLoaded", function () {
  generateCard();
});
