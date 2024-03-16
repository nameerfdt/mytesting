
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector('#list');
const display = document.querySelector('article');

gridBtn.addEventListener("click", () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

listBtn.addEventListener("click", () => {
    display.classList.add('list');
    display.classList.remove('grid');
});
