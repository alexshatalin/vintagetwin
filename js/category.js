$(document).ready(function(){
	$('body').on('click touchstart', '.category__filter_section', function(e){
		e.stopPropagation();
		if( $(e.target).attr('data-id') == 'category_filter_button' ) {
			$('.category__filter_body').toggleClass('opened');
		}
	}).on('click', '[data-id="category_description_item"]', function(){
		$('.category__page_description_list dd').removeClass('opened');
		$(this).addClass('opened');
	}).on('click', '.scroll_top_button', function(){
		$('html, body').animate({scrollTop: 40});
	}).on('click', function(){
		$('.category__filter_body').toggleClass('opened');
	});

	// Isotope functions
	// Init layout
	let $grid = $('.grid').isotope({
	  itemSelector: '.grid_item',
	  layoutMode: 'fitRows'
	});

	$('.category__filter_body_content').on( 'click', 'label', function() {
		let filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});