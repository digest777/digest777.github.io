$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main_mnu_hidden").slideToggle();
		return false;
	});

	$(function() {
		$(".btn_slide").click(function() {
			$(".panel").slideToggle("slow");
			$(this).toggleClass("active"); return false;
		});
	});

	$("footer .rights .up a").click(function() {
		$("html, body").animate({
			scrollTop : $("header .top-line").offset().top
		}, 800);
	});

	$(".main_content a.up").click(function() {
		$("html, body").animate({
			scrollTop : $(".main_content aside").offset().top
		}, 800);
	});

});
