//resize

isResize('.header__form-info', '.header__form', '.header__infos', 768, 'first', 'last');

window.addEventListener('resize', () => {
  isResize('.header__form-info', '.header__form', '.header__infos', 768, 'first', 'last');
});

//slider

const swiper = new Swiper('.slider__items', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.slider__arrow-r',
    prevEl: '.slider__arrow-l',
  },
});

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 130,
      behavior: 'smooth',
    });
  });
}
