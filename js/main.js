const sliderContainer = document.querySelector('.slider-container'),
			burger = document.querySelector('.burger'),
			close = document.querySelector('.menu__close'),
			menu = document.querySelector('.menu'),
			swiperContainer = document.querySelector('.swiper-container')

const slider = new Swiper(sliderContainer, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 100
})

const swiper = new Swiper(swiperContainer, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	fadeEffect: {
		crossFade: true
	},
	effect: 'fade'
})

burger.addEventListener('click', () => {
	menu.classList.add('menu__visible')
	console.log('15!')
})

close.addEventListener('click', () => {
	menu.classList.remove('menu__visible')
	console.log('20!')
})
