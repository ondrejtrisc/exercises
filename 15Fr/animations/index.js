// document.addEventListener('DOMContentLoaded', () => {
//   document.addEventListener('keypress', () => {
//     const box = document.querySelector('.box');
//     box.classList.toggle('box--anim');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  let image = document.querySelector('.spinning');
  setTimeout(() => {
    image.src = 'img/image.jpg';
    image.classList.remove('spinning');
  }, 4000);
});