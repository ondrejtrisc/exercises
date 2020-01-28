// let numberOfColumns = prompt("Number of columns:");
// let seatNumber = prompt("Seat number:");
// let column = seatNumber % numberOfColumns;
// if (column == 0) {column = numberOfColumns;}
// let rowNumber = Math.ceil(seatNumber / numberOfColumns);
// let row = String.fromCharCode(rowNumber + 64);
// document.write(row + column);


let numberOfColumns = Number(prompt("Number of columns:"));
let seatNumber = Number(prompt("Seat number:"));
let column = (seatNumber - 1) % numberOfColumns + 1;
let rowNumber = Math.ceil(seatNumber / numberOfColumns);
let row = String.fromCharCode(rowNumber + 64);
document.write(row + column);