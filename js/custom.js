$(function() {
	window.scrollReveal = new scrollReveal();
	"use strict";
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});

	// Backstretchs
	$("#header").backstretch("images/3.jpg");
	$("#services").backstretch("images/2.jpg");
	
	// Countdown
	$('.countdown').downCount({
		date: '08/08/2016 00:00:00',
		offset: +5.5
	});			
    
});
