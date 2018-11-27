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
  $('a[data-slide]').click(function(e) {
   e.preventDefault();
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

// $("a.nav-link").click(function(){
// 	console.log(this);
// });
