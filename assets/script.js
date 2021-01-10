// var swiper = new Swiper('.swiper-container', {
//     effect: 'cube',
//     grabCursor: true,
//     cubeEffect: {
//       shadow: true,
//       slideShadows: true,
//       shadowOffset: 20,
//       shadowScale: 0.94,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

/*--------callout middle--------*/

$(function(){
  $('[data-callout-hover-reveal]').hover(function(){
    $(this).find('.callout-footer').slideDown(250);
      },function(){
    $(this).find('.callout-footer').slideUp(250);
    });
  })
  
  /***-----------------------new card--------------------------- */