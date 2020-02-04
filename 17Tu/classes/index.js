// class Product {
//   constructor(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.sell = () => {
//       this.quantity--;
//     };
//     this.store = count => {
//       this.quantity += count;
//     };
//   }
// }

// const products = [];
// for (let i = 0; i < 7; i++) {
//   products.push(new Product('product'+String(i), i*10, i*100));
// }
// console.log(products);

// class Bus {
//   constructor (direction, stations, seats, passengers, last_station) {
//     this.direction = direction;
//     this.stations = stations;
//     this.seats = seats;
//     this.passengers = passengers;
//     this.last_station = last_station;
//     this.current = () => {
//       return this.last_station;
//     };
//     this.next = () => {
//       this.last_station = stations[stations.indexOf(last_station) + 1];
//     };
//     this.board = count => {
//       if (this.passengers + count >= this.seats) {
//         this.passengers = this.seats;
//       }
//       else {
//         this.passengers += count;
//       }
//     };
//     this.unboard = count => {
//       if (this.passengers - count <= 0) {
//         this.passengers = 0;
//       }
//       else {
//         this.passengers -= count; 
//       }
//     };
//   }
// }

// const bus = new Bus('Prague -> Vienna', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 50, 20, 'Praha');



