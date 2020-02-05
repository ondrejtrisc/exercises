// document.addEventListener('DOMContentLoaded', () => {
//   let score = 0;
//   const scoreElement = document.querySelector('h1');
//   const board = document.querySelector('.board');
//   for (let i = 0; i < 3; i++) {
//     const chip = document.createElement('div');
//     chip.className = 'chip one';
//     chip.textContent = '1';
//     chip.style.top = String(Math.floor(Math.random()*60) + 20) + '%';
//     chip.style.left = String(Math.floor(Math.random()*90) + 5) + '%';
//     chip.addEventListener('click', () => {
//       chip.classList.add('chip--hidden');
//       score += 1;
//       scoreElement.textContent = `Score: ${score}`;
//     });
//     board.appendChild(chip);
//   }
//   for (let i = 0; i < 3; i++) {
//     const chip = document.createElement('div');
//     chip.className = 'chip two';
//     chip.textContent = '2';
//     chip.style.top = String(Math.floor(Math.random()*60) + 20) + '%';
//     chip.style.left = String(Math.floor(Math.random()*60) + 20) + '%';
//     chip.addEventListener('click', () => {
//       chip.classList.add('chip--hidden');
//       score += 2;
//       scoreElement.textContent = `Score: ${score}`;
//     });
//     board.appendChild(chip);
//   }
//   for (let i = 0; i < 3; i++) {
//     const chip = document.createElement('div');
//     chip.className = 'chip five';
//     chip.textContent = '5';
//     chip.style.top = String(Math.floor(Math.random()*60) + 20) + '%';
//     chip.style.left = String(Math.floor(Math.random()*60) + 20) + '%';
//     chip.addEventListener('click', () => {
//       chip.classList.add('chip--hidden');
//       score += 5;
//       scoreElement.textContent = `Score: ${score}`;
//     });
//     board.appendChild(chip);
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  let score = 0;
  const scoreElement = document.querySelector('h1');
  const board = document.querySelector('.board');

  class Chip {
    constructor (value) {
      this.value = value;
      if (value === 1) {
        this.textValue = 'one';
      }
      else if (value === 2) {
        this.textValue = 'two';
      }
      else {
        this.textValue = 'five';
      }
      this.top = String(Math.floor(Math.random()*86)) + '%';
      this.left = String(Math.floor(Math.random()*94)) + '%';
      this.render = () => {
        const chipElement = document.createElement('div');
        chipElement.className = 'chip ' + this.textValue;
        chipElement.textContent = String(this.value);
        chipElement.style.top = this.top;
        chipElement.style.left = this.left;
        chipElement.addEventListener('click', () => {
          chipElement.classList.add('chip--hidden');
          score += this.value;
          scoreElement.textContent = `Score: ${score}`;
        });
        board.appendChild(chipElement);
      };
    }
  }

  for (let i = 0; i < 3; i++) {
    const chip = new Chip(1);
    chip.render();
  }
  for (let i = 0; i < 3; i++) {
    const chip = new Chip(2);
    chip.render();
  }
  for (let i = 0; i < 3; i++) {
    const chip = new Chip(5);
    chip.render();
  }
});