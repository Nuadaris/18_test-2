const defaultSelect = () => {
  const element = document.querySelector('.choices');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
};

defaultSelect();

$( function() {
  $( ".guest__group" ).accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: false,
      });
  });

document.querySelectorAll('.guest__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
document.querySelectorAll('.guest__btn').forEach(function(btn){
  btn.classList.remove('guest__btn--active')});
  e.currentTarget.classList.add('guest__btn--active');
document.querySelectorAll('.guest__card').forEach(function(tabsBtn){
    tabsBtn.classList.remove('guest__card--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guest__card--active');
  });
});

document.querySelector('.show-more').addEventListener('click', function () {
  var elements = document.getElementsByClassName('podcast__card');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("podcast__card--active");
  }
});

const btnClose = document.querySelector('.show-more');
  btnClose.addEventListener('click', function() {
  btnClose.innerHTML =
    (btnClose.innerHTML === 'Скрыть') ? btnClose.innerHTML = 'Ещё подкасты' : btnClose.innerHTML = 'Скрыть';
});

const swiper = new Swiper('.about__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: '.about__button-prev',
    nextEl: '.about__button-next',
  },
});

document.querySelector('.btn-left').addEventListener('click', function () {
  document.querySelector('.btn-left .stop').classList.toggle('stop--active')
});

document.querySelector('.btn-right').addEventListener('click', function () {
  document.querySelector('.btn-right .stop').classList.toggle('stop--active')
});

let podcastPlay = document.querySelectorAll('.podcast__item-play');
    podcastPlay.forEach(function(el) {
      el.addEventListener('click', function(ev) {
        ev.stopPropagation();
        podcastPlay.forEach(el => { if (el != this) { el.classList.remove('podcast__item-play--active') }; });
        this.classList.toggle('podcast__item-play--active');
  });
});