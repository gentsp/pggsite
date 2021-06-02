$(document).ready(function () {
  $("#hero").not(".non-slider").bxSlider();

  $(".hamburger").click(function(e) {
		$(this).toggleClass("active");
    $("#main-nav").toggleClass("active");
		$("body").toggleClass("active-menu");
	});
});
