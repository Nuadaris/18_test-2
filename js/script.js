const defaultSelect = () => {
  const element = document.querySelector('.choices');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
};

defaultSelect();

$(function () {
  $(".guest__group").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
});

document.querySelectorAll('.guest__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.guest__btn').forEach(function (btn) {
      btn.classList.remove('guest__btn--active')
    });
    e.currentTarget.classList.add('guest__btn--active');
    document.querySelectorAll('.guest__card').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('guest__card--active')
    });
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
btnClose.addEventListener('click', function () {
  btnClose.innerHTML =
    (btnClose.innerHTML === 'Скрыть') ? btnClose.innerHTML = 'Ещё подкасты' : btnClose.innerHTML = 'Скрыть';
});

const swiper = new Swiper('.about__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 30,
  breakpoints: {
    1267: {
      slidesPerView: 4,
    },

    1193: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },

    256: {
      slidesPerView: 2,
    },
  },

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
podcastPlay.forEach(function (el) {
  el.addEventListener('click', function (ev) {
    podcastPlay.forEach(el => {
      if (el != this) {
        el.classList.remove('podcast__item-play--active')
      };
    });
    this.classList.toggle('podcast__item-play--active');
  });
});

/* document.querySelector('.header__top-search').addEventListener('submit', function (e) {
  e.preventDefault();
}); */

let searchBtn = document.querySelector('.header__top-search');
let searchInput = document.querySelector('.header__top-input');

searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  searchInput.classList.toggle('header__top-input--active');
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__top-nav-list');
let menuLinks = menu.querySelectorAll('.header__top-nav-link');
let menuBottom = document.querySelector('.header__bottom-nav-list');
let menuLinksBottom = menu.querySelectorAll('.header__bottom-nav-link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__top-nav-list--active');

    menuBottom.classList.toggle('header__bottom-nav-list--active');

    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (element) {
  element.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__top-nav-list--active');

    menuBottom.classList.remove('header__bottom-nav-list--active');

    document.body.classList.remove('stop-scroll');
  });
});

menuLinksBottom.forEach(function (element) {
  element.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__top-nav-list--active');

    menuBottom.classList.remove('header__bottom-nav-list--active');

    document.body.classList.remove('stop-scroll');
  });
});

var selector = document.querySelector(".mail-box");
var im = new Inputmask("*@*.a");

im.mask(selector);

im.mask({
  mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
  greedy: false,
  onBeforePaste: function (pastedValue, opts) {
    pastedValue = pastedValue.toLowerCase();
    return pastedValue.replace("mailto:", "");
  },
  definitions: {
    '*': {
      validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
      casing: "lower",
    }
  }
});

const validate = new window.JustValidate('#about__form');

const validation = new JustValidate('#about__form');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы&nbsp;не&nbsp;ввели имя',
    },
    {
      rule: 'customRegexp',
      value: "[a-zA-Zа-яА-Я]",
      errorMessage: 'Недопустимые символы',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Имя слишком длинное',
    },
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы&nbsp;не&nbsp;ввели e-mail!',
    },
    {
      rule: 'email',
      errorMessage: 'Вы&nbsp;не&nbsp;ввели e-mail!',
    },
  ]);

const modal = new GraphModal();

document.querySelector('.header__top-enter').addEventListener('click', () => {
  new GraphModal().open('first');
});

document.querySelector('.btn-center').addEventListener('click', function () {
  document.querySelector('.btn-center').classList.toggle('btn-center--active')
  document.querySelector('.header__bottom').classList.toggle('header__bottom--active')
  document.querySelector('.btn-left').classList.toggle('btn-left--active')
  document.querySelector('.btn-right').classList.toggle('btn-right--active')
});

let playBtn = document.querySelectorAll('.playlist__mark');
playBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    playBtn.forEach(el => {
      if (el != this) {
        el.classList.remove('playlist__mark--active')
      };
    });
    this.classList.add('playlist__mark--active');
  });
});

let playLabel = document.querySelectorAll('.playlist__label');
playLabel.forEach(function (el) {
  el.addEventListener('click', function () {
    playLabel.forEach(el => {
      if (el != this) {
        el.classList.remove('playlist__label--active')
      };
    });
    this.classList.add('playlist__label--active');
  });
});


