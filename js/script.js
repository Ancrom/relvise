let burger = document.querySelector('.burger');
let nav = document.querySelector('.menu__list');

burger.onclick = function() {
	// burger.classList.toggle('--is-active');
	nav.classList.toggle('--is-active');
};