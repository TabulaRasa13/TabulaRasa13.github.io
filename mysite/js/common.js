$(document).ready(function() {
	
/* ====================Мобильное меню ========================*/
	
	$(".button-mnu").on('click',function(){
		$(".mobile-line").toggleClass("active");
		$("#menu").toggleClass("nav-mobile-show");
	});
	
	$("nav a").on('click', function(event) {
		var statusM = $("#menu").hasClass("nav-mobile-show");
		if (statusM) {
			$("#menu").removeClass("nav-mobile-show");
			$(".mobile-line").removeClass("active");
		}
	}); 
	
//		jQuery(function($){
//	$(document).mouseup(function (e){ // событие клика по веб-документу
//		var div = $(".nav-mobile-show"); // тут указываем ID элемента
//		if (!div.is(e.target) // если клик был не по нашему блоку
//		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
//			div.removeClass("nav-mobile-show");
//			$(".mobile-line").removeClass("active");// скрываем его
//		}
//	});
//});
	
/* ====================Хедер фикс ========================*/	
	
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
	
	
/* ==================== Аккардеон ========================*/		
	$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
    });
  });
	
/* ==================== До и После ========================*/		
$('#widget').draggable();
	
/* ==================== Слик слайдер ========================*/		
	$('.slider-slick').slick({
	autoplay: false,
	autoplaySpeed: 2000,
	speed: 1000,
//	rows: 2,
	dots: true,
	slidesToShow: 1,
});

	
/* ====================FAQ ========================*/

//     $(".js-faq-title").on("click", function(e) {
//
//        e.preventDefault();
//        var $this = $(this),
//            answerId = $this.attr("href");
//
//        if( !$this.hasClass("active") ) {
//            $(".js-faq-content").slideUp();
//            $(".js-faq-title").removeClass("active");
//        }
//
//        $this.toggleClass("active");
//        $(answerId).slideToggle();
//    });
	
	
/* ====================FAQ 2 ========================*/	
	
	 $(".set > a").on("click", function(e){
		 e.preventDefault();
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    }else{
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(".set > a").removeClass("active");
    $(this).addClass("active");
    $('.content').slideUp(200);
    $(this).siblings('.content').slideDown(200);
    }
    
  });
	
	
	
	
	
	
/* ==================== Модальное и форма ========================*/	
	
		$("a[href='#popup-modal']").click(function(){
		$("#callback .formname").val($(this).data("form"));
	});
	
$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".form-tnx").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			$(".form-tnx").removeClass("visible");
			$.magnificPopup.close();
			}, 2000);
		});
		return false;
	});
	
	
/* ==================== Модальное ========================*/		

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
	
	
	
/* ==================== Плавный скрол ========================*/		
	
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

	  $(window).scroll(function() {
		 $(".slideanim").each(function(){
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			  if (pos < winTop + 600) {
				 $(this).addClass("slides");
			  }
		 });
	  });
	
	
	
	
});