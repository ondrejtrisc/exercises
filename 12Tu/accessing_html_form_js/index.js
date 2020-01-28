

const showMessage = () => {
  const nameInput = document.querySelector("#name");
  // const numberInput = document.querySelector("#selection");
  const msg = document.querySelector(".message");
  msg.textContent = "Hello " + nameInput.value;
  // msg.textContent = "Hello " + numberInput.value;
}