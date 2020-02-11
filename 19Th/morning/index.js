// let value = 3;

// document.addEventListener('DOMContentLoaded', () => {
//   const valueElm = document.querySelector('.rating__value');
//   const stars = document.querySelectorAll('.rating__star');

//   const update = () => {
//     valueElm.textContent = String(value);
//     for (let i = 0; i < value; i++) {
//       stars[i].classList.add('rating__star--on');
//     }
//     for (let i = value; i < 5; i++) {
//       stars[i].classList.remove('rating__star--on');
//     }
//   };

//   for (let i = 0; i < 5; i++) {
//     stars[i].addEventListener('click', () => {
//       value = i + 1;
//       update();
//     });
//   }
// });


class Rating {
  constructor(value) {
    this.value = value;

    this.render = () => {
      this.element = document.createElement('div');
      this.element.className = 'rating';
      this.element.innerHTML = `<div class="rating__value"></div>
                                <div class="rating__stars">
                                  <div class="rating__star"></div>
                                  <div class="rating__star"></div>
                                  <div class="rating__star"></div>
                                  <div class="rating__star"></div>
                                  <div class="rating__star"></div>
                                </div>`;
      this.stars = this.element.querySelectorAll('.rating__star');
      for (let i = 0; i < 5; i++) {
        this.stars[i].addEventListener('click', () => {
          this.value = i + 1;
          this.update();
        });
      }
      this.update();
    };

    this.update = () => {
      const valueElm = this.element.querySelector('.rating__value');
      valueElm.textContent = String(this.value);
      for (let i = 0; i < this.value; i++) {
        this.stars[i].classList.add('rating__star--on');
      }
      for (let i = this.value; i < 5; i++) {
        this.stars[i].classList.remove('rating__star--on');
      }
    };

    this.mount = () => {
      document.querySelector('body').appendChild(this.element);
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keypress', () => {
    const rating = new Rating(3);
    rating.render();
    rating.mount();
  })
});