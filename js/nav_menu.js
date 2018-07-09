(function() {
	'use strict';
	let vtObj = {};
	vtObj.resizeState;
	vtObj.scrollState;
	vtObj.headerHeight;


	$(document).ready(function(){
		vtObj.menuOpen = false;
		vtObj.windowWidth = $(window).width();
		vtObj.headerHeight = $('.main_header__promo_bar').outerHeight();
		vtObj.mobileFormTimer;

		$('body').on('click touchstart', '[data-id="mobile_nav_button"]', function(){
			$("html, body").animate({ scrollTop: 0 }, 0);
			if( false == vtObj.menuOpen ) {
				$('.page_container').addClass('mobile_menu_opened');//.dequeue();
				vtObj.menuOpen = true;
			} 
			
		}).on('click touchstart', '.page_overlay', function(){
			vtObj.closeMobileNav();
		}).on('click touchstart', '.mobile_nav li', function(){
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

			if( vtObj.currentElem != undefined && vtObj.currentLevel == 2 ) {
				$('.mobile_nav').addClass('sign_in_opened');
				$('.account_panel').removeClass('active');
				$('[data-id="'+ vtObj.currentElem +'"],[data-login-role="'+ vtObj.currentElem +'"]').addClass('active');
			}

			if( vtObj.currentElem != undefined && vtObj.currentLevel == -2 ) {
				vtObj.removeAccountMenu();
			}
			
		}).on('click touchstart', '[data-id="accordion"]', function(){
			$(this).closest('dl').toggleClass('inactive');
		});

		// Secondary menu set up
		$('body').on('click touchstart', '.main_header__secondary_nav', function(e){
			e.stopPropagation();
			let currentElem = $(e.target).attr('data-id'),
				currentDataRole = $(e.target).attr('data-role');	

				if( typeof currentElem != 'undefined' && currentDataRole != 'single_nav_panel' ) {
					$('.main_header__secondary_nav_body').addClass('opened');
					$('.main_header__secondary_nav li,.main_header__secondary_nav .featured_section').not($('[data-id="' + currentElem + '"]')).removeClass('active');
					$('.main_header__secondary_nav .featured_section[data-id="'+ currentElem +'"]').toggleClass('active');
					$('.main_header__secondary_nav_body input[type="email"],.main_header__secondary_nav_body input[type="text"]').focus();
				}

		}).on('click touchstart', '.account_section,.main_header__secondary_nav .featured_section', function(e){
			vtObj.currentTitle = $(e.target).attr('data-login-role');
			if( typeof vtObj.currentTitle != 'undefined' ) {
				$('.account_panel').removeClass('active');
				$('[data-login-role="'+ vtObj.currentTitle +'"]').toggleClass('active');
			}
		}).on('click touchstart', function(){
			if( false == vtObj.menuOpen ) {
				vtObj.removeSecondaryNav();
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

		if( true == vtObj.menuOpen && $(window).width() != vtObj.windowWidth ) {
			vtObj.windowWidth = $(window).width();
			vtObj.removeSecondaryNav();
		} else if( $(window).width() != vtObj.windowWidth && vtObj.resizeState != 2 ) {
			vtObj.removeSecondaryNav();
			vtObj.resizeState = 2;
		}

	}).on('scroll', function(){
		//console.log($(window).scrollTop());
		if( $(window).scrollTop() > vtObj.headerHeight && vtObj.scrollState != 1 ){
			$('.page_container').addClass('remove_promo_bar');
			//console.log('hide');
			vtObj.scrollState = 1;
		} else if( $(window).scrollTop() < vtObj.headerHeight ) {
			$('.page_container').removeClass('remove_promo_bar');
			//console.log('show');
			vtObj.scrollState = 0;
		}
	});

	vtObj.closeMobileNav = function(){
		$('.page_container').removeClass('mobile_menu_opened');
		$('.mobile_nav').removeClass('sign_in_opened');
		vtObj.menuOpen = false;
	};

	vtObj.removeAccountMenu = function() {
		window.clearTimeout(vtObj.mobileFormTimer);
		$('.mobile_nav').removeClass('sign_in_opened');
		vtObj.mobileFormTimer = window.setTimeout(function(){
		}, 200);
	};

	vtObj.removeSecondaryNav = function(e) {
		$('.main_header__secondary_nav_body').removeClass('opened');
		$('[data-login-role="sign_in"]').addClass('active');
		$('.main_header__secondary_nav li,.main_header__secondary_nav .featured_section').removeClass('active');
		
	};
	// vtObj.delayMobileFormChanges = function(callback) {
		
	// 	if (typeof callback === 'function' ) {
	// 		callback();
	// 	}
	// };

})();







