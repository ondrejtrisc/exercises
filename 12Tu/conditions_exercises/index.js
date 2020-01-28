// const alpha = Number(prompt("alpha:"));
// const beta = Number(prompt("beta:"));
// const gamma = Number(prompt("gamma:"));
// if (alpha + beta + gamma === 180) {
//   document.write("Valid triangle");
// }
// else {
//   document.write("Not a valid triangle");
// }


// const month = Number(prompt("Month number:"));
// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//   document.write(31);
// }
// else if (month === 2) {
//   document.write(28);
// }
// else {
//   document.write(30);
// }


// prompt("login:");
// const password = prompt("password:");
// if (password === "sore-thumb-218") {
//   document.write("access granted");
// }
// else {
//   document.write("Nice try");
// }

// const password1 = prompt("password:");
// const password2 = prompt("repeat password");
// if (password1 === password2) {
//   document.write("success");
// }
// else {
//   document.write("Passwords do not match.");
// }

// const password1 = prompt("password:");
// if (password1.length >= 8) {
//   const password2 = prompt("repeat password");
//   if (password1 === password2) {
//     document.write("success");
//   }
//   else {
//     document.write("Passwords do not match.");
//   }
// }
// else {
//   document.write("Your password is no secure.");
// }


// const age = prompt("your age:");
// let price = 6;
// if (age < 6) {
//   price = 0;
// }
// else if (age <= 15) {
//   price = 12 * 0.35;
// }
// else if (age <= 26) {
//   price = 12 * 0.65;
// }
// else if (age <= 64) {
//   price = 12;
// }
// document.write("Your price is " + (Math.round(price * 100)) / 100);


// const t1 = Number(prompt("temperature at 8 a.m.:"));
// const t2 = Number(prompt("temperature at 4 p.m.:"));
// const t3 = Number(prompt("temperature at midnight:"));
// let max = t1;
// if (t2 > max) {
//   max = t2;
// }
// if (t3 > max) {
//   max = t3;
// }
// document.write(max);


// const name1 = prompt("name 1:");
// const name2 = prompt("name 2:");
// const name3 = prompt("name 3:");
// const time1 = Math.random() * 15 + 45;
// const time2 = Math.random() * 15 + 45;
// const time3 = Math.random() * 15 + 45;
// let gold, silver, bronze;
// if (time1 < time2) {
//   if (time1 < time3) {
//     gold = name1;
//     if (time2 < time3) {
//       silver = name2;
//       bronze = name3;
//     }
//     else {
//       silver = name3;
//       bronze = name2;
//     }
//   }
//   else {
//     gold = name3;
//     silver = name1;
//     bronze = name2;
//   }
// }
// else {
//   if (time2 < time3) {
//     gold = name2;
//     if (time1 < time3) {
//       silver = name1;
//       bronze = name3;
//     }
//     else {
//       silver = name3;
//       bronze = name1;
//     }
//   }
//   else {
//     gold = name3;
//     silver = name2;
//     bronze = name1;
//   }
// }
// document.write("gold: " + gold + "<br>");
// document.write("silver: " + silver + "<br>");
// document.write("bronze " + bronze + "<br>");


// const year = Number(prompt("year:"));
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       document.write(year + " is a leap year");
//     }
//     else {
//       document.write(year + " is not a leap year");
//     }   
//   }
//   else {
//     document.write(year + " is a leap year");
//   }
// }
// else {
//   document.write(year + " is not a leap year");
// }