(function ($) {
	$.fn.vtSlider = function (options) {
		var obj = this;
		obj.defaults = {
			carousel: false,
			slider: false,
			fadeIn: false,
			main_pagination: false,
			secondary_pagination: false,
			button_hide: false,
			dur_time: 500
		};
		var opts = $.extend({}, obj.defaults, options);
		return obj.filter('[data-id="slider"]').each(function () {
			var container = $(this),
				mask = container.find(".slider_mask"),
				slides = container.find(".single_slide"),
				num_of_slides = slides.length,
				slide_index = 0,
				timer;
				container.animating = false;

			if ( true == opts.main_pagination ) {
				mask.before('<div class="prev_button"></div><div class="next_button"></div>');
			}		

			container.on("click", ".next_button", function () {
				if (container.animating) {
					return false;
				}
				container.animating = true;
				show_slides(1);
			});

			container.on("click", ".prev_button", function () {
				if (container.animating) {
					return false;
				}
				container.animating = true;
				show_slides(-1);
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
			}

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
});