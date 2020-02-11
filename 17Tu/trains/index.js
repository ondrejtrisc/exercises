// const departures = [
//   { 
//     time: { hrs: 8, mins: 14}, 
//     train: 'Acela Express', 
//     no: 2153, 
//     to: 'Washington, DC', 
//     status: '', 
//     track: 2,
//   },
//   {
//     time: { hrs: 8, mins: 19 }, 
//     train: 'New Haven Line', 
//     no: 1541, 
//     to: 'Grand Central Terminal', 
//     status: 'On Time', 
//     track: 14,
//   },
//   {
//     time: { hrs: 8, mins: 20 }, 
//     train: 'Shore Line East', 
//     no: 1606, 
//     to: 'Old Saybrook', 
//     status: 'On Time', 
//     track: 12,
//   },
//   {
//     time: { hrs: 8, mins: 37 }, 
//     train: 'N.E. Regional', 
//     no: 190, 
//     to: 'Boston South Station', 
//     status: 'On Time', 
//     track: 1,
//   },
//   {
//     time: { hrs: 8, mins: 40 }, 
//     train: 'Shuttle', 
//     no: 490, 
//     to: 'Springfield', 
//     status: 'On Time', 
//     track: 3,
//   },
//   {
//     time: { hrs: 8, mins: 43 }, 
//     train: 'N.E. Regional', 
//     no: 96, 
//     to: 'Newport News', 
//     status: 'On Time', 
//     track: 2,
//   },
//   {
//     time: { hrs: 8, mins: 50 }, 
//     train: 'New Haven Line', 
//     no: 1545, 
//     to: 'Grand Central Terminal', 
//     status: 'On Time', 
//     track: 8,
//   },
//   {
//     time: { hrs: 9, mins: 16 }, 
//     train: 'Shore Line East', 
//     no: 1610, 
//     to: 'Old Saybrook', 
//     status: 'On Time', 
//     track: 10,
//   },
//   {
//     time: { hrs: 9, mins: 23 }, 
//     train: 'New Haven Line', 
//     no: 1549, 
//     to: 'Grand Central Terminal', 
//     status: 'On Time', 
//     track: 14,
//   },
//   { 
//     time: { hrs: 9, mins: 36 }, 
//     train: 'Acela Express', 
//     no: 2150, 
//     to: 'Boston-South Sta.', 
//     status: '', 
//     track: 1,
//   },
//   {
//     time: { hrs: 9, mins: 46 }, 
//     train: 'New Haven Line', 
//     no: 1551, 
//     to: 'Grand Central Terminal', 
//     status: 'On Time', 
//     track: 8,
//   },
//   {
//     time: { hrs: 10, mins: 13 }, 
//     train: 'N.E. Regional', 
//     no: 170, 
//     to: 'Boston South Station', 
//     status: 'On Time', 
//     track: 2,
//   },
//   {
//     time: { hrs: 10, mins: 25 }, 
//     train: 'New Haven Line', 
//     no: 1553, 
//     to: 'Grand Central Terminal', 
//     status: 'On Time', 
//     track: 14,
//   },
// ];


// const generateLineText = departure => {
  
//   return `<td class="board__time">${departure.time.hrs + ':' + departure.time.mins}</td>
//           <td class="board__train">${departure.train}</td>
//           <td class="board__no">${departure.no}</td>
//           <td class="board__to">${departure.to}</td>
//           <td class="board__status">${departure.status}</td>
//           <td class="board__track">${departure.track}</td>`;
// };

// document.addEventListener('DOMContentLoaded', () => {
//   let timeTableElement = document.querySelector('#timeTable');
//   for (const departure of departures) {
//     let line = document.createElement('tr');
//     line.innerHTML = generateLineText(departure);
//     let button = document.createElement('td');
//     button.innerHTML = `<button>Delayed</button>`;
//     button.addEventListener('click', () => {
//       if (departure.status === 'Delayed') {
//         departure.status = 'On Time';
//       }
//       else {
//         departure.status = 'Delayed';
//       }
//       line.innerHTML = generateLineText(departure);
//       line.appendChild(button);
//       line.classList.toggle('delayed');
//     });
//     line.appendChild(button);
//     timeTableElement.appendChild(line);
//   }
// });

class Line {
  constructor(departure) {
    this.hrs = departure.time.hrs;
    this.mins = departure.time.mins;
    this.train = departure.train;
    this.no = departure.no;
    this.to = departure.to;
    this.status = departure.status;
    this.track = departure.track;

    this.render = () => {
      this.element = document.createElement('tr');
      this.element.innerHTML = `<td class="board__time"></td>
                                <td class="board__train"></td>
                                <td class="board__no"></td>
                                <td class="board__to"></td>
                                <td class="board__status"></td>
                                <td class="board__track"></td>`;
      this.update();
      let button = document.createElement('td');
      button.innerHTML = `<button>Delayed</button>`;
      button.addEventListener('click', () => {
        if (this.status === 'Delayed') {
          this.status = 'On Time';
        }
        else {
          this.status = 'Delayed';
        }
        this.element.classList.toggle('delayed');
        this.update();
      });
      this.element.appendChild(button);
    };

    this.update = () => {
      this.element.querySelector('.board__time').textContent = `${this.hrs + ':' + this.mins}`;
      this.element.querySelector('.board__train').textContent = `${this.train}`;
      this.element.querySelector('.board__no').textContent = `${this.no}`;
      this.element.querySelector('.board__to').textContent = `${this.to}`;
      this.element.querySelector('.board__status').textContent = `${this.status}`;
      this.element.querySelector('.board__track').textContent = `${this.track}`;
    };

    this.mount = () => {
      document.querySelector('#timeTable').appendChild(this.element);
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {

  fetch('http://bootcamp.podlomar.org/api/departures')
    .then(response => response.json())
    .then(json => {
      for (const departure of json) {
        const line = new Line(departure);
        line.render();
        line.mount();
      }
    });
});