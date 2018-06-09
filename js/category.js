$(document).ready(function(){
	$('body').on('click touchstart', '[data-id="category_filter_button"]', function(){
		$('.category__filter_body').toggleClass('opened');
	}).on('click', '[data-id="category_description_item"]', function(){
		$('.category__page_description_list dd').removeClass('opened');
		$(this).addClass('opened');
	}).on('click', '.scroll_top_button', function(){
		$('html, body').animate({scrollTop: 40});
	});
});