// const roll = () => {

//   const side = Math.floor(Math.random()*6) + 1;
//   const img = document.querySelector("#dice");
//   img.src = "side" + String(side) + ".png";

//   const bet = Number(document.querySelector("#bet").value);
//   const account = document.querySelector("#account")
//   let balance = Number(account.textContent);
//   if (side === 6) {
//     balance = balance + 6 * bet;
//   }
//   else {
//     balance = balance - bet;
//   }
//   account.textContent = balance;
// };

const roll = () => {

  const side1 = Math.floor(Math.random()*6) + 1;
  const side2 = Math.floor(Math.random()*6) + 1;
  const sum = side1 + side2;
  const img1 = document.querySelector("#dice1");
  const img2 = document.querySelector("#dice2");
  img1.src = "side" + String(side1) + ".png";
  img2.src = "side" + String(side2) + ".png";


  const bet = Number(document.querySelector("#bet").value);
  const choice = document.querySelector("#choice").value;
  const account = document.querySelector("#account")
  let balance = Number(account.textContent);

  if (choice === "under") {
    if (sum < 7) {
      balance = balance + bet;
    }
    else {
      balance = balance - bet;
    }
  }
  else if (choice === "seven") {
    if (sum === 7) {
      balance = balance + 4 * bet;
    }
    else {
      balance = balance - bet;
    }
  }
  else {
    if (sum > 7) {
      balance = balance + bet;
    }
    else {
      balance = balance - bet;
    }
  }
  account.textContent = balance;
};