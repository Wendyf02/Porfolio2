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

/*--------swiper --------*/

// var swiper = new Swiper('.swiper-container', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',

//   },

//  });



/*--------callout middle--------*/

$(function(){
  $('[data-callout-hover-reveal]').hover(function(){
    $(this).find('.callout-footer').slideDown(250);
      },function(){
    $(this).find('.callout-footer').slideUp(250);
    });
  })
  
  /***-----------------------new card--------------------------- */