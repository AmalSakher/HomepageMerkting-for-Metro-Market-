  
  // $(document).ready(function(){
  //   $('.cover_website').slick({
  //       rtl:true,
  //       centerMode: true,
  //       centerPadding: '20px',
  //       slidesToShow: 1,
  //       responsive: [
  //         {
  //           breakpoint: 768,
  //           settings: {
  //             arrows: false,
  //             centerMode: true,
  //             centerPadding: '40px',
  //             slidesToShow: 3
  //           }
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             arrows: false,
  //             centerMode: true,
  //             centerPadding: '40px',
  //             slidesToShow: 1
  //           }
  //         }
  //       ]
  //   });
  // });
  // $('.cover_website').slick();
  // $('.cover_website').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ]
  // });

// $(function(){
//     $('.multiple-items').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true,
//         autoplays:true,
//         autoplaySpeed: 1000,
//         dots: false,
//         centerMode: true,
//         centerPadding: '0',
//       });

// });
$('.cover_website').slick({
  rtl: true
});
$('.daily_offers').slick({
  slidesToShow: 5,
  slidesToScroll: 3,
  rtl: true,
  arrows: true,
  
});
$('.Featured_Products').slick({
  slidesToShow: 5,
  slidesToScroll: 3,
  rtl: true,
  arrows: true
});
