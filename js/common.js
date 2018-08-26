$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu-hidden").slideToggle();
		return false;
	});

	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		autoplay: true,
		loop: true,
		navText : ["<i class='fas fa-3x fa-angle-left'></i>","<i class='fas fa-3x fa-angle-right'></i>"]
	});

	$('.open-popup-link').magnificPopup({
		type:'inline',
  	midClick: true
	});

});
