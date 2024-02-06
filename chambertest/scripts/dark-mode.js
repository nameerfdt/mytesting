const modeButton = document.querySelector("#dark-mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const gridbox = document.querySelector(".grid-box");

modeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode");
    gridbox.classList.toggle("dark-mode");
});