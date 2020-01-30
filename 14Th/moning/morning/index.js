let sum = 0;

const add = () => {

  const sumElement = document.querySelector("#sum");
  const numberElement = document.querySelector("#number");
  sum += Number(numberElement.value);
  sumElement.textContent = sum;
  numberElement.value = "";
  numberElement.focus();
};