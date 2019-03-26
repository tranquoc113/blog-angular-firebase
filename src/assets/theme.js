// ;(function($) {
//     "use strict";
//
//     //* Navbar Fixed
//     function navbarFixed(){
//         if ( $('.main_header_area').length ){
//             $(window).on('scroll', function() {
//                 var scroll = $(window).scrollTop();
//                 if (scroll >= 120 ) {
//                     $("#header").addClass("navbar_fixed");
//                 } else {
//                     $("#header").removeClass("navbar_fixed");
//                 }
//             });
//         };
//     };
//
//     // Scroll to top
//     function scrollToTop() {
//         if ($('.scroll-top').length) {
//             $(window).on('scroll', function () {
//                 if ($(this).scrollTop() > 200) {
//                     $('.scroll-top').fadeIn();
//                 } else {
//                     $('.scroll-top').fadeOut();
//                 }
//             });
//             //Click event to scroll to top
//             $('.scroll-top').on('click', function () {
//                 $('html, body').animate({
//                     scrollTop: 0
//                 }, 1000);
//                 return false;
//             });
//         }
//     }
//
//
//
//
//     navbarFixed ();
//     scrollToTop ();
// })(jQuery);
