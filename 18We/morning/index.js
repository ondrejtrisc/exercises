let count = 4;

document.addEventListener('DOMContentLoaded', () => {
  let counterElement = document.querySelector('#counter');
  let minusBtn = document.querySelector('#minus');
  let plusBtn = document.querySelector('#plus');
  let knob = document.querySelector('#knob');
  update = () => {
    counterElement.textContent = String(count);
    knob.style.width = `${count * 10}%`;
  };
  minusBtn.addEventListener('click', () => {
    if (count > 0) {
      count--;
      update();
    }
  });
  plusBtn.addEventListener('click', () => {
    if (count < 10) {
      count++;
      update();
    }
  });
});