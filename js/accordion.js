$(document).ready(function() {
    $('body').on('click', '.single_accordion_section', function(e){
        if( $(e.target).attr('data-id') != undefined && $(e.target).attr('data-id') == 'product_accordion_title' ) {
            $(this).toggleClass('inactive');
        }
    });
});