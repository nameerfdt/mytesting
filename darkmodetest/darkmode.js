const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
// const section = main.children;
const grid1 = document.querySelector('#grid1');
const grid2 = document.querySelector('#grid2');


modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
    // section.classList.toggle('dark-mode');
    grid1.classList.toggle('dark-mode');
    grid2.classList.toggle('dark-mode');
});
