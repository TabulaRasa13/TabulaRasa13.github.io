$(document).ready(function() {
	$(".button-mnu").on('click',function(){
		$(".mobile-line").toggleClass("active");
		$("#menu").toggleClass("nav-mobile-show");	
	});
	
	
	
	var headerH = $("#js-header").height();
	var newH = headerH - 50;
	$(document).on("scroll", function(){
		var documentScroll = $(this).scrollTop();
		if(documentScroll>newH){
			$("#js-fixed-nav").addClass("fixed");
			$("#js-header").addClass("nav-fixed");
		}else{
			$("#js-fixed-nav").removeClass("fixed");
			$("#js-header").removeClass("nav-fixed");
		}
		
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
	
	
	// Add smooth scrolling to all links in navbar + footer link
	  $("nav a").on('click', function(event) {
		 // Make sure this.hash has a value before overriding default behavior
		 if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			  scrollTop: $(hash).offset().top
			}, 900, function(){

			  // Add hash (#) to URL when done scrolling (default click behavior)
//			  window.location.hash = hash;
			});
		 } // End if
	  });


	
	
	
});


