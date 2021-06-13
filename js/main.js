$(document).ready(function () {
  $("#hero").not(".non-slider").bxSlider({
    touchEnabled: false
  });

  $(".hamburger").click(function(e) {
		$(this).toggleClass("active");
    $("#main-nav").toggleClass("active");
		$("body").toggleClass("active-menu");
	});

  $('.single-gallery').magnificPopup({type:'image', delegate: 'a.image-link', gallery:{enabled:true}});
});
