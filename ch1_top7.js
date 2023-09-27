const multiply1 = (...theArgs) => {
  let total = 1;
  for (const arg of theArgs) {
    total *= arg;
  }
  return total;
};

const multiply2 = function (...theArgs) {
  let total = 1;
  for (const arg of theArgs) {
    total *= arg;
  }
  return total;
};

function multiply3(...theArgs) {
  let total = 1;
  for (const arg of theArgs) {
    total *= arg;
  }
  return console.log(total);
}

function substraction(value) {
  console.log(value);
  if (value === 0) {
    return;
  }
  substraction(value - 10);
}

console.log(multiply1(2, 4));
console.log(multiply2(2, 4));
multiply3(2, 4);
substraction(100);
