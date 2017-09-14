// window.onload = function() {

	// scroll btns
	$(".bottom_section .scroll").click(function() {
		var block_height = $(".hello_section").height(); 
		console.log(block_height)
	    $('html, body').animate({
	        scrollTop: block_height
	    }, 700);
	});	
	$(".arrow-up").click(function() {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 700);
	});	

// }