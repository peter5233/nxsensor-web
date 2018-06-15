// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";

        // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
        var mainbottom = $('#main').offset().top;

        // on scroll,
        $(window).on('scroll',function(){
          // we round here to reduce a little workload
          stop = Math.round($(window).scrollTop());
          if (stop > mainbottom) {
              $('.navbar').addClass('past-main');
              document.getElementById("brand-img").src="./img/nxsensor-logo-blue.png";
          } else {
              $('.navbar').removeClass('past-main');
              document.getElementById("brand-img").src="./img/nxsensor-logo-white.png";
          }
        });

        // Collapse navbar on click
        $(document).on('click.nav','.navbar-collapse.in',function(e) {
          if( $(e.target).is('a') ) {
            $(this).removeClass('in').addClass('collapse');
        }
      }
  );


  /*-----------------------------------
  ----------- Scroll To Top -----------
  ------------------------------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('#back-top').click(function(){
    $('#back-top').tooltip('hide');
    $("html, body").animate({ scrollTop: 0 }, 1000);
      // $('#back-top').fadeIn();
      return false;
  });


  /* --------- Wow Init ------ */
  new WOW().init();


});
