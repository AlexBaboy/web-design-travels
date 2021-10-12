const sliderContainer = document.querySelector('.slider-container'),
			burger = document.querySelector('.burger'),
			close = document.querySelector('.menu__close'),
			menu = document.querySelector('.menu')

const swiper = new Swiper(sliderContainer, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 100
})

burger.addEventListener('click', () => {
	menu.classList.add('menu__visible')
	console.log('15!')
})

close.addEventListener('click', () => {
	menu.classList.remove('menu__visible')
	console.log('20!')
})
