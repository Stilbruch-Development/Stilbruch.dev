$(window).resize(function(){
  // location.reload();
  $('html').css({"height": $(document).height()});
});

$(document).ready(function(){
/* ++++++++++++++++++++++++++++++++++++++++++++++  global  ++++++++++++++++++++++++++++++++++++++++++++++ */

$('html').css({"height": $(document).height()});

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

$(".navCancel ").on("click", function(){
  
  $(".navbar").css({

    "display": "flex",
    "flex-direction": "row",
    "justify-content": "space-around",
    "height": "50px" 
  });
  
  $(".navItem:not(.navLogo):not(.navMenu)").css({
    "display": "none"
  });
  
  $(".navMenu").css({
      "display": "block",
      "min-width": "45vw"
  }); 
});

// change background on scroll
$(function(){
  $(window).scroll(function() {
      var scroll = $(window).scrollTop(); // how many pixels scrolled
      var os = $('.mainLogo, .impressum h1').offset().top; // pixels to the top of .mainLogo
      var ht = $('.mainLogo, impressum h1').height(); // height of .mainLogo
      var nav = $('.navbar').height(); // height of .navbar in pixels
      
      // if scrolled further than the top of .mainLogo minus height of .navbar, add class navBackground to .navbar, otherwise remove class navBackground
      if(scroll > os - nav){
          $('.navbar').addClass('navBackground');
      } else {
        $('.navbar').removeClass('navBackground');
      };
  });
});

var nav = $('.navbar').height() + 30;

$("#e").on("click", function(x) {

  x.preventDefault();
  if (window.location.href != "http://localhost:3000/datenschutz" && window.location.href != "http://localhost:3000/impressum") {
    $("body, html").animate({ 
      scrollTop: $(".eGrid .gridHeader").offset().top - nav
    }, 300);
  } else {
    window.location.href = "/";
  }

});

$("#p").on("click", function(x) {

  x.preventDefault();
  if (window.location.href != "http://localhost:3000/datenschutz" && window.location.href != "http://localhost:3000/impressum") {
    $("body, html").animate({ 
      scrollTop: $(".pGrid .gridHeader").offset().top - nav
    }, 300);
  } else {
    window.location.href = "/";
  }

});

$("#s").on("click", function(x) {

  x.preventDefault();
  if (window.location.href != "http://localhost:3000/datenschutz" && window.location.href != "http://localhost:3000/impressum") {
    $("body, html").animate({ 
      scrollTop: $(".sGrid .gridHeader").offset().top - nav
    }, 300);
  } else {
    window.location.href = "/";
  }
});


$("#k, .fk").on("click", function(x) {

  x.preventDefault();
  if (window.location.href != "http://localhost:3000/datenschutz" && window.location.href != "http://localhost:3000/impressum") {
    $("body, html").animate({ 
      scrollTop: $(".kGrid .gridHeader").offset().top - nav
    }, 300);
  } else {
    window.location.href = "/";
  }
});

$('.cancel')
  .on('click', function() {
    $('.flash').hide();
  })
;

/* ++++++++++++++++++++++++++++++++++++++++++++++  Cookie Banner CookieConsent.insites  ++++++++++++++++++++++++++++++++++++++++++++++ */

window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "rgba(24, 24, 24, 0.8)"
      },
    },
    "type": "opt-out",
    "content": {
      href: "/datenschutz",
      header: 'Cookies auf dieser Webseite',
      message: 'Diese Webseite verwendet Cookies um sie für Sie optimal zu gestalten und fortlaufend verbessern zu können.',
      dismiss: 'Habe ich vestanden.',
      allow: 'Ok, stimme zu.',
      deny: 'ablehnen',
      link: 'Mehr über Cookies und Datenschutz erfahren.',
      close: '&#x274c;',
      policy: 'Cookie Infos',
      target: '_blank',
    }
  })
});

/* ++++++++++++++++++++++++++++++++++++++++++++++  end of main.js  ++++++++++++++++++++++++++++++++++++++++++++++ */
});