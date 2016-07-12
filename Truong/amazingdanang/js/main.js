

// if ($(window).width() <= 960 && $(window).height <= 640) { /* ... */ }
// function scrollTop(){
// 		var documentElem = $ (document),
// 		nav = $('nav'),
// 		lastScrollTop = 0;
// 		var width = screen.width;
// 		documentElem.on('scroll',function() {
// 			var currenScrollTop = $(this).scrollTop();

// 			if(currenScrollTop > lastScrollTop){
// 				if(width<768){
// 					nav.removeClass('navbar-fixed-top');
// 				}
				
				
// 			} 
// 			else {
// 				nav.addClass('navbar-fixed-top');
				
// 			}

// 			lastScrollTop = currenScrollTop;
// 		});
// 	}

$(document).on('scroll',function() {
      var lastScrollTop = 0;
      var currenScrollTop = $(this).scrollTop();

      if((currenScrollTop - lastScrollTop) >100){
        $('#nav-top-1').addClass('navbar-content-1');
        $('#nav-top-2 li a').addClass('navbar-content-1');
        $('#back-top').removeClass('hidden');
        
      } 
      else {
       $('#nav-top-1').removeClass('navbar-content-1');
       $('#nav-top-2  li a').removeClass('navbar-content-1');
       $('#back-top').addClass('hidden');
      }

      lastScrollTop = currenScrollTop;

    });
$(document).ready(function(){

  $('a[href*=#]:not([href=#])').not('#carousel-id a, .modal-trigger a, .panel a ').click(function(o){
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname.replace(/^\//, '') == this.hostname.replace(/^\//, '')) {
    
    var target= $(this.hash);
    target = target.length ? target : $('[name=]' + this,hash.slice(1)+ ']');
    if (target.length){
        if ($(".navbar").css("position") == "fixed"){
            $('html,body').animate({
                scrollTop:target.offset().top -72
            },1000,'swing');
        } else {
            $('html,body').animate({
                scrollTop:target.offset().top
            },1000,'swing');
        }
        return false;
    }
    }
});

    $('.banner').slick({
    
    prevArrow: '.btn-prev1',
    nextArrow: '.btn-next1',
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.main-slider-img').slick({
    prevArrow: '.btn-prev',
    nextArrow: '.btn-next',
    dots:true,
	  infinite: true,
	  autoplay: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
   
  });
$('.footer-slider').slick({
    prevArrow: '.sss',
    nextArrow: '.sss',
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll:4,
        infinite: true,
         
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
   
  });




});
	