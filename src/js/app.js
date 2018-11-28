function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).on('ready', function() {
  $('.center').slick({
  	  dots:true,
	  centerMode: true,
	  focusOnSelect: true,
	  centerPadding: '100px',
	  slidesToShow: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
  // testimonial slider
  $('.testimonials').slick({
  	  dots:true,
  	  arrows: false,
	  centerMode: true,
	  focusOnSelect: true,
	  centerPadding: '0px',
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	      	arrows: false,
	      	adaptiveHeight: true,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        adaptiveHeight: true,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

  $('a[data-slide]').click(function(e) {
   e.preventDefault();
   $('a[data-slide]').removeClass("active-slider");
   $(this).addClass("active-slider");
   var slideno = $(this).data('slide');
   $('.center').slick('slickGoTo', slideno - 1);
 });

  $('.centerMobile').slick({
  	  dots:true,
	  centerMode: true,
	  focusOnSelect: true,
	  centerPadding: '50px',
	  slidesToShow: 1,
	  mobileFirst: true,
	  responsive: [
	    {
	       breakpoint: 600,
	       settings: 'unslick'
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});

$(".feature_header").click(function(){
	closeNav();
  $('html, body').animate({
   scrollTop: $(".featured-work-space").offset().top
 }, 500);
});

$(".service_header").click(function(){
	closeNav();
  $('html, body').animate({
   scrollTop: $(".our-service").offset().top
 }, 500);
});