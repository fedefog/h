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

    $('.rules-slider').flexslider({
        animation: "fade",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: true
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
			
				$('.process-section').each( function(i){
            var bottom_of_object =  $(this).offset().top + $(this).outerHeight()-300;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            //console.log(bottom_of_window);
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('refresh');
            }
				});
				
    });
		
	
	/*Our Process section*/
		var slideActive = 1;
		var timer;
	
		function refreshProcess() {
			process();
			timer = setTimeout(refreshProcess, 5000);
			if($('.process-section').hasClass('refresh')){
				rightSlide();
				console.log(timer);
			}
    }
    refreshProcess();
	
		$('.process-section .flex-control-nav li a').click(function(){
			slideActive = parseInt($(this).attr('id'));
			process();
			clearTimeout(timer);
			console.log(timer);
		});
	
		$('.left-slide').click(function(){
			if(slideActive!=1){
				slideActive--;
			}
			else{
				slideActive = 5;
			}
			process();
			
		});
	
		function rightSlide(){
			if(slideActive!=5){
				slideActive++;
			}
			else{
				slideActive = 1;
			}
			process();
			
		}
	
		$('.right-slide').click(function(){
			rightSlide();
		});
		
		function process(){
			$('.process-number').html(slideActive);
			$('.process-number').removeClass('fade-number');
			setTimeout(function(){$('.process-number').addClass('fade-number'); }, 0);
			
			$('.process-section .flex-control-nav li a').removeClass('flex-active');
			$('.process-section .flex-control-nav li:nth-of-type('+slideActive+') a').addClass('flex-active');


			$('.process-section .slides li').removeClass('first-slide main-slide last-slide');


			$('.process-section .slides li:nth-of-type('+slideActive+')').addClass('main-slide');

			if(slideActive!=1){
				$('.process-section .slides li:nth-of-type('+(slideActive-1)+')').addClass('first-slide');
			}
			else{
				$('.process-section .slides li:nth-of-type('+(5)+')').addClass('first-slide');
			}

			if(slideActive!=5){
				$('.process-section .slides li:nth-of-type('+(slideActive+1) +')').addClass('last-slide');
			}
			else{
				$('.process-section .slides li:nth-of-type('+(1) +')').addClass('last-slide');
			}

			$('.process-section .slides .process-info').removeClass('custom-animate');

			setTimeout(function(){$('.process-section .slides .last-slide .process-info').addClass('custom-animate'); }, 0);
			setTimeout(function(){$('.process-section .slides .main-slide .process-info').addClass('custom-animate'); }, 250);
			setTimeout(function(){$('.process-section .slides .first-slide .process-info').addClass('custom-animate'); }, 500);
			
			var processTitle = $('.process-section .slides .main-slide .process-info-title span').html();
			$('.process-section .process-title').html(processTitle);
			
			$('.process-section .process-title').removeClass('fade-in');
			setTimeout(function(){$('.process-section .process-title').addClass('fade-in');}, 0);
		}
		
		
});

