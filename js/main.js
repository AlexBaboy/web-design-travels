const sliderContainer = document.querySelector('.slider-container'),
			burger = document.querySelector('.burger'),
			close = document.querySelector('.menu__close'),
			menu = document.querySelector('.menu'),
			swiperContainer = document.querySelector('.swiper-container'),
			playButton = document.querySelectorAll('.main-slider__play');

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
	effect: 'fade',
	navigation: {
		nextEl: '.btn-right',
		prevEl: 'btn-left'
	}
})

swiper.on('transitionEnd', function() {
	const videos = document.querySelectorAll('.first__slider video');
	videos.forEach(el => {
		el.pause();
		el.currentTime = 0;
	})
	playButton.forEach(el => {
		el.style.display = 'block'
	})
})

burger.addEventListener('click', () => {
	menu.classList.add('menu__visible')
})

close.addEventListener('click', () => {
	menu.classList.remove('menu__visible')
})

playButton.forEach(el => {
	el.addEventListener('click', e => {
		const video = e.currentTarget.closest('.main-slider__media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(()=> {
			video.volume = 1
		}, 1000)
	})
})
