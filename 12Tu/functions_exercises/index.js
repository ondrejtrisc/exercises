const square = x => x * x;

const hypotenuse = (a, b) => Math.sqrt(a*a + b*b);

const abs = x => {
  if (x >= 0) {
    return x;
  }
  return -x;
};

const emailFromLogin = login => login + "@codeboot.com";

const loginFromName = (firstName, lastName) => (lastName.slice(0, 5) + firstName.slice(0, 3)).toLowerCase();

const emailFromName = (firstName, lastName) => emailFromLogin(loginFromName(firstName, lastName));

const salary = (pay, hours, days) => pay * hours * days;

const taxed_salary = (theBasicSalary, tax) => theBasicSalary * (1 - tax / 100);

const max3 = (a, b, c) => {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
};

const spread3 = (a, b, c) => max3(a, b, c) + max3(-a, -b, -c);