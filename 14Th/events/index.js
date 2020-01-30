document.addEventListener('DOMContentLoaded', () => {
  const btnStop = document.querySelector("#btn")
  btnStop.addEventListener('click', () => {
    if (timerID !== undefined) {
      clearInterval(timerID);
      timerID = undefined;
    }
    else {
      timerID = setInterval(() => console.log('hello'), 500);
    }
  });
  let timerID = setInterval(() => console.log('hello'), 500);
});
