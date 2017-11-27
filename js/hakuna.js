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
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: true
    });

    $('.rules-slider').flexslider({
        animation: "fade",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: true
    });
    
    /* Function for second blocks after hero section */

    custom_refresh( '1000' );

    function custom_refresh( speed ) {
    	setTimeout(function(){$(".refresh-animate").addClass("custom-animate"); }, speed );
    }
        
    /* See more work loading*/

    var counter_works = 2; 

    $( ".see-more-work-js" ).click(function( event ) {
      event.preventDefault();
	  $( ".works-container-row" + counter_works + "-js" ).load( "works-" + counter_works + ".php", function( response, status, xhr ) {
	  	  custom_refresh('500');
		  if ( status == "error" ) {
		    var msg = "Sorry but there was an error: ";
		    $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
		  }
		});
	  	if( counter_works == 3 ){
            $(this).fadeOut("fast");
        }
	  	counter_works++;
	});

	/* Function for scroll down */

	$( ".scroll-btn-js" ).click(function( event ) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 800, 'easeInOutCubic');

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
		});
	
		$('.left-slide').click(function(){
			if(slideActive!=1){
				slideActive--;
			}
			else{
				slideActive = 5;
			}
			process();
			clearTimeout(timer);
            $(".process-info").removeClass("to-right");
            $(".process-info").addClass("to-left");
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
			clearTimeout(timer);
		});
		
		function process(){
            $(".process-info").addClass("custom-animate");
            
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
            
            $(".process-info").removeClass("to-left");
            $(".process-info").addClass("to-right");
			
			var processTitle = $('.process-section .slides .main-slide .process-info-title span').html();
			$('.process-section .process-title').html(processTitle);
			
			$('.process-section .process-title').removeClass('fade-in');
			setTimeout(function(){$('.process-section .process-title').addClass('fade-in');}, 0);
		}
		
});

/* SHOW/HIDE header plugin */

$(document).ready(function() {
	var mainHeader = $('.cd-auto-hide-header'),
		secondaryNavigation = $('.cd-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();
	
	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}

		var scroll = $(window).scrollTop();

	    if (scroll >= 50) {
	        $(".cd-auto-hide-header").addClass("small");
	    } else {
	        $(".cd-auto-hide-header").removeClass("small");
	    }

	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
	    if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
	    }
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
		
		if (previousTop >= currentTop ) {
	    	//if scrolling up... 
	    	if( currentTop < secondaryNavOffsetTop ) {
	    		//secondary nav is not fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('fixed slide-up');
	    		belowNavHeroContent.removeClass('secondary-nav-fixed');
	    	} else if( previousTop - currentTop > scrollDelta ) {
	    		//secondary nav is fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}
	    	
	    } else {
	    	//if scrolling down...	
	 	  	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
	 	  		//hide primary nav
	    		mainHeader.addClass('is-hidden');
	    		secondaryNavigation.addClass('fixed slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	} else if( currentTop > secondaryNavOffsetTop ) {
	    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    }
	}
});

