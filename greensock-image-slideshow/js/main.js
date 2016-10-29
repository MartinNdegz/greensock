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




	}
		// run the init function
	init();
	
})(jQuery); 