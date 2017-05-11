$.fn.counter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 1000,
        complete: ''
    }, options );

    var el = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
		duration: settings.duration,
		easing: settings.easing,
		step: function() {
			var mathCount = Math.ceil(this.count);
			el.text(mathCount);
		},
		complete: settings.complete
	});
};
function animate(){
	$('section:not(.animate)').each(function(){
		if( $(window).scrollTop() + $(window).height() * .67  >= $(this).position().top){
			$(this).addClass('animate').find('.counter').queue(function(){
				val = $(this).data('counter');
				$(this).counter({end: val, duration: 1000});
			});
		}
	});
};
$(window).load(function() {
    $('.page-loader').hide();
});
jQuery(document).ready(function($){
	animate();
    $('.content-wrap').css('margin-bottom', $('footer').height());
    $(window).scroll(function(){
		animate();
	});
    $('a.slider-arrow').click(function(event) {
        event.preventDefault();
        $('body').animate({ scrollTop: $('header').outerHeight() }, 1000);
    });
    $('.lightbox-trigger').click(function(event){
        event.preventDefault();
        $('.lightbox').hide();
        $(  "#" + $(this).data('lightbox') ).css('display', 'flex');
    });
    $('.lb-close').click(function(){
        $('.lightbox-content').hide();
    });
});
