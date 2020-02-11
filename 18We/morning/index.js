// let count = 4;

// document.addEventListener('DOMContentLoaded', () => {
//   let counterElement = document.querySelector('#counter');
//   let minusBtn = document.querySelector('#minus');
//   let plusBtn = document.querySelector('#plus');
//   let knob = document.querySelector('#knob');
//   update = () => {
//     counterElement.textContent = String(count);
//     knob.style.width = `${count * 10}%`;
//   };
//   minusBtn.addEventListener('click', () => {
//     if (count > 0) {
//       count--;
//       update();
//     }
//   });
//   plusBtn.addEventListener('click', () => {
//     if (count < 10) {
//       count++;
//       update();
//     }
//   });
// });


// class Bar {
//   constructor (count, color, max) {
//     this.count = count;
//     this.color = color;
//     this.max = max;
    
//     this.render = () => {
//       this.element = document.createElement('div');
//       this.element.innerHTML = `<div id="label" class="label">
//                                   <span id="counter"></span>/<span id="maximum">${this.max}</span>
//                                 </div>
//                                 <div class="progress">
//                                   <div id="minus" class="btn-minus"></div>
//                                   <div class="bar">
//                                     <div id="knob" class="knob"></div>
//                                   </div>
//                                   <div id="plus" class="btn-plus"></div>
//                                 </div>`;
//       const minusBtn = this.element.querySelector('#minus');
//       minusBtn.addEventListener('click', () => {
//         if (this.count > 0) {
//           this.count--;
//           this.update();
//         }
//       });
//       const plusBtn = this.element.querySelector('#plus');
//       plusBtn.addEventListener('click', () => {
//         if (this.count < this.max) {
//           this.count++;
//           this.update();
//         }
//       });
//       const knob = this.element.querySelector('#knob');
//       knob.style.backgroundColor = this.color;
//       this.update();
//     };

//     this.update = () => {
//       const counterElement = this.element.querySelector('#counter');
//       counterElement.textContent = String(this.count);
//       const knob = this.element.querySelector('#knob');
//       knob.style.width = `${this.count / this.max * 100}%`;
//     };

//     this.mount = () => {
//       document.querySelector('body').appendChild(this.element);
//     };
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const redBar = new Bar(5, 'red', 17);
//   redBar.render();
//   redBar.mount();
//   const greenBar = new Bar(5, 'green', 17);
//   greenBar.render();
//   greenBar.mount();
//   const blueBar = new Bar(5, 'blue', 17);
//   blueBar.render();
//   blueBar.mount();
//   const mixElem = document.createElement('div');
//   mixElem.className = 'progress';
//   mixElem.style.marginTop = '60px';
//   const update = () => {
//     mixElem.style.backgroundColor = `rgb(${redBar.count * 15}, ${greenBar.count * 15}, ${blueBar.count * 15})`;
//   }
//   redBar.element.querySelector('#minus').addEventListener('click', update);
//   redBar.element.querySelector('#plus').addEventListener('click', update);
//   greenBar.element.querySelector('#minus').addEventListener('click', update);
//   greenBar.element.querySelector('#plus').addEventListener('click', update);
//   blueBar.element.querySelector('#minus').addEventListener('click', update);
//   blueBar.element.querySelector('#plus').addEventListener('click', update);
//   update();
//   document.querySelector('body').appendChild(mixElem);
// });


class Bar {
  constructor (count, color, max) {
    this.count = count;
    this.color = color;
    this.max = max;
    
    this.render = () => {
      this.element = document.createElement('div');
      this.element.innerHTML = `<div id="label" class="label">
                                  <span id="counter"></span>/<span id="maximum">${this.max}</span>
                                </div>
                                <div class="progress">
                                  <div id="minus" class="btn-minus"></div>
                                  <div class="bar">
                                    <div id="knob" class="knob"></div>
                                  </div>
                                  <div id="plus" class="btn-plus"></div>
                                </div>`;
      const minusBtn = this.element.querySelector('#minus');
      minusBtn.addEventListener('mousedown', () => {
        this.timer = setInterval(() => {
          if (this.count > 0) {
            this.count--;
            this.update();
          }
        }, 10);
      });
      minusBtn.addEventListener('mouseup', () => {
        clearInterval(this.timer);
      });
      const plusBtn = this.element.querySelector('#plus');
      plusBtn.addEventListener('mousedown', () => {
        this.timer = setInterval(() => {
          if (this.count < this.max) {
            this.count++;
            this.update();
          }
        }, 10);
      });
      plusBtn.addEventListener('mouseup', () => {
        clearInterval(this.timer);
      });
      const knob = this.element.querySelector('#knob');
      knob.style.backgroundColor = this.color;
      this.update();
    };

    this.update = () => {
      const counterElement = this.element.querySelector('#counter');
      counterElement.textContent = String(this.count);
      const knob = this.element.querySelector('#knob');
      knob.style.width = `${this.count / this.max * 100}%`;
    };

    this.mount = () => {
      document.querySelector('body').appendChild(this.element);
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const redBar = new Bar(0, 'rgb(255, 0, 0)', 255);
  redBar.render();
  redBar.mount();
  const greenBar = new Bar(0, 'rgb(0, 255, 0)', 255);
  greenBar.render();
  greenBar.mount();
  const blueBar = new Bar(0, 'rgb(0, 0, 255)', 255);
  blueBar.render();
  blueBar.mount();
  const mixElem = document.createElement('div');
  mixElem.className = 'progress';
  mixElem.style.marginTop = '60px';
  const update = () => {
    mixElem.style.backgroundColor = `rgb(${redBar.count}, ${greenBar.count}, ${blueBar.count})`;
  }
  setInterval(update, 10);
  document.querySelector('body').appendChild(mixElem);
});