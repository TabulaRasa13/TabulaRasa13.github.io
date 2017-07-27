$(document).ready(function() {
	$(".button-mnu").on('click',function(){
		$(".mobile-line").toggleClass("active");
		$("#menu").toggleClass("nav-mobile-show");	
	});
	
	$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
    });
  } );
	
$('#widget').draggable();

	
	
	$('.slider-slick').slick({
	autoplay: false,
	autoplaySpeed: 2000,
	speed: 1000,
//	rows: 2,
	dots: true,
	slidesToShow: 1,
});

	
    /* FAQ
    ========================*/

    $(".js-faq-title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this),
            answerId = $this.attr("href");

        if( !$this.hasClass("active") ) {
            $(".js-faq-content").slideUp();
            $(".js-faq-title").removeClass("active");
        }

        $this.toggleClass("active");
        $(answerId).slideToggle();
    });

	
	

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});	
	
});