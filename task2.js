const calculateEngravingPrice = function (message, pricePerWord) {
  return message.split("").length* pricePerWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80=4160

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160=8320

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240=8640

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120=4320