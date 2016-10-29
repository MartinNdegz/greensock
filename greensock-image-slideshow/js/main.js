(function($) {

	// setup variables
	var $activeSlide = $('.active'),
	    $homeSlide = $('.homeSlide'),
	    $slideNavPrev = $('.slideNavPrev'),
	    $slideNavNext = $('.slideNavNext'),
	    $slideNavPrevA = $('.slideNavPrev a'),
	    $slideNavNextA = $('.slideNavNext a'),
	    $hero = $('.hero');


	function init(){

		//hide all the slides apart from the active one
		TweenLite.set($homeSlide.not($activeSlide), {autoAlpha: 0});

       //disable arrow down on page load
        TweenLite.set($slideNavPrev, {autoAlpha: 0.2});


	}
		// run the init function
	init();

		// Go to next slide
	function goToNextSlide(slideOut, slideIn){

		
	}

		//Navigation Click - go to the next slide
	$slideNavNext.click(function(e){
		e.preventDefault();



		goToNextSlide(slideOut, slideIn);

	});

	
})(jQuery); 