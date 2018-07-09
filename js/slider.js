(function ($) {
	$.fn.vtSlider = function (options) {
		var obj = this;
		obj.defaults = {
			carousel: false,
			slider: false,
			slider_offset: false,
			itemes_displayed: false,
			mobile_items_displayed: false,
			tablet_items_displayed: false,
			fadeIn: false,
			main_pagination: false,
			secondary_pagination: false,
			thumbs_pagination: false,
			button_hide: false,
			dur_time: 500
		};
		var opts = $.extend({}, obj.defaults, options);
		return obj.filter('[data-id="slider"]').each(function () {
			var container = $(this),
				main_parent = container.children('.slider_content'),
				mask = container.find('.slider_mask'),
				slides = container.find('.single_slide'),
				num_of_slides = slides.length,
				slide_index = 0,
				slide_width = null,
				mask_offset = null,
				slide_margin = null,
				timer;
				container.animating = false;

			if ( true == opts.main_pagination ) {
				mask.before('<div class="prev_button"></div><div class="next_button"></div>');
			}	

			if( true == opts.thumbs_pagination) {
				thumbs_container = container.children('.thumbs');
				single_thumb = thumbs_container.children('li');
				$(single_thumb).on('click touchstart mouseenter', function(e) {
					let prev_index = $('.thumbs li.selected').index();
					slide_index = $(this).index();

					$('.thumbs li').removeClass('selected');
					$(this).addClass('selected');	
					if( prev_index < slide_index ) {
						move_slides(1, -1, prev_index, slide_index);
					} else {
						move_slides(-1, 1, prev_index, slide_index);
					}
				});
			}

			if( true == opts.slider ) {
				
				slide_margin = Math.abs(parseInt(main_parent.css('margin-left')));
				change_items_to_display(opts.itemes_displayed);

				$(window).on('resize', function(){
					obj.windowWidth = $(window).width();
					if( obj.windowWidth < 768 && false != opts.mobile_items_displayed ) {
						opts.itemes_displayed = opts.mobile_items_displayed;
						change_items_to_display(opts.itemes_displayed);

					} else if( (obj.windowWidth > 768 && obj.windowWidth < 1024)  && (false != opts.tablet_items_displayed) ) {
						opts.itemes_displayed = opts.tablet_items_displayed;
						change_items_to_display(opts.itemes_displayed);

					} else if( (obj.windowWidth > 1024 && obj.windowWidth < 1500)  && (false != opts.items_displayed) ) {
						opts.itemes_displayed = opts.itemes_displayed;
						change_items_to_display(opts.itemes_displayed);
					}

				});

				function change_items_to_display( $items_to_display ) {

					slide_width = parseInt(container.width() / $items_to_display );
					slides.css({width: slide_width});
					mask.css({
						'width': (slide_width + (slide_margin * 2)) * num_of_slides,
					});
				};

				
				// mask.css({
				// 	'width': (slide_width + (slide_margin * 2)) * num_of_slides,
				// });

				// if( true == opts.slider_offset ) {
				// 	mask_offset = (slide_width + (slide_margin * 2))  / 2; 
				// };

				// mask.css({
				// 	'width': (slide_width + (slide_margin * 2)) * num_of_slides,
				// 	//'margin-left': -mask_offset 
				// });
			}	

			container.on("click", ".next_button", function (e) {
				if (container.animating) {
					return false;
				}
				container.animating = true;
				show_slides(1);
				e.stopPropagation();
			});

			container.on("click", ".prev_button", function (e) {
				if (container.animating) {
					return false;
				}
				container.animating = true;

				show_slides(-1);
				e.stopPropagation();
			});

			container.on("mouseleave mouseenter", ".next_button, .prev_button", function () {
				clearTimeout(timer);
				container.animating = false;
			});

			function show_slides(n) {
				slide_index += n;
				if (true != opts.slider) {
					if (slide_index > num_of_slides - 1) {
						slide_index = 0;
					}
					if (slide_index < 0) {
						slide_index = num_of_slides - 1;
					}
				

					if (n > 0) {
						set_animation(function () {
							slides.eq(slide_index).css({
								left: n * 100 + "%"
							}).queue(function () {
								$(this).animate({
									left: "0"
								}, opts.dur_time).dequeue();
							});
							slides.eq(slide_index - 1).animate({
								left: "-100%"
							}, opts.dur_time);
						});
					}
					if (n < 0) {
						set_animation(function () {
							slides.eq(slide_index).css({
								left: n * 100 + "%"
							}).queue(function () {
								$(this).animate({
									left: "0"
								}, opts.dur_time).dequeue();
							});
							slides.eq(slide_index - (num_of_slides - 1)).animate({
								left: "100%"
							}, opts.dur_time);
						});
					}

				} else {
					if (slide_index > num_of_slides - opts.itemes_displayed ) {
						slide_index = num_of_slides - opts.itemes_displayed;
						
					} 

					if (slide_index < 0) {
						slide_index = 0;
					}

					if (n) {
						set_animation(function () {
							mask.animate({
								left: -(slide_index * (slide_width + (slide_margin * 2)))
							},opts.dur_time);
						});
					}
				} 
			}

			function move_slides(n, p, prev_index, slide_index) {
				set_animation(function () {
					slides.eq(slide_index).css({
						left: n * 100 + "%"
					}).queue(function () {
						$(this).animate({
							left: "0"
						}, opts.dur_time).dequeue()
					});
					slides.eq(prev_index).animate({
						left: p * 100 + "%"
					}, opts.dur_time);
				});
			};

			function set_animation(callback) {
				timer = setTimeout(function () {
					container.animating = false;
				}, opts.dur_time);
				if (typeof callback === "function") {
					callback();
				}
			}
		});
	};
})(jQuery);

$(document).ready(function(){
	$('.slider.hero').vtSlider({
		main_pagination: true,
		dur_time: 200
	});

	$('.slider.new_arrivals').vtSlider({
		main_pagination: true,
		slider: true,
		slider_offset: true,
		mobile_items_displayed: 4,
		tablet_items_displayed: 5,
		itemes_displayed: 6,
		dur_time: 200
	});

	$('.slider.instagram_slider').vtSlider({
		main_pagination: true,
		slider: true,
		mobile_items_displayed: 3,
		tablet_items_displayed: 4,
		itemes_displayed: 4,
		dur_time: 200
	});

	// $('.slider.suggested_products_slider').vtSlider({
	// 	main_pagination: true,
	// 	slider: true,
	// 	itemes_displayed: 6,
	// 	dur_time: 200
	// });

	// $('.slider.products_recently_viewed_slider').vtSlider({
	// 	main_pagination: true,
	// 	slider: true,
	// 	itemes_displayed: 6,
	// 	dur_time: 200
	// });

	// $('.slider.cart_favorites').vtSlider({
	// 	main_pagination: true,
	// 	slider: true,
	// 	itemes_displayed: 5,
	// 	dur_time: 200
	// });

	// $('.slider.recently_viewed').vtSlider({
	// 	main_pagination: true,
	// 	slider: true,
	// 	itemes_displayed: 1,
	// 	dur_time: 500
	// });

	// $('.slider.product').vtSlider({
	// 	main_pagination: true,
	// 	thumbs_pagination: true,
	// 	dur_time: 200
	// });

	
});