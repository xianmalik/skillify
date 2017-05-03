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

function scrolled(el) {
}
jQuery(document).ready(function($){
    $('.content-wrap').css('margin-bottom', $('footer').height());

    $(window).scroll(function() {
        $('section:not(.animate)').each(function(){
            if( $(window).scrollTop() + $(window).height() * .67  >= $(this).position().top){
                $(this).addClass('animate').find('.counter').queue(function(){
                    val = $(this).data('counter');
                    $(this).counter({end: val, duration: 1000});
                });
            }
        });
    });
    $('a.slider-arrow').click(function(event) {
        event.preventDefault();
        $('body').animate({ scrollTop: $('#Slider').height() }, 1000);
    });
});
