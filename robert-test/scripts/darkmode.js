const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		body.style.background = "#000";
		body.style.color = "#fff";
        header.style.background = "#323232";
        header.style.color = "#fff";
        footer.style.background = "#323232";
		footer.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#fff";
		body.style.color = "#000";
        header.style.background = "#3f2894";
        header.style.color = "#fffafa";
        footer.style.background = "#3f2894";
		footer.style.color = "#fffafa";
		modeButton.textContent = "🌑";
	}
});