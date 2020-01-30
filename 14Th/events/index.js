// document.addEventListener('DOMContentLoaded', () => {
//   const btnStop = document.querySelector("#btn")
//   btnStop.addEventListener('click', () => {
//     if (timerID !== undefined) {
//       clearInterval(timerID);
//       timerID = undefined;
//     }
//     else {
//       timerID = setInterval(() => console.log('hello'), 500);
//     }
//   });
//   let timerID = setInterval(() => console.log('hello'), 500);
// });


// document.addEventListener('DOMContentLoaded', () => {
  
//   const light = document.querySelector('#light');
//   const stop = document.querySelector('#stop');
//   const walk = document.querySelector('#walk');
//   light.addEventListener('click', () => {

//     stop.src = 'img/stop-off.svg';
//     walk.src = 'img/walk-on.svg';
//     setTimeout(() => {

//       stop.src = 'img/stop-on.svg';
//       walk.src = 'img/walk-off.svg';
//     }, 5000);
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {

//   const textElement = document.querySelector('#text');
//   let time = 3;
//   textElement.textContent = String(time);
//   let timerID = setInterval(() => {
//     if (time === 1) {
//       textElement.textContent = 'message';
//       clearInterval(timerID);
//     }
//     else {
//       time--;
//       textElement.textContent = String(time);
//     }
//   }, 1000);
// });


const timeFormat = (time) => {
  const mins = String(Math.floor(time / 60));
  let secs = time % 60;
  if (secs < 10) {
    secs = '0' + String(secs);
  }
  else {
    secs = String(secs);
  }
  return mins + ':' + secs;
}

document.addEventListener('DOMContentLoaded', () => {

  let timerID = undefined;
  const textElement = document.querySelector('#text');
  const startBtn = document.querySelector('#startBtn');
  const minsElement = document.querySelector('#mins');
  const secsElement = document.querySelector('#secs');
  startBtn.addEventListener('click', () => {
    if (timerID !== undefined) {
      clearInterval(timerID);
    }
    const mins = Number(minsElement.value);
    const secs = Number(secsElement.value);
    let time = mins * 60 + secs;
    textElement.textContent = timeFormat(time);
    timerID = setInterval(() => {
      if (time === 1) {
        textElement.textContent = 'done';
        clearInterval(timerID);
      }
      else {
        time--;
        textElement.textContent = timeFormat(time);
      }
    }, 1000);
  });
});