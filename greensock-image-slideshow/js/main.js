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
		var tl = new TimelineLite(),
		 	slideOutH1 = slideOut.find('h1'),
		 	slideOutP = slideOut.find('p'),
		 	slideInH1 = slideIn.find('h1'),
		 	slideInP = slideIn.find('p');

		//go to the next slide timeline
		tl 
			.set(slideIn, {y: 100%, autoAlpha: 1, className: '+=active'})
			.set(slideOut, {className: '-=active'})
			.to(slideOut, 0.5 {y: '-100%', ease:Power3.easeInOut}, 0)
			.to(slideIn, 0.5 {y: '-=100%', ease:Power3.easeInOut}, 0);


	}

		//Navigation Click - go to the next slide
	$slideNavNext.click(function(e){
		e.preventDefault();

		var slideOut = $('.homeSlide.active'),
			slideIn = $('.homeSlide.active').next('.homeSlide');

		goToNextSlide(slideOut, slideIn);

	});

	
})(jQuery); 