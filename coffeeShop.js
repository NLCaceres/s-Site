$(document).ready(function() {

	$('.nav-item').click(function() {

		var name = $(event.target).text();
		var id = "#" + name.toLowerCase();
		console.log(id);

		$('html, body').animate({
			scrollTop: $(id).offset().top}, 1000);
	});

});