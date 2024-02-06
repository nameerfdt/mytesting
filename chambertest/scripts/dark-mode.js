const modeButton = document.querySelector("#dark-mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode");
});