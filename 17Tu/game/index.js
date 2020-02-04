document.addEventListener('DOMContentLoaded', () => {
  let score = 0;
  const scoreElement = document.querySelector('h1');
  const board = document.querySelector('.board');
  for (let i = 0; i < 3; i++) {
    const chip = document.createElement('div');
    chip.className = 'chip one';
    chip.textContent = '1';
    chip.style.top = String(Math.floor(Math.random()*60) + 20) + '%';
    chip.style.left = String(Math.floor(Math.random()*90) + 5) + '%';
    chip.addEventListener('click', () => {
      chip.classList.add('chip--hidden');
      score += 1;
      scoreElement.textContent = `Score: ${score}`;
    });
    board.appendChild(chip);
  }
  for (let i = 0; i < 3; i++) {
    const chip = document.createElement('div');
    chip.className = 'chip two';
    chip.textContent = '2';
    chip.style.top = String(Math.floor(Math.random()*60) + 20) + '%';
    chip.style.left = String(Math.floor(Math.random()*60) + 20) + '%';
    chip.addEventListener('click', () => {
      chip.classList.add('chip--hidden');
      score += 2;
      scoreElement.textContent = `Score: ${score}`;
    });
    board.appendChild(chip);
  }
  for (let i = 0; i < 3; i++) {
    const chip = document.createElement('div');
    chip.className = 'chip five';
    chip.textContent = '5';
    chip.style.top = String(Math.floor(Math.random()*60) + 20) + '%';
    chip.style.left = String(Math.floor(Math.random()*60) + 20) + '%';
    chip.addEventListener('click', () => {
      chip.classList.add('chip--hidden');
      score += 5;
      scoreElement.textContent = `Score: ${score}`;
    });
    board.appendChild(chip);
  }
});