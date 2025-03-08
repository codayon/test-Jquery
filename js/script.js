// Single Item
$(".singleItem").slick({
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-circle-chevron-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-circle-chevron-right next"></i>',
});

// Autoplay;
$(".autoplayImage").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-circle-chevron-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-circle-chevron-right next"></i>',
});
