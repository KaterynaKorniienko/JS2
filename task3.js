const findLongestWord = function (string) {
  let words = string.split(" ");
  let max = 0;
  let longestWord;
  for (let word of words) {
    let length = word.length;
    if (word.length >max) {
      max = length;
      longestWord = word;
    }
  } 
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
