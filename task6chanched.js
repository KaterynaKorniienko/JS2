let input;
const numbers = [];
let total = 0;
// for (let i = 0; true; i++) {
//   input = prompt("Enter a number:");
//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   }else if (input!==null){
//     numbers.push(input);
// }if (numbers.length > 0) {
//     for (const number of numbers) {
//       total += number;
//     }
//   }
//   console.log(`Общая сумма чисел равна ${total}`);
// }
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
