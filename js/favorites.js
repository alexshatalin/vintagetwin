$(document).ready(function() {
	$('.favorite_button').on('click', function() {
		$(this).children('i').toggleClass('far fas');
	});
});