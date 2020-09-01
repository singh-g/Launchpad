(function($) {
  $(document).ready(() => {
    // Toggle a class to open the menu
    $('.js-hamburger-wrapper').on('click', function() {
      $('.js-hamburger-wrapper').toggleClass('isOpen');
      $('.l-header').toggleClass('menuOpen');
      if ($('.js-hamburger-wrapper').hasClass('isOpen')) {
        $('.js-hamburger-text p').text('Close');
      } else {
        $('.js-hamburger-text p').text('Menu');
      }
    });

    /* Set a class when the user has scrolled the page
     *  This allows a bg colour for the header
     */
    window.addEventListener('scroll', function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 20) {
        $('.l-header').addClass('isFixed');
      } else {
        $('.l-header').removeClass('isFixed');
      }
    });
  });
})(jQuery);
