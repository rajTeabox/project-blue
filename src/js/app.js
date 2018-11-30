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
  $('.testimonials,.banner-slick').slick({
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
   scrollTop: $(".featured-work-space").offset().top - 80
 }, 500);
});

$(".service_header").click(function(){
	closeNav();
  $('html, body').animate({
   scrollTop: $(".our-service").offset().top - 80
 }, 500);
});

$(".Contact_Us").click(function(){
	$("a").removeClass('active-item');
	closeNav();
  $('html, body').animate({
   scrollTop: $(".lets-talk").offset().top - 80
 }, 500);
});

$(".scroll-team").click(function(){
	closeNav();
  $('html, body').animate({
   scrollTop: $(".our-team").offset().top - 80
 }, 500);
});

$("a.header-hover").click(function(e) {
	$("a").removeClass('active-item');
	$(this).addClass('active-item');
});

$("a.header-hover-feature").click(function(e) {
	$("a").removeClass('active-item-feture');
	$(this).addClass('active-item-feture');
});

(function() {
  $(document).ready(function() {
    return $('#contact-form').submit(function(e) {
    	debugger;
      var email, message, name, phone;
      name = document.getElementById('inputName');
      email = document.getElementById('inputEmail');
      phone = document.getElementById('inputPhone');
      message = document.getElementById('inputMessage');
      if (!name.value || !email.value || !phone.value) {
        alertify.error('Please check your entries');
        return false;
      } else {
      	/*  URL has to be integrated with their account
		   Steps To Follow
		   https://www.npmjs.com/package/html-form-send-email-via-google-script-without-server */

      	var url = 'https://script.google.com/macros/s/AKfycbwYJPQFoX9FfWncNibnGDYj2nf0EoYqnTDM_0b5Nw/exec';
        $.ajax({
          method: 'POST',
          url: url,
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        return alertify.success('Message sent');
      }
    });
  });

}).call(this);
