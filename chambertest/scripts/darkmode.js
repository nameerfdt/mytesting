const modeButton = document.querySelector("#darkmode");
const body = document.querySelector("body");
// const main = document.querySelector("main")
const events = document.querySelector("#events");
const weather = document.querySelector("#weather");
const spot1 = document.querySelector("#spotlight1");
const spot2 = document.querySelector("#spotlight2");
const spot3 = document.querySelector("#spotlight3");


modeButton.addEventListener("click", () => {
    body.classList.toggle('darkmode');
    // main.classList.toggle('darkmode');
    events.classList.toggle('darkmode');
    weather.classList.toggle('darkmode');
    spot1.classList.toggle('darkmode');
    spot2.classList.toggle('darkmode');
    spot3.classList.toggle('darkmode');
});
