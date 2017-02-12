// Parallax background effect
$(function() {
	//Cache the window object
	var $window = $(window);

	$('section[data-type="background"]').each(function() {
		var $bgobj = $(this); //assigning the object
		$window.scroll(function() {
			//scroll the background at var speed
			//the yPos is a negative value because we're scrolling it UP!
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			//Put together our final background position
			var coords = '50% ' + yPos + 'px';

			//Move the background
			$bgobj.css({ backgroundPosition: coords });
 		});
	});
});


// Nav collapse when scroll down
$(window).scroll(function(){
	if($('.navbar').offset().top > 50) {
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
});


// Page Scroll Effect
$(function(){
	$('a.page-scroll').bind('click', function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});
});

