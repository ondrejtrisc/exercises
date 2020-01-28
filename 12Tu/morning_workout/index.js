// let numberOfColumns = prompt("Number of columns:");
// let seatNumber = prompt("Seat number:");
// let column = seatNumber % numberOfColumns;
// if (column == 0) {column = numberOfColumns;}
// let rowNumber = Math.ceil(seatNumber / numberOfColumns);
// let row = String.fromCharCode(rowNumber + 64);
// document.write(row + column);


const numberOfColumns = Number(prompt("Number of columns:"));
const seatNumber = Number(prompt("Seat number:"));
const column = (seatNumber - 1) % numberOfColumns + 1;
const rowNumber = Math.ceil(seatNumber / numberOfColumns);
const row = String.fromCharCode(rowNumber + 64);
document.write(row + column);