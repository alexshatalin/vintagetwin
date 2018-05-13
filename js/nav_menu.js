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
		 
		$('[data-id="mobile_nav_button"]').on('click', function(){
			if( false == vtObj.menuOpen ) {
				$('.page_container').addClass('mobile_nav_opened');
				vtObj.menuOpen = true;
			} else {
				$('.page_container').removeClass('mobile_nav_opened');
				vtObj.menuOpen = false;
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

}());







