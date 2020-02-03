document.addEventListener('DOMContentLoaded', () => {
  let menu = document.querySelector('#menu');
  let text = document.querySelector('#menu__text');
  let main = document.querySelector('#main');
  menu.addEventListener('mouseenter', () => {
    menu.classList.add('menu--expanded');
    text.classList.add('menu__text--expanded');
    main.classList.add('main--shrunk');
  });
  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('menu--expanded');
    text.classList.remove('menu__text--expanded');
    main.classList.remove('main--shrunk');
  });
});