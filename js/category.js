$(document).ready(function(){
	let $checkBoxes = $('input[type="checkbox"]'),
		$grid = $('.grid').isotope({
		  itemSelector: '.grid_item',
		  sortBy: 'random',
		  layoutMode: 'masonry',
		});

	$('body').on('click touchstart', '.category_filter_container', function(e){
		e.stopPropagation();
		if( ($(e.target).attr('data-id') != undefined) && ($(e.target).attr('data-id') == 'category_filter_button') ) {			
			$('.category__filter_body').toggleClass('opened');
		}
	}).on('click touchstart', '[data-id="category_description_item"]', function(){
		$('.category__page_description_list dd').removeClass('opened');
		$(this).addClass('opened');
	}).on('click touchstart', '.scroll_top_button', function(){
		$('html, body').animate({scrollTop: 40});
	}).on('click touchstart', '.reset_all_button', function(){
		$checkBoxes.removeAttr('checked');
		$grid.isotope({ filter: '*' });
	}).on('click', function(){
		$('.category__filter_body').removeClass('opened');
	});

	$checkBoxes.change( function() {
		// map input values to an array
		let inclusives = [];
		// inclusive filters from checkboxes
		$checkBoxes.each( function( i, elem ) {
			// if checkbox, use value if checked
			if ( elem.checked ) {
				inclusives.push( elem.value );
			}
		});

		let filterValue = inclusives.length ? inclusives.join(', ') : '*';	
		$grid.isotope({ filter: filterValue });

	});

});