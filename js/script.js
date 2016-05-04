$(document).ready(function() {

	$("#enter").click(function() {
		$("#main").fadeOut(1800);
		$("#grid").fadeIn(100);
	});


//leatherback
	$("#leatherback").click(function() {
		$("#leatherback_img").fadeTo(100, 0);
		$("#container_leatherback").fadeIn(1300);
	});

	$("#close_leatherback").click(function() {
		$("#container_leatherback").fadeOut(1300);
	});

//rhino
	$("#rhino").click(function() {
		$("#rhino_img").fadeTo(100, 0);
		$("#container_rhino").fadeIn(1300);
	});

	$("#close_rhino").click(function() {
		$("#container_rhino").fadeOut(1300);
	});

//gorilla
	$("#gorilla").click(function() {
		$("#gorilla_img").fadeTo(100, 0);
		$("#container_gorilla").fadeIn(1300);
	});

	$("#close_gorilla").click(function() {
		$("#container_gorilla").fadeOut(1300);
	});

//tiger
	$("#tiger").click(function() {
		$("#tiger_img").fadeTo(100, 0);
		$("#container_tiger").fadeIn(1300);
	});

	$("#close_tiger").click(function() {
		$("#container_tiger").fadeOut(1300);
	});

//tuna
	$("#tuna").click(function() {
		$("#tuna_img").fadeTo(100, 0);
		$("#container_tuna").fadeIn(1300);
	});

	$("#close_tuna").click(function() {
		$("#container_tuna").fadeOut(1300);
	});


});