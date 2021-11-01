$(document).ready(function() {

	$(window).scroll(function() {
		/* Act on the event */
		if( $(this).scrollTop() > 40 ){
			$("#scroll_to_top").fadeIn();
		} else {
			$("#scroll_to_top").fadeOut();
		}
	});


	$("#scroll_to_top").click(function() {
		/* Act on the event */
		$('html, body').animate({scrollTop : 0}, 'smooth');
	});

});