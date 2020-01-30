document.addEventListener('DOMContentLoaded', () => {

  let sum = 0;
  const sumElement = document.querySelector('#sum');
  const numberElement = document.querySelector('#number');
  const equalsBtn = document.querySelector('#equals');
  const form = document.querySelector('#form');
  const add = () => {
    sum += Number(numberElement.value);
    sumElement.textContent = sum;
    numberElement.value = "";
    numberElement.focus();
  };
  equalsBtn.addEventListener('click', add);
  form.addEventListener('submit', add);
});
