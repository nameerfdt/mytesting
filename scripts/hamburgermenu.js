const hamburgericon = document.querySelector('#hamburgermenu');
const hamburgernav = document.querySelector('.hamburgernav');

hamburgericon.addEventListener('click', () => {
	hamburgernav.classList.toggle('show');
	hamburgericon.classList.toggle('show');
});