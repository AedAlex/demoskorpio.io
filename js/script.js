(function($) {
	
	"use strict";


	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var siteHeaderHeight = $('.main-header').height();
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= siteHeaderHeight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}
	
	
	//Masonary
	function simpleMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.on('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	simpleMasonry();
	
	
	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();
	
	
	//Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:60,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1,
					margin:15
				},
				600:{
					items:1,
					margin:15
				},
				800:{
					items:2,
					margin:15
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				},
				1400:{
					items:2
				}
			}
		});    		
	}
	
	
	//News Carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				},
				1400:{
					items:2
				}
			}
		});    		
	}
	
	
	//Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				},
				1400:{
					items:3
				}
			}
		});    		
	}
	
	//Agents Carousel
	if ($('.agents-carousel').length) {
		$('.agents-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	//News Carousel
	if ($('.News-carousel').length) {
		$('.News-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	//Property Single Carousel
	if ($('.property-single-carousel').length) {
		$('.property-single-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}

	
	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop: true,
			margin:0,
			nav:true,
			autoplay:true,
    		autoplayTimeout:3500,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:4
				}
			}
		});    		
	}
	
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				subject: {
					required: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			},
			messages: {
				username: {
					required: "Este campo es requerido",
				},
				email: {
					required: "Este campo es requerido",
					email: "Ingrese un Email válido"
				},
				subject: {
					required: "Este campo es requerido",
				},
				phone: {
					required: "Este campo es requerido",
				},
				message: {
					required: "Este campo es requerido",
				}
			}
		});

		if(getParameterByName('message') === "success") {
			$("#submit-success").css('display', 'block');
		}
		if(getParameterByName('message') === "fail") {
			$("#submit-fail").css('display', 'block');
		}
	}
	
	//Recomienda Form Validation
	if($('#recomienda-form').length){
		$('#recomienda-form').validate({
			ignore: [],
			rules: {
				fraccionamiento_interes_recomendado: {
					required: true
				},
				nombre_recomendado: {
					required: true
				},
				email_recomendado: {
					required: true,
					email: true
				},
				telefono_recomendado: {
					required: true
				},
				parentesco_recomendado: {
					required: true
				},
				nombre: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				telefono: {
					required: true
				},
				yo_soy: {
					required: true
				},
				mensaje: {
					required: true
				}
			},
			messages: {
				email: {
					email: "Ingrese un Email válido"
				},
				email_recomendado: {
					email: "Ingrese un Email válido"
				},
				terminos_condiciones: {
					required: "Es necesario que acepte los términos y condiciones",
				},
			},
			errorPlacement: function(error, element) {
				if (element.attr("type") == "checkbox") {
					console.log('pasa');
					error.insertAfter(element.closest('label'));
				}	
				else if (element.is("select")) {
						error.insertAfter(element.next("span.ui-selectmenu-button"));
				}
				else error.insertAfter(element);
			},
			highlight: function(element, errorClass, validClass) {
				$(element).closest('.form-group').addClass(errorClass).removeClass(validClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).closest('.form-group').removeClass(errorClass).addClass(validClass);
			}
		});

		if(getParameterByName('message') === "success") {
			$("#submit-success").css('display', 'block');
		}
		if(getParameterByName('message') === "fail") {
			$("#submit-fail").css('display', 'block');
		}

		$('.custom-select-box-form').on('selectmenuchange', function() {
			$(this).valid();
		});
	}

	function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
	// "Buscador" 
	if($('#results-page').length) {
		if(getParameterByName('escobedo') !== "" && getParameterByName('precioDesde') !== "" && getParameterByName('precioHasta') !== "") {
			var zonaSelected = getParameterByName('zona');
			var precioDesdeSelected = +getParameterByName('precioDesde');
			var precioHastaSelected = +getParameterByName('precioHasta');
			var results = [];
			var preResults = $('.news-block-three');

			preResults.each(function(index, element) {
				var zona = $(element).data('zona');
				var precio = +$(element).data('precio');

				if(zona === zonaSelected && (precio >= precioDesdeSelected && precio <= precioHastaSelected)) {
					results.push(element);
				}
			});

			if(results.length) {
				$("#no-results").css('display', 'none');
				results.forEach(function(element) {
					$(element).addClass('active');
				});
			}
		}
	}

	// Filter Form Validation
	if($('#filter-form').length) {
		$.validator.addMethod('greaterThan', function(value, elment, param) {
			var $otherElement = $(param);
          	return parseInt(value, 10) > parseInt($otherElement.val(), 10);
		});
		
		$.validator.addMethod('lowerThan', function(value, elment, param) {
			var $otherElement = $(param);
          	return parseInt(value, 10) < parseInt($otherElement.val(), 10);
		});

		$('#filter-form').validate({
			ignore: [],
			rules: {
				zona: {
					required: true
				},
				precioDesde: {
					required: true,
					lowerThan: '#precioHasta'
				},
				precioHasta: {
					required: true,
					greaterThan: '#precioDesde'
				}
			},
			messages: {
				zona: {
					required: "Este campo es requerido",
				},
				precioDesde: {
					required: "Este campo es requerido",
					lowerThan: "Debe ser menor que el campo 'Precio Hasta'"
				},
				precioHasta: {
					required: "Este campo es requerido",
					greaterThan: "Debe ser mayor que el campo 'Precio Desde'"
				}
			},
			errorClass: "form-error",
			errorElement: "span",
		});
	}
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
		simpleMasonry();
		if($('#contact-form').length && $('#recomienda-form').length) {
			$.validator.messages.required = "Este campo es requerido";
		}
	});	

})(window.jQuery);




//NUEVO EFECTO APARECER MENU CON SCROLL

//Animacion Mostrar/ocultar con scroll

let menuAparecer = document.getElementById('menu-oculto');

function aparecer() {
        let scroll = window.scrollY;

        if ( scroll >= 220) {
                menuAparecer.style.visibility = 'visible';
                menuAparecer.style.top = 0 ;
				menuAparecer.style.opacity = 1;
        }else { 
                menuAparecer.style.visibility ='hidden';
                menuAparecer.style.top = '-120px';
				menuAparecer.style.opacity = 0;
        }
}

window.addEventListener('scroll', aparecer);
