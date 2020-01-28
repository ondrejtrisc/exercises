// const displayAlert = () => alert("Product added to cart");

// const displayAlert = () => {
//   let button = document.querySelector("#button");
//   button.className = "bought";
//   let amount= document.querySelector("#amount").value;
//   button.textContent = amount + " pieces in cart";
// }

// const logIn = () => {
//   let password = document.querySelector("#password").value;
//   if (password === "password") {
//     document.write("Your're logged in.");
//   }
//   else {
//     document.write("wrong password");
//   }
// }

const change = () => {
  let bulb = document.querySelector("#bulb");
  if (bulb.className === "off") {
    bulb.className = "on";
  }
  else {
    bulb.className = "off";
  }
};
