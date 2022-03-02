window.onload = function () {
	const swiper = new Swiper('.swiper', {
		// Default parameters
		slidesPerView: 6,
		spaceBetween: 30,
		// Responsive breakpoints
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},



		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			500: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			// when window width is >= 640px
			1140: {
				slidesPerView: 3,
			},
			1290: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 5,
			}
		}
	})


	const gallerySwiper = new Swiper('.gallery__swiper', {
		slidesPerView: 4,
		spaceBetween: 30,

		loop: false,
		zoom: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		}
	});

	Fancybox.bind("[data-fancybox]", {

	});



	$('.faq__accordeon .faq__how_many_head').on('click', f_acc);


	function f_acc() {
		$('.faq__accordeon .faq__how_many_body').not($(this).next()).slideUp(1000);
		let parentElem = this.parentNode;
		let arrowActive = document.querySelectorAll('.fa-angle-down.rotateTransform');

		let arrow = parentElem.querySelector('.faq__how_many_head-arrow i');
		if (arrow.classList.contains('rotateTransform') === false) {
			arrow.classList.add('rotateTransform');
		} else {
			arrow.classList.remove('rotateTransform');
		}

		arrowActive.forEach((elem) => {
			elem.classList.remove('rotateTransform');
		});

		$(this).next().slideToggle(500);
	}


	$('.header__menu_mobile').click(function () {
		$('.header__menu').toggle('menu-open');
		$('.left__menu .menu-hover').toggleClass('menu-open-left');
	});


	$('.menu-hover-li .menu-hover_block').on('click', f_acc_menu);


	function f_acc_menu() {
		$('.menu-hover-bottom').not($(this).next()).slideUp(1000);

		$(this).next().slideToggle(500);
	}

	$('#header .header__menu ul li a').on('click', f_acc_menuMobile);


	function f_acc_menuMobile() {
		$('#header .header__menu ul li a .menu-hover').not($(this).next()).slideUp(1000);

		$(this).next().slideToggle(500);
	}

	//Длина левого меню
	const menuFirstType = document.querySelector('.header__menu li:first-of-type');
	const leftMenu = document.querySelector('.left__menu');
	if (window.innerWidth >= 992) {
		let widthFirstMenu = menuFirstType.clientWidth;
		leftMenu.style.width = `${widthFirstMenu}px`;
	}
	$(window).resize(function () {
		if (window.innerWidth >= 992) {
			let widthFirstMenu = menuFirstType.clientWidth;
			leftMenu.style.width = `${widthFirstMenu}px`;
			$('.menu-hover.sticky')[0].style.width = `${widthFirstMenu}px`;
		}
	});

	//Скролл левого меню
	var start_pos = $('.menu-hover').offset().top;
	$(window).scroll(function () {
		if ($(window).scrollTop() >= start_pos) {
			if ($('.menu-hover').hasClass() == false) {
				if (window.innerWidth >= 992) {
					$('.menu-hover').addClass('sticky');
					let widthFirstMenu = menuFirstType.clientWidth;
					$('.menu-hover.sticky')[0].style.width = `${widthFirstMenu}px`;
				}
			}
		} else $('.menu-hover').removeClass('sticky');
	});







	// window.onscroll = function () {
	// 	checkMarginToTop();
	// };

	// var nav = document.querySelector(".menu-hover");

	// var sticky = nav.offsetTop;

	// function checkMarginToTop() {
	// 	if (window.pageYOffset > sticky) {
	// 		nav.classList.add("sticky");
	// 	} else {
	// 		nav.classList.remove("sticky");
	// 	}
	// }





}