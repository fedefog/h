$(document).ready(function() {

    /* Function for Clock on Footer */
    function clock() { 
      var t = moment().tz("America/Argentina/Buenos_Aires"),
          a = t.minutes() * 6,
          o = t.hours() % 12 / 12 * 360 + (a / 12);
      $(".hour").css("transform", "rotate(" + o + "deg)");
      $(".minute").css("transform", "rotate(" + a + "deg)");
    }
    function refreshClock() {
      clock(), setTimeout(refreshClock, 1000)
    }
    refreshClock();

    // Clock numbers by Fede 
    var time_2 = moment().tz("America/Argentina/Buenos_Aires").format('h:mm A');
    $('.numbers').text(time_2);

    /* slider */

    $('.testimonials-slider').flexslider({
        animation: "fade",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: false
    });

    $('.studio-slider').flexslider({
        animation: "fade",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: false
    });

    /* Functions working on Scroll */
    $(window).scroll( function(){

        /* Function for animate general elements */
        $('.hideme').each( function(i){
            var bottom_of_object =  $(this).offset().top + $(this).outerHeight()-300;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            //console.log(bottom_of_window);
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('custom-animate');
            }
        });

        /* Function for animate arrow elements */
        $('.anim-arrow').each( function(i){
            var bottom_of_object =  $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            //console.log(bottom_of_window);
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('custom-animate');
            }
        });

    });
		
		var slideActive = 1;
		$('.process-section .flex-control-nav li a').click(function process(){
			slideActive = $(this).attr('id');
			
			$('.process-section .flex-control-nav li a').removeClass('flex-active');
			$('.process-section .flex-control-nav li:nth-of-type('+slideActive+') a').addClass('flex-active');
			console.log(slideActive);
			
			
			$('.process-section .slides li').removeClass('first-slide main-slide last-slide');
			
			
			$('.process-section .slides li:nth-of-type('+(slideActive-1)+')').addClass('first-slide');
			$('.process-section .slides li:nth-of-type('+slideActive+')').addClass('main-slide');
			$('.process-section .slides li:nth-of-type('+(slideActive+1)+')').addClass('last-slide');
			
		});
	
});


