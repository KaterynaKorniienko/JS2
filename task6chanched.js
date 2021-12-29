let input;
const numbers = [];
let total = 0;
for (let i = 0; true; i++) {
  let input = +prompt("Введите число:");

  if (input) {
    numbers.push(input);
  } else {
    if (numbers.length) {
      for (let num of numbers) {
        total += num;
      }
    }
    break;
  }
}
console.log(`Общая сумма чисел равна ${total}`);
