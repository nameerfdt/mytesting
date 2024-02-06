const hamburgericon = document.querySelector('#hamburgermenu');
const hamburgernav = document.querySelector('.ham-nav');

hamburgericon.addEventListener('click', () => {
	hamburgernav.classList.toggle('show');
	hamburgericon.classList.toggle('show');
});