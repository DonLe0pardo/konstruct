const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-mobile');

burger.addEventListener('click', () => {
    menu.classList.toggle('header-mobile_active');
    burger.classList.toggle('burger_active');
});







$('.capabilities__content').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});







