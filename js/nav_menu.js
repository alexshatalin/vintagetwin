(function () {
	'use strict';
	let vtObj = {};
	vtObj.resizeState;
	vtObj.scrollState;
	vtObj.headerHeight;


	$(document).ready(function(){
		vtObj.menuOpen = false;
		vtObj.windowWidth = $(window).width();
		vtObj.headerHeight = $('.main_header__promo_bar').outerHeight();

		$('body').on('click', '[data-id="mobile_nav_button"]', function(){
			if( false == vtObj.menuOpen ) {
				$('.page_container').addClass('mobile_menu_opened');
				vtObj.menuOpen = true;
			} 
			
		}).on('click', '.page_overlay', function(){
			vtObj.closeMobileNav();
		}).on('click', '.mobile_nav li', function(){
			vtObj.currentElem = $(this).attr('data-id');
			vtObj.currentLevel = $(this).attr('data-level');

			if( vtObj.currentElem != undefined && vtObj.currentLevel == 0 ) {
				$('.mobile_nav ul, .mobile_nav li').removeClass('active');
				$('[data-id="'+ vtObj.currentElem +'"]').addClass('active');
			}

			if( vtObj.currentElem != undefined && vtObj.currentLevel == 1 ) {
				$('[data-level="1"]').removeClass('active');
				$('[data-id="'+ vtObj.currentElem +'"]').addClass('active');
			}

			if( vtObj.currentElem != undefined && vtObj.currentLevel == -1 ) {
				$('[data-level="-1"]').removeClass('active');
				$('[data-id="'+ vtObj.currentElem +'"]').addClass('active');
			}
			
		});
	});


	$(window).on('resize', function(){
		if( $(window).width() > 1024  && vtObj.resizeState != 1 ) {
			vtObj.headerHeight = 43;
			vtObj.resizeState = 1;	
		} else if( $(window).width() < 1024 && vtObj.resizeState != 0 ) {
			vtObj.headerHeight = 25;
			vtObj.resizeState = 0;	
		}

		if( true == vtObj.menuOpen ) {
			vtObj.closeMobileNav();
		}

	}).on('scroll', function(){
		//console.log($(window).scrollTop());
		if( $(window).scrollTop() > vtObj.headerHeight && vtObj.scrollState != 1 ){
			$('.page_container').addClass('remove_promo_bar');
			console.log('hide');
			vtObj.scrollState = 1;
		} else if( $(window).scrollTop() < vtObj.headerHeight ) {
			$('.page_container').removeClass('remove_promo_bar');
			console.log('show');
			vtObj.scrollState = 0;
		}
	});

	vtObj.setScrollOffset = function(){

	};

	vtObj.closeMobileNav = function(){
		$('.page_container').removeClass('mobile_menu_opened');
		vtObj.menuOpen = false;
	};

}());







