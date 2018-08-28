$(document).ready(function(){
/* ++++++++++++++++++++++++++++++++++++++++++++++  global  ++++++++++++++++++++++++++++++++++++++++++++++ */

$('html').css({"height": $(document).height()});

$(window).resize(function() {
  $('html').css({"height": $(document).height()});
});

/* ++++++++++++++++++++++++++++++++++++++++++++++  navigation bar  ++++++++++++++++++++++++++++++++++++++++++++++ */
$(".navMenu ").on("click", function(){
  
  $(".navbar").css({
     "display": "grid",
     "grid-template-areas": '"logo" "entwicklung" "projekte" "story" "kontakt" "cancel"',
     "grid-template-columns": "minmax(80vw, auto)",
     "grid-auto-rows": "40px",
     "grid-row-gap": "10px",
     "height": "auto",  
    });
    
  $(".navItem").css({
    "display": "block"
  });
  
  $(".navMenu").css({
    "display": "none"
  }); 
});

// change background on scroll
$(function(){
  $(window).scroll(function() {
      var scroll = $(window).scrollTop(); // how many pixels scrolled
      var os = $('.mainLogo').offset().top; // pixels to the top of .mainLogo
      var ht = $('.mainLogo').height(); // height of .mainLogo
      var nav = $('.navbar').height(); // height of .navbar in pixels
      
      // if scrolled further than the top of .mainLogo minus height of .navbar, add class navBackground to .navbar, otherwise remove class navBackground
      if(scroll > os - nav){
          $('.navbar').addClass('navBackground');
      } else {
        $('.navbar').removeClass('navBackground');
      };
  });
});

/* ++++++++++++++++++++++++++++++++++++++++++++++  footer  ++++++++++++++++++++++++++++++++++++++++++++++ */

$(function() {
  $('.footer-links-holder h3').click(function () {
    $(this).parent().toggleClass('active');
  });
});

/* ++++++++++++++++++++++++++++++++++++++++++++++  end of main.js  ++++++++++++++++++++++++++++++++++++++++++++++ */
});