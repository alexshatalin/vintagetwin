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

			if( vtObj.currentElem == 'create_account' && vtObj.currentLevel == 2 ) {
				$('.mobile_nav').addClass('sign_in_opened');
				vtObj.createAccount();
			}

			if( vtObj.currentElem == 'sign_in' && vtObj.currentLevel == 2 ) {
				$('.mobile_nav').addClass('sign_in_opened');
				vtObj.createSignin();
			}

			if( vtObj.currentElem != undefined && vtObj.currentLevel == -2 ) {
				vtObj.removeAccountMenu();
			}
			
		}).on('click touchstart', '[data-id="accordion"]', function(){
			$(this).closest('dl').toggleClass('inactive');
		});

		$('body').on('click touchstart', '.main_header__secondary_nav,.main_header__secondary_nav_body', function(e){
			let currentElem = $(e.target).attr('data-id');			
			e.stopPropagation();

			if( currentElem ) {
				$('.main_header__secondary_nav_body').addClass('opened');
				$('.main_header__secondary_nav li,.main_header__secondary_nav .featured_section').removeClass('active');
				$('[data-id="'+ currentElem +'"]').addClass('active');
			} 
		}).on('click touchstart', function(){
			vtObj.removeSecondaryNav();
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

	vtObj.closeMobileNav = function(){
		$('.page_container').removeClass('mobile_menu_opened');
		$('.mobile_nav').removeClass('sign_in_opened');
		vtObj.menuOpen = false;
	};

	vtObj.createSignin = function(){
		//$('.mobile_nav').addClass('sign_in_opened');
		$('[data-id="form_title_top"]').text('sign in');
		$('[data-id="forgot_password"]').removeClass('invisible');
		$('[data-text-left="form_title_left"]').text('create account');
		$('[data-text-right="form_title_right"]').addClass('hide');
	};

	vtObj.createAccount = function(){
		//$('.mobile_nav').addClass('sign_in_opened');
		$('[data-id="form_title_top"]').text('create an account');
		$('[data-id="forgot_password"]').addClass('invisible');
		$('[data-text-left="form_title_left"]').text('already have an account?');
		$('[data-text-right="form_title_right"]').removeClass('hide');
	};

	vtObj.removeAccountMenu = function() {
		window.clearTimeout(vtObj.mobileFormTimer);
		$('.mobile_nav').removeClass('sign_in_opened');
		vtObj.mobileFormTimer = window.setTimeout(function(){
			//vtObj.createSignin();
		}, 200);
	};

	vtObj.removeSecondaryNav = function(e) {
		$('.main_header__secondary_nav_body').removeClass('opened');
		$('[data-id="account_content"]').removeClass('active');
		
	};
	// vtObj.delayMobileFormChanges = function(callback) {
		
	// 	if (typeof callback === 'function' ) {
	// 		callback();
	// 	}
	// };

})();







