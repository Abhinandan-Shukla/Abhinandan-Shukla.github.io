$(document).ready(function() {

	handleNavBarClicks();
});

function handleNavBarClicks() {

	var navToggle = $('#nav-toggle');
	var navMenu = $('#nav-menu');
	var navContainer = navToggle.parents('.nav'); 


	//handling clicks on the
	//header toggle
	navToggle.click(function (e) {

		if (navToggle.hasClass('is-active')) {

			navToggle.removeClass('is-active');
			navMenu.removeClass('is-active');
			navContainer.removeClass('is-active');
		} else {

			navToggle.addClass('is-active');
			navMenu.addClass('is-active');
			navContainer.addClass('is-active');
		}
	});




}