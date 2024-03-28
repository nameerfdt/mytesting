const hamburgericon = document.querySelector('#hamburgermenu');
const hamburgernav = document.querySelector('.navigation');

hamburgericon.addEventListener('click', () => {
	hamburgernav.classList.toggle('show');
	hamburgericon.classList.toggle('show');
});