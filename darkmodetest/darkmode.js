const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const section = document.querySelector("section");


modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
    section.classList.toggle('dark-mode');
});
